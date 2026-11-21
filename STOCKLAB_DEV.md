# StockLab Digital — Dokumen Pengembangan Sistem

> Versi: 0.1 (engine selesai, belum ada server/UI)
> Target: 5 pemain + Banker (host), server-authoritative, realtime.

---

## 1. Status Saat Ini

| Komponen | Status | File |
|---|---|---|
| Config deck & angka | Selesai | `config.ts` |
| Game engine (state machine) | Selesai | `engine.ts` |
| Unit test aturan inti | 10/10 lolos | `engine.test.ts` |
| Bot simulator + invariant check | Selesai (2000 game lolos) | `simulate.ts` |
| Server realtime | Belum | – |
| UI pemain & Banker | Belum | – |

**Cara menjalankan** (Node ≥ 22.6, tanpa dependency):

```bash
node --experimental-strip-types --test engine.test.ts
node --experimental-strip-types simulate.ts 2000
```

---

## 2. Ringkasan Aturan (yang diimplementasikan)

**Total 6 siklus. Tiap siklus: Bidding → Aksi → Jual → Ekonomi.** Menang = koin terbanyak setelah likuidasi dan pelunasan utang.

**Setup**
- 4 sektor (Konsumer, Keuangan, Agrikultur, Tambang), urutan papan diacak, harga awal 5, rentang 0–10.
- Reksa Dana berada di antara sektor ke-2 dan ke-3 → harga = `floor((harga[2] + harga[3]) / 2)`.
- 4 tumpukan ekonomi × 6 kartu tertutup. Tiap pemain: 15 koin + 1 Kartu Urutan acak.
- Deck aksi 60 kartu (48 saham = 12 × 4 sektor, 12 reksa dana), tiap kartu punya efek dan trading fee.

**Fase 1 — Bidding**: buka `2 × pemain` kartu aksi (filter: maks 3 kartu sektor sama, maks 3 Quick Buy, kalau melanggar kocok ulang). Lelang tertutup serentak; bid minimal 1 koin (0 hanya bila pemain tidak punya koin), dibayar ke bank. Tertinggi = Urutan 1. Seri → nomor urutan lama yang lebih kecil menang.

**Fase 2 — Aksi**: urutan 1→N, berputar sampai kartu terbuka habis. Tiap kartu dipilih sebagai **aset** (efek mati) atau **efek** (kartu dibuang). Trading fee dibayar saat mengambil; tidak boleh berutang untuk fee.

| Efek | Perilaku |
|---|---|
| Quick Buy | Ambil 2 kartu terbuka lagi, wajib jadi aset, giliran selesai |
| Info Bursa | Intip kartu ekonomi teratas dari 2 sektor + 2 koin; jual paling akhir |
| Rumor | Geser harga ±1 di 1–2 sektor, atau ±2 di satu sektor. Clamp 0–10, tidak memicu Crash/Split |
| Akuisisi | Ambil 1 saham (bukan reksa dana) lawan, bayar `floor(harga/2)` ke Bank. Syarat: jumlah saham sektor itu milik pengakuisisi ≥ milik target. Split token ikut |

**Fase 3 — Jual**: tiap pemain maks 1 jenis aset (jumlah lembar bebas). Saham = `harga × (Split ? 2 : 1)`. Reksa Dana **tidak** dijual di fase ini — cair otomatis saat likuidasi akhir.

**Fase 4 — Ekonomi**: buka 1 kartu dari tiap tumpukan. Ungu dieksekusi dulu (kiri→kanan), lalu biasa. Restrukturisasi membatalkan semua efek lain dan reset harga ke 5.

| Tipe | Efek |
|---|---|
| MOVE | Geser harga sektor (+2, +1, 0, −1, −2) |
| BOOM / CRASH | +3 (plus Split sektor itu) / −3 |
| SPLIT | Semua pemegang saham sektor itu dapat Split token (maks 1/kartu) |
| DIVIDEND | +1 atau +2 koin per lembar saham sektor itu |
| RIGHT_ISSUE | Harga −1; tiap pemilik saham sektor itu dapat 1 kartu saham baru + Split |
| EXTRA_FEE (ungu) | Bayar 1 koin per kartu aset |
| PAJAK (ungu) | Bayar koin = nomor Kartu Urutan |
| BUYBACK (ungu) | Harga +1, semua pemain wajib jual saham sektor itu |
| RESESI / STIMULUS (ungu) | Semua harga >5 turun 1 / semua harga <5 naik 1 |
| RESTRUCTURE (ungu) | Batalkan semua efek lain, semua harga → 5 |

**Stock Crash / Stock Split otomatis**: setiap perubahan harga yang menembus batas bawah 0 → semua saham sektor itu kembali ke Bank dan harga reset 5 (Crash). Menembus batas atas 10 → tiap lembar pemegang dapat token Split dan harga berhenti di 10 (Split).

**Utang**: hanya paksa, saat wajib bayar (Extra Fee, Pajak, beli Akuisisi) dan koin kurang. 1 Kartu Utang = pinjaman 10 koin (kembalian masuk saldo), −13 skor di akhir.

**Akhir**: likuidasi semua aset di harga terakhir → skor = koin − 13 × kartu utang. Seri → nomor urutan siklus terakhir yang lebih kecil.

---

## 3. Arsitektur

```
┌──────────┐  intent (Action)   ┌──────────────────────────┐
│ Client   │ ─────────────────► │ Server (authoritative)   │
│ pemain   │ ◄───────────────── │  - Room manager          │
│ (5x)     │  viewFor(state,pid)│  - applyAction() [engine]│
└──────────┘                    │  - Action log (replay)   │
┌──────────┐  host control      │  - Auth: session → pid   │
│ Banker   │ ─────────────────► │                          │
│ (host)   │ ◄───────────────── └──────────────────────────┘
└──────────┘  viewFor(state,-1)
```

**Prinsip wajib**
1. **Server-authoritative.** Client hanya kirim intent. Hasil (harga, koin, urutan) selalu dihitung server.
2. **`pid` diambil dari session, bukan dari payload.** Kalau tidak, pemain bisa bertindak atas nama lawan.
3. **Engine = pure function.** `applyAction(state, pid, action) → newState`, error → throw `GameError` dan state lama tidak berubah (atomic via `structuredClone`).
4. **Seeded RNG, disimpan di state.** Seed + daftar action = replay deterministik penuh. Berguna untuk debug, anti-cheat audit, dan reconnect.
5. **Tidak ada state di client yang dipercaya.** Setiap perubahan lewat `viewFor` terbaru.

**Peran Banker.** Di aturan fisik, Banker mengelola bank, membuka kartu, dan menggeser papan. Di versi digital semua itu **otomatis oleh engine** (fase Ekonomi, buka kartu aksi, hitung bank). Client Banker adalah *host/observer*: melihat state publik (`viewFor(s, -1)`), mengontrol room (mulai, jeda, kick). Banker **tidak boleh** memutasi state game.

### 3.1 State machine

```
BIDDING ──(semua bid masuk)──► ACTION ──(kartu terbuka habis / tak ada yang mampu fee)──► SELL
   ▲                                                                                        │
   │                                                                                        ▼
   └────────────(round ≤ 6)──────────────────── EKONOMI (otomatis) ◄──(antrean jual habis)──┘
                                                      │ (round > 6)
                                                      ▼
                                                    ENDED
```

Fase Ekonomi tidak punya action pemain; engine menjalankannya otomatis setelah pemain terakhir selesai menjual.

### 3.2 Kontrak Action

```ts
type Action =
  | { type: 'BID';  amount: number }
  | { type: 'TAKE'; cardId: number; mode: 'save' | 'effect'; params?: EffectParams }
  | { type: 'SELL'; cardIds: number[] };   // [] = pass

interface EffectParams {
  moves?: { sector: Sector; delta: 1 | -1 }[]; // RUMOR (1–2 item)
  sectors?: Sector[];                          // INFO (2 sektor berbeda)
  targetCardId?: number;                       // ACQUIRE
  cardIds?: number[];                          // QUICK_BUY (tepat min(2, sisa kartu terbuka))
}
```

`currentActors(state)` mengembalikan siapa yang boleh bertindak (BIDDING: semua yang belum bid; lainnya: pemegang giliran).

### 3.3 Hidden information

| Data | Pemain sendiri | Lawan | Banker/penonton |
|---|---|---|---|
| Jumlah koin | Ya | **Tidak** | **Tidak** |
| Bid (sebelum semua masuk) | Ya | Hanya "sudah bid" | Hanya "sudah bid" |
| Aset (kartu di meja) | Ya | Ya | Ya |
| Kartu Utang | Ya | Ya | Ya |
| Urutan tumpukan ekonomi | Tidak | Tidak | Tidak |
| Hasil Info Bursa (`peeks`) | Ya | **Tidak** | **Tidak** |
| Urutan deck aksi | Tidak | Tidak | Tidak |

`viewFor(state, pid)` adalah satu-satunya jalur data ke client. **Jangan pernah kirim `GameState` mentah.** Hati-hati juga dengan `log`: hanya boleh berisi kejadian publik (jangan tambahkan log yang memuat jumlah koin atau isi peek).

### 3.4 Protokol realtime (usulan)

| Arah | Pesan | Isi |
|---|---|---|
| C → S | `ACTION` | `{ action }` (pid dari session) |
| S → C | `STATE` | `viewFor(state, pid)` (kirim penuh, ukuran kecil) |
| S → C | `ERROR` | `{ message }` untuk `GameError` |
| S → C | `TURN` | pemegang giliran + deadline |
| C → S | `RESUME` | token session, untuk reconnect |

Transport: WebSocket. Tiap room satu proses/aktor tunggal yang memproses action secara serial (hindari race condition: dua pemain bid bersamaan harus tetap diproses berurutan).

---

## 4. Asumsi & Keputusan Terbuka

Semua nilai di bawah ada di `config.ts` atau ditandai di `engine.ts`, jadi bisa diubah tanpa menyentuh logic.

| # | Hal | Default sekarang | Status |
|---|---|---|---|
| 1 | Komposisi deck ekonomi | 34 kartu (lihat `ECONOMY_DECK`), 24 dipakai | **Placeholder**, rulebook cuma bilang 30–36 |
| 2 | Distribusi trading fee | 36 kartu gratis, 16 kartu 1 koin, 8 kartu 2 koin | **Placeholder** |
| 3 | Penempatan efek ke sektor/jenis kartu | Acak (24/12/10/8/6 sesuai rulebook) | Perlu data kartu asli kalau mau akurat |
| 4 | Suplai Kartu Utang | Tak terbatas (fisik cuma 5) | Perlu keputusan |
| 5 | Suplai Split token | Tak terbatas (fisik 10) | Perlu keputusan |
| 6 | Utang > 10 koin | `ceil(kurang/10)` kartu sekaligus | Asumsi |
| 7 | Right Issue: sumber kartu baru | Kartu saham polos dari bank (bukan dari deck aksi) + Split | Asumsi |
| 8 | Quick Buy | Wajib pilih tepat `min(2, sisa)` kartu dan semua fee harus terbayar; kalau tidak bisa, pemain simpan kartu sebagai aset | Asumsi |
| 9 | Tidak ada yang mampu bayar fee | Pemain di-skip; kalau semua tak mampu, kartu sisa dibuang | Asumsi |
| 10 | Filter buka kartu gagal 100 kali | Terima apa adanya | Asumsi (jarang terjadi) |
| 11 | Urutan eksekusi kartu biasa di Ekonomi | Kiri → kanan papan | Asumsi |
| 12 | Peran Banker | Otomatis oleh engine + host UI (rulebook asli: Banker adalah salah satu pemain) | **Perlu konfirmasi** |
| 13 | Sektor ke-2 & ke-3 untuk Reksa Dana | Posisi tetap di papan setelah diacak | Sesuai rulebook |

---

## 5. Hasil Simulasi (2000 game, 5 bot)

Seat 0–1 bot random, seat 2–4 bot "smart" (heuristik sederhana).

| Metrik | Hasil |
|---|---|
| Game selesai tanpa error / invariant violation | 2000 / 2000 |
| Rata-rata aksi per game | 106 |
| Harga akhir rata-rata | Konsumer 5.94, Keuangan 5.91, Agrikultur 5.97, Tambang 6.03 |
| Game dengan Kartu Utang | 9.5% |
| Skor rata-rata (seat 0–4) | 55.3, 55.2, 53.8, 52.8, 52.9 |
| Skor min / max | 2 / 180 |
| Win-rate | random 43.9% (2 seat), smart 56.1% (3 seat) |

**Cara baca (jujur):**
- Ini **sanity check**, bukan bukti balance. Bot naif, jadi jangan menyimpulkan strategi optimal dari angka ini.
- Harga cenderung naik sedikit (rata-rata ~5.9). Wajar untuk awal, tapi pantau setelah deck ekonomi asli masuk.
- Utang jarang terjadi (~10%). Kalau mau mekanik utang terasa, tuning ada di deck ekonomi dan fee, bukan di engine.
- Skor seat seimbang (~53–55), jadi tidak ada bias seat yang jelas dari engine.
- Per-seat, smart masih unggul tipis (18.7% vs 22% per seat). Artinya keputusan pemain belum terlalu menentukan hasil di bot ini; perlu bot lebih cerdas untuk menilai skill ceiling.

---

## 6. Roadmap

| Milestone | Isi | Kriteria selesai |
|---|---|---|
| **M1 — Engine** ✅ | Aturan inti, test, simulator | 10 test lolos, 2000 game tanpa error |
| **M2 — Data kartu asli** | Ganti placeholder #1–#3 dengan komposisi resmi | Hitungan deck cocok dengan rulebook fisik |
| **M3 — Server realtime** | Room, session → pid, WebSocket, serialisasi action, `viewFor` per klien | 5 klien dummy menyelesaikan 1 game penuh |
| **M4 — Client pemain** | Papan pasar, bid, draft kartu, jual, notifikasi giliran | Playtest 5 orang manusia sampai selesai |
| **M5 — Host Banker UI** | Kontrol room, tampilan publik, log kejadian | Banker bisa mulai/jeda/kick tanpa menyentuh state |
| **M6 — Hardening** | Persistensi state + action log, reconnect, timeout giliran, rate limit, logging | Server restart tidak merusak game berjalan |
| **M7 — Balance** | Bot lebih cerdas, tuning deck, analisis 10k game | Distribusi harga dan win-rate sesuai target desain |

---

## 7. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Hidden info bocor lewat payload/log | Cheating | Selalu lewat `viewFor`; test khusus (sudah ada); review log tiap tambah fitur |
| Pemain spoof `pid` | Bertindak atas nama lawan | pid dari session server-side |
| Race condition (bid/aksi bersamaan) | State korup | Satu aktor serial per room |
| Pemain disconnect saat gilirannya | Game macet | Timeout + auto-pass (BID 0, SELL `[]`, TAKE save kartu termurah) + reconnect |
| Rulebook ambigu → bug logic | Aturan salah | Semua ambiguitas di tabel §4, dipusatkan di config, dites |
| Balance tidak sesuai game asli | Gameplay beda | Tunggu data kartu asli (M2), simulasi ulang |
| Perubahan config merusak game berjalan | Inkonsistensi | Versikan config; simpan `configVersion` di state saat game dibuat |

---

## 8. Struktur File

```
stocklab/
├── config.ts          # semua angka & komposisi deck (OFFICIAL vs ASSUMPTION ditandai)
├── engine.ts          # newGame, applyAction, resolveEconomy, viewFor, currentActors
├── engine.test.ts     # unit test aturan inti (node:test)
├── simulate.ts        # bot + invariant check + statistik
└── STOCKLAB_DEV.md    # dokumen ini
```

**API publik `engine.ts`:** `newGame(playerCount, seed)`, `applyAction(state, pid, action)`, `currentActors(state)`, `viewFor(state, pid)`, `fundPrice(state)`, `resolveEconomy(state)` (diekspor untuk test), `pay(...)` (diekspor untuk test), `GameError`.

---

## 9. Konvensi Pengembangan

- Angka game **tidak boleh hardcode** di `engine.ts`; masuk ke `config.ts`.
- Setiap aturan baru wajib punya unit test yang membangun state manual (lihat pola `setTops`, `card()` di test).
- Setiap perubahan aturan → jalankan `simulate.ts 2000` dan pastikan tidak ada invariant violation (koin ≥ 0, harga 0–10, game selalu selesai).
- Error aksi ilegal selalu `GameError` (aman ditampilkan ke user); error lain = bug, jangan dikirim ke client.
- Jangan tambah state mutable di luar `GameState` (menjaga replay deterministik).

---

## 10. Pertanyaan Terbuka (butuh keputusan produk)

1. Stack server/client? (Engine sudah TypeScript murni, jadi bisa dipakai di Node/Bun/Deno atau di-bundle ke client untuk prediksi lokal.)
2. Banker: tetap otomatis + host UI, atau ada pemain ke-6 manusia dengan hak khusus?
3. Mode main: hanya online realtime, atau juga hot-seat / lokal satu layar?
4. Apakah suplai fisik (5 Kartu Utang, 10 Split token) dipertahankan sebagai batasan, atau dibuat tak terbatas?
5. Ada timer giliran? Kalau ya, berapa detik per fase?
