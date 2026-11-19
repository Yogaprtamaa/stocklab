'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, saveSession } from '@/lib/client';
import type { Difficulty } from '@/lib/bot';
import { SECTOR_FELT } from '@/lib/meta';
import { SECTORS } from '@/config';
import type { Sector } from '@/config';
import { sfx } from '@/lib/sound';
import { SoundToggle } from '@/components/SoundToggle';
import { PhysicalCard } from '@/components/table';
import { IconBot, IconCoin, IconCrown, IconEye, IconLogo, IconMinus, IconPlay, IconPlus, IconUser, KindIcon } from '@/components/icons';

const PREVIEW_SECTORS: Sector[] = [...SECTORS];
const SECTOR_LABEL: Record<Sector, string> = { KONSUMER: 'Konsumer', KEUANGAN: 'Keuangan', AGRIKULTUR: 'Agrikultur', TAMBANG: 'Tambang' };

function useLivePrices() {
  const [market, setMarket] = useState<{ prices: Record<Sector, number>; hist: Record<Sector, number[]> }>(() => ({
    prices: { KONSUMER: 5, KEUANGAN: 5, AGRIKULTUR: 5, TAMBANG: 5 },
    hist: Object.fromEntries(SECTORS.map((s, si) => [s, Array.from({ length: 24 }, (_, i) => Math.round(5 + Math.sin(i / 3 + si * 1.7) * 1.6))])) as Record<Sector, number[]>,
  }));
  useEffect(() => {
    const t = setInterval(() => {
      setMarket(({ prices, hist }) => {
        const next = { ...prices };
        for (const s of SECTORS) {
          const d = Math.random() < 0.5 ? -1 : 1;
          next[s] = Math.max(1, Math.min(9, prices[s] + (Math.random() < 0.65 ? d : 0)));
        }
        return {
          prices: next,
          hist: Object.fromEntries(SECTORS.map((s) => [s, [...hist[s].slice(1), next[s]]])) as Record<Sector, number[]>,
        };
      });
    }, 1700);
    return () => clearInterval(t);
  }, []);
  return market;
}

export default function Landing() {
  const router = useRouter();
  const { prices, hist } = useLivePrices();
  const [name, setName] = useState('');
  const [bots, setBots] = useState(3);
  const [diff, setDiff] = useState<Difficulty>('smart');
  const [joinCode, setJoinCode] = useState('');
  const [busy, setBusy] = useState<'' | 'solo' | 'create' | 'join'>('');
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try { setName(localStorage.getItem('stocklab:name') ?? ''); } catch {}
  }, []);
  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(''), 4200);
    return () => clearTimeout(t);
  }, [error]);

  const rememberName = (n: string) => { try { localStorage.setItem('stocklab:name', n); } catch {} };
  const fail = (e: unknown) => { sfx.error(); setError(e instanceof Error ? e.message : 'Terjadi kesalahan.'); setBusy(''); };

  const startSolo = async () => {
    setBusy('solo'); setError('');
    try {
      rememberName(name);
      const r = await api.solo(name, bots, diff);
      saveSession({ code: r.code, token: r.token, pid: r.pid, name: name || 'Trader' });
      sfx.start();
      router.push(`/room/${r.code}`);
    } catch (e) { fail(e); }
  };
  const createRoom = async () => {
    setBusy('create'); setError('');
    try {
      rememberName(name);
      const r = await api.create(name);
      saveSession({ code: r.code, token: r.token, pid: r.pid, name: name || 'Trader' });
      sfx.start();
      router.push(`/room/${r.code}`);
    } catch (e) { fail(e); }
  };
  const joinRoom = async () => {
    const code = joinCode.trim().toUpperCase();
    if (code.length !== 6) { sfx.error(); setError('Kode room terdiri dari 6 karakter.'); return; }
    setBusy('join'); setError('');
    try {
      rememberName(name);
      const r = await api.join(code, name);
      saveSession({ code, token: r.token, pid: r.pid, name: r.name });
      sfx.start();
      router.push(`/room/${code}`);
    } catch (e) { fail(e); }
  };

  const tickerItems = [...PREVIEW_SECTORS, ...PREVIEW_SECTORS].map((s, i) => {
    const p = prices[s];
    const d = hist[s][hist[s].length - 1] - hist[s][hist[s].length - 2];
    return (
      <span className="ticker-item" key={i}>
        <span style={{ color: SECTOR_FELT[s] }}>{s}</span>
        <span>{p.toFixed(0)}</span>
        <span style={{ color: d > 0 ? 'var(--bull)' : d < 0 ? 'var(--bear)' : 'var(--faint)' }}>
          {d > 0 ? '▲' : d < 0 ? '▼' : '•'} {Math.abs(d)}
        </span>
      </span>
    );
  });

  const fundPrice = Math.floor((prices[PREVIEW_SECTORS[1]] + prices[PREVIEW_SECTORS[2]]) / 2);

  return (
    <>
      <header className="topbar">
        <div className="shell topbar-in">
          <a className="brand" href="/"><IconLogo size={22} />STOCK<b>LAB</b></a>
          <div className="spacer" />
          <a className="btn btn-ghost btn-sm hide-sm" href="#cara-main">Cara Main</a>
          <SoundToggle />
        </div>
      </header>

      <div className="ticker" aria-hidden>
        <div className="ticker-track">{tickerItems}{tickerItems}</div>
      </div>

      <main className="shell">
        <section className="hero">
          <div>
            <div className="eyebrow">Meja kartu pasar saham · 3–5 pemain</div>
            <h1>STOCK<span className="lab">LAB</span></h1>
            <p className="hero-sub">
              <b>Bid urutan jalan, draft kartu saham, mainkan efeknya, lalu jual di harga puncak.</b>{' '}
              Enam ronde, kartu ekonomi mengocok pasar tiap putaran. Koin terbanyak setelah likuidasi menang — utang memotong skormu.
            </p>
            <div className="hero-stats">
              <div className="hstat"><span className="n">6</span><span className="l">Ronde</span></div>
              <div className="hstat"><span className="n">60</span><span className="l">Kartu aksi</span></div>
              <div className="hstat"><span className="n">4+1</span><span className="l">Sektor & reksa dana</span></div>
              <div className="hstat"><span className="n">15</span><span className="l">Koin awal</span></div>
            </div>
          </div>

          <div className="table-scene">
            <span className="scatter" style={{ top: -34, left: -48, transform: 'rotate(-13deg)' }}>
              <PhysicalCard card={{ id: 7, kind: 'KONSUMER', effect: 'RUMOR', fee: 1 }} />
            </span>
            <span className="scatter" style={{ bottom: -26, right: -34, transform: 'rotate(10deg)' }}>
              <PhysicalCard card={{ id: 23, kind: 'TAMBANG', effect: 'ACQUIRE', fee: 2 }} />
            </span>
            <span className="scatter" style={{ top: -40, right: 74, transform: 'rotate(15deg)' }}>
              <PhysicalCard card={{ id: 41, kind: 'FUND', effect: 'NONE', fee: 0 }} mini />
            </span>
            <div className="table-rim">
              <div className="felt" style={{ padding: '22px 20px 24px' }}>
                <div className="lamp" />
                <div className="sim-mat">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span className="panel-title" style={{ color: 'var(--cream-muted)' }}>Papan Pasar</span>
                    <span className="mp-live"><i />LIVE SIM</span>
                  </div>
                  {PREVIEW_SECTORS.map((s) => {
                    const d = prices[s] - hist[s][hist[s].length - 2];
                    return (
                      <div className="sim-row" key={s}>
                        <span className="sim-name" style={{ color: SECTOR_FELT[s] }}>
                          <KindIcon kind={s} size={16} />{SECTOR_LABEL[s]}
                        </span>
                        <span className="sim-track"><span className="marker" style={{ left: `${prices[s] * 10}%`, width: 16, height: 16 }} /></span>
                        <span className="sim-price">{prices[s]}</span>
                        <span className="sim-delta" style={{ color: d > 0 ? 'var(--bull)' : d < 0 ? 'var(--bear)' : 'var(--faint)' }}>
                          {d > 0 ? `+${d}` : d}
                        </span>
                      </div>
                    );
                  })}
                  <div className="sim-row">
                    <span className="sim-name" style={{ color: SECTOR_FELT.FUND }}><KindIcon kind="FUND" size={16} />Reksa Dana</span>
                    <span className="sim-track"><span className="marker" style={{ left: `${fundPrice * 10}%`, width: 16, height: 16 }} /></span>
                    <span className="sim-price">{fundPrice}</span>
                    <span className="sim-delta" style={{ color: 'var(--faint)' }}>avg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="modes stagger" id="main">
          <div className="mode-card paper-scope" style={{ '--accent': '#1e6f47', '--tilt': '-0.7deg' } as React.CSSProperties}>
            <div className="mode-icon"><IconBot size={24} /></div>
            <h3>Lawan Bot</h3>
            <p>Langsung main solo melawan 2–4 bot. Pilih tingkat kesulitan: Random yang kacau atau Smart yang menghitung harga.</p>
            <div className="mode-form">
              <div className="field">
                <label htmlFor="solo-name">Nama kamu</label>
                <input id="solo-name" className="input" ref={nameRef} value={name} maxLength={16} placeholder="Trader" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mode-row">
                <span className="lbl">Jumlah bot</span>
                <div className="stepper">
                  <button aria-label="Kurangi bot" disabled={bots <= 2} onClick={() => { setBots(bots - 1); sfx.tap(); }}><IconMinus /></button>
                  <span className="val">{bots}</span>
                  <button aria-label="Tambah bot" disabled={bots >= 4} onClick={() => { setBots(bots + 1); sfx.tap(); }}><IconPlus /></button>
                </div>
              </div>
              <div className="mode-row">
                <span className="lbl">Kesulitan</span>
                <div className="seg">
                  <button className={diff === 'random' ? 'on' : ''} onClick={() => { setDiff('random'); sfx.tap(); }}>Random</button>
                  <button className={diff === 'smart' ? 'on accent' : ''} onClick={() => { setDiff('smart'); sfx.tap(); }}>Smart</button>
                </div>
              </div>
              <button className="btn btn-primary btn-lg btn-block" disabled={busy !== ''} onClick={startSolo}>
                <IconPlay />{busy === 'solo' ? 'Menyiapkan meja…' : 'Mulai Bermain'}
              </button>
            </div>
          </div>

          <div className="mode-card paper-scope" style={{ '--accent': '#9c6f14', '--tilt': '0.5deg' } as React.CSSProperties}>
            <div className="mode-icon"><IconCrown size={24} /></div>
            <h3>Buat Room</h3>
            <p>Jadi host, bagikan kode unik ke teman, dan mulai begitu 3–5 pemain siap. Bot bisa mengisi kursi kosong.</p>
            <div className="mode-form">
              <div className="field">
                <label htmlFor="create-name">Nama kamu</label>
                <input id="create-name" className="input" value={name} maxLength={16} placeholder="Trader" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="rules-note" style={{ margin: 0, padding: '12px 14px', fontSize: 12.5 }}>
                <IconEye size={16} />
                <span>Kamu melihat papan publik sebagai host. Semua perhitungan bank & kartu ekonomi otomatis oleh engine.</span>
              </div>
              <button className="btn btn-gold btn-lg btn-block" disabled={busy !== ''} onClick={createRoom}>
                <IconPlus />{busy === 'create' ? 'Membuat room…' : 'Buat Room'}
              </button>
            </div>
          </div>

          <div className="mode-card paper-scope" style={{ '--accent': '#2e6f8e', '--tilt': '-0.4deg' } as React.CSSProperties}>
            <div className="mode-icon"><IconUser size={24} /></div>
            <h3>Gabung Room</h3>
            <p>Punya kode dari teman? Masukkan 6 karakter kodenya dan duduk di meja yang sama.</p>
            <div className="mode-form">
              <div className="field">
                <label htmlFor="join-code">Kode room</label>
                <input id="join-code" className="input input-code" value={joinCode} maxLength={6} placeholder="ABC123"
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                  onKeyDown={(e) => { if (e.key === 'Enter') void joinRoom(); }} />
              </div>
              <div className="field">
                <label htmlFor="join-name">Nama kamu</label>
                <input id="join-name" className="input" value={name} maxLength={16} placeholder="Trader" onChange={(e) => setName(e.target.value)} />
              </div>
              <button className="btn btn-lg btn-block" disabled={busy !== ''} onClick={joinRoom}>
                <IconPlay />{busy === 'join' ? 'Bergabung…' : 'Gabung'}
              </button>
            </div>
          </div>
        </section>

        <section className="rules" id="cara-main">
          <div className="panel rules-sheet paper-scope">
            <h2>Cara Main</h2>
            <p className="sub">Satu siklus = empat fase. Ulangi 6 kali, lalu hitung koin.</p>
            <div className="phase-grid stagger">
              <div className="phase-card">
                <span className="phase-num">FASE 01</span>
                <h4><span className="phase-dot" style={{ background: '#d9a441' }} />Bidding</h4>
                <p>Lelang tertutup serentak. Bid tertinggi dapat urutan jalan 1 — bayar bid ke bank. Seri? Nomor urutan lama yang lebih kecil menang.</p>
              </div>
              <div className="phase-card">
                <span className="phase-num">FASE 02</span>
                <h4><span className="phase-dot" style={{ background: '#2e6f8e' }} />Aksi</h4>
                <p>Berputar sesuai urutan: ambil kartu terbuka sebagai <b>aset</b> atau pakai <b>efeknya</b> (Quick Buy, Rumor, Info Bursa, Akuisisi). Trading fee dibayar saat mengambil.</p>
              </div>
              <div className="phase-card">
                <span className="phase-num">FASE 03</span>
                <h4><span className="phase-dot" style={{ background: '#1e6f47' }} />Jual</h4>
                <p>Jual maksimal 1 jenis aset, jumlah lembar bebas. Saham = harga × (Split ? 2 : 1). Pengguna Info Bursa menjual paling akhir.</p>
              </div>
              <div className="phase-card">
                <span className="phase-num">FASE 04</span>
                <h4><span className="phase-dot" style={{ background: '#5b4a86' }} />Ekonomi</h4>
                <p>Satu kartu terbuka per sektor: Boom, Crash, Dividen, Split, Right Issue… Kartu ungu (Pajak, Resesi, Buyback, Restrukturisasi) dieksekusi duluan.</p>
              </div>
            </div>
            <div className="rules-note">
              <IconCoin size={18} />
              <span>
                <b>Utang itu paksa.</b> Kalau koin kurang saat wajib bayar, kamu otomatis mengambil Kartu Utang (pinjaman 5 koin) — tiap kartu memotong skor akhir sebesar 7. Menang = koin terbanyak setelah likuidasi semua aset.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <span>StockLab — engine deterministik, server-authoritative.</span>
        <span className="mono">6 ronde · 3–5 pemain · hidden info aman</span>
      </footer>

      {error && <div className="toast err" role="alert">{error}</div>}
    </>
  );
}