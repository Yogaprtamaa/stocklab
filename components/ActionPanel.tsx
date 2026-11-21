'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Action, GameView, SeatInfo } from '@/lib/client';
import type { Kind, Sector } from '@/config';
import { CONFIG, SECTORS } from '@/config';
import { EFFECT_META, KIND_META, PHASE_META, SECTOR_META } from '@/lib/meta';
import { sfx } from '@/lib/sound';
import { IconCheck, IconCoin, IconDown, IconEye, IconMinus, IconPlus, IconSkip, IconUp, IconX, KindIcon } from './icons';

interface Props {
  view: GameView;
  you: number;
  seats: SeatInfo[];
  sel: number | null;
  setSel: (id: number | null) => void;
  sellKind: Kind | null;
  sellIds: number[];
  setSellKind: (k: Kind | null) => void;
  setSellIds: React.Dispatch<React.SetStateAction<number[]>>;
  onAction: (a: Action) => Promise<void>;
}

export function ActionPanel({ view, you, seats, sel, setSel, sellKind, sellIds, setSellKind, setSellIds, onAction }: Props) {
  const me = view.players.find((p) => p.id === you)!;
  const nameOf = (pid: number | null) => seats.find((s) => s.pid === pid)?.name ?? '—';
  const myCoins = me.coins ?? 0;

  const [bid, setBid] = useState(1);
  const [mode, setMode] = useState<'save' | 'effect' | null>(null);
  const [rumor, setRumor] = useState<{ sector: Sector; delta: 1 | -1 | 2 | -2 }[]>([]);
  const [infoSecs, setInfoSecs] = useState<Sector[]>([]);
  const [target, setTarget] = useState<number | null>(null);
  const [quick, setQuick] = useState<number[]>([]);
  const minBid = Math.min(CONFIG.minBid, myCoins);

  useEffect(() => { setMode(null); setRumor([]); setInfoSecs([]); setTarget(null); setQuick([]); }, [sel]);
  useEffect(() => { setBid((b) => Math.max(minBid, Math.min(b, myCoins))); }, [myCoins, minBid]);

  const card = sel !== null ? view.open.find((c) => c.id === sel) ?? null : null;
  const isMyAction = view.phase === 'ACTION' && view.turn === you;
  const isMySell = view.phase === 'SELL' && view.turn === you;
  const canBid = view.phase === 'BIDDING' && !me.hasBid;

  const valueOf = (c: { kind: Kind; split: boolean }) =>
    c.kind === 'FUND' ? view.fundPrice : view.price[c.kind] * (c.split ? 2 : 1);

  const sellGroups = useMemo(() => {
    const m = new Map<Kind, typeof me.assets>();
    for (const a of me.assets) {
      if (a.kind === 'FUND') continue; // Reksa Dana hanya dicairkan di akhir permainan
      m.set(a.kind, [...(m.get(a.kind) ?? []), a]);
    }
    return [...m.entries()];
  }, [me.assets]);
  const hasFund = me.assets.some((a) => a.kind === 'FUND');

  const submit = (a: Action, sound: () => void) => {
    sound();
    setSel(null);
    void onAction(a);
  };

  // ── BIDDING ──
  if (view.phase === 'BIDDING') {
    if (!canBid) {
      return (
        <div className="panel action-panel idle">
          <div className="ap-title"><IconCheck />Bid terpasang: {me.bid ?? 0} koin</div>
          <p className="ap-desc" style={{ marginBottom: 8 }}>Menunggu pemain lain memasang bid…</p>
          <div className="prow-meta">
            {view.players.map((p) => (
              <span key={p.id} className={`chip ${p.hasBid ? 'chip-bull' : ''}`}>{nameOf(p.id)} {p.hasBid ? '✓' : '…'}</span>
            ))}
          </div>
        </div>
      );
    }
    const quickVals = [1, 2, 3, 5].filter((v) => v >= minBid && v <= myCoins);
    return (
      <div className="panel action-panel paper-scope">
        <div className="ap-title"><IconCoin />Fase Bidding — pasang bid tertutup</div>
        <p className="ap-desc">Bid minimal 1 koin. Tertinggi dapat urutan jalan 1. Bid dibayar ke bank. Seri dimenangkan nomor urutan lama yang lebih kecil.</p>
        <div className="bid-row">
          <button className="icon-btn" aria-label="Kurangi bid" disabled={bid <= minBid} onClick={() => { setBid(Math.max(minBid, bid - 1)); sfx.tap(); }}><IconMinus /></button>
          <input type="range" className="bid-slider" min={minBid} max={myCoins} value={bid}
            style={{ '--fill': `${myCoins ? (bid / myCoins) * 100 : 0}%` } as React.CSSProperties}
            onChange={(e) => setBid(Number(e.target.value))} aria-label="Jumlah bid" />
          <button className="icon-btn" aria-label="Tambah bid" disabled={bid >= myCoins} onClick={() => { setBid(Math.min(myCoins, bid + 1)); sfx.tap(); }}><IconPlus /></button>
          <span className="bid-val">{bid}</span>
        </div>
        <div className="ap-actions" style={{ alignItems: 'center' }}>
          <div className="quick-bids">
            {quickVals.map((v) => <button key={v} className={bid === v ? 'on' : ''} onClick={() => { setBid(v); sfx.tap(); }}>{v}</button>)}
            {myCoins < CONFIG.minBid && <span className="chip">Tanpa koin — bid 0 (pass)</span>}
          </div>
          <div className="spacer" />
          <span className="chip chip-gold"><IconCoin size={13} />{myCoins} koin</span>
          <button className="btn btn-gold" onClick={() => submit({ type: 'BID', amount: bid }, sfx.bid)}>Pasang Bid {bid}</button>
        </div>
      </div>
    );
  }

  // ── ACTION ──
  if (view.phase === 'ACTION') {
    if (!isMyAction) {
      return (
        <div className="panel action-panel idle">
          <div className="ap-title"><span className="pulse-dot" />Giliran {nameOf(view.turn)}</div>
          <p className="ap-desc" style={{ marginBottom: 0 }}>{PHASE_META.ACTION.desc} {view.open.length} kartu terbuka tersisa.</p>
        </div>
      );
    }
    const openStrip = (
      <div className="dock-cardstrip" role="list" aria-label="Kartu aksi terbuka">
        {view.open.map((c) => {
          const on = sel === c.id;
          const afford = c.fee <= myCoins;
          return (
            <button key={c.id} type="button" role="listitem"
              className={`dock-mini ${on ? 'on' : ''} ${afford ? '' : 'off'}`}
              style={{ '--kc': KIND_META[c.kind].color } as React.CSSProperties}
              disabled={!afford} aria-pressed={on}
              title={afford ? `${KIND_META[c.kind].label} — ${EFFECT_META[c.effect].label}` : 'Koin tidak cukup untuk fee kartu ini'}
              onClick={() => { setSel(on ? null : c.id); sfx.slide(); }}>
              <span className="dm-band"><KindIcon kind={c.kind} size={11} />{KIND_META[c.kind].label}</span>
              <span className="dm-effect">{EFFECT_META[c.effect].label}</span>
              <span className="dm-fee"><IconCoin size={10} />{c.fee === 0 ? 'gratis' : c.fee}</span>
            </button>
          );
        })}
      </div>
    );
    if (!card) {
      return (
        <div className="panel action-panel paper-scope">
          <div className="ap-title"><IconEye />Giliranmu — pilih kartu terbuka</div>
          <p className="ap-desc">Ketuk kartu di meja atau di baris ini. Trading fee dibayar saat kartu diambil.</p>
          {openStrip}
        </div>
      );
    }
    const eff = EFFECT_META[card.effect];
    const affordable = card.fee <= myCoins;
    const others = view.open.filter((c) => c.id !== card.id);
    const quickNeed = Math.min(2, others.length);
    const quickFee = quick.reduce((t, id) => t + (view.open.find((c) => c.id === id)?.fee ?? 0), 0);
    const targets = view.players.filter((p) => p.id !== you).flatMap((p) => p.assets.filter((a) => a.kind !== 'FUND').map((a) => ({
      owner: p.id,
      card: a,
      need: p.assets.filter((x) => x.kind === a.kind).length,
      have: me.assets.filter((x) => x.kind === a.kind).length,
    })));

    let effectReady = false;
    let effectUI: React.ReactNode = null;
    if (mode === 'effect') {
      if (card.effect === 'QUICK_BUY') {
        effectReady = quick.length === quickNeed && quickFee <= myCoins - card.fee;
        effectUI = (
          <>
            <p className="ap-desc">Pilih tepat {quickNeed} kartu lain (wajib jadi aset). Fee tambahan: <b className="mono" style={{ color: 'var(--gold)' }}>{quickFee}</b> koin.</p>
            <div className="sector-picks">
              {others.map((c) => (
                <button key={c.id} className={`spick ${quick.includes(c.id) ? 'on' : ''}`} style={{ '--kc': KIND_META[c.kind].color } as React.CSSProperties}
                  onClick={() => { sfx.tap(); setQuick((q) => q.includes(c.id) ? q.filter((x) => x !== c.id) : q.length < quickNeed ? [...q, c.id] : q); }}>
                  <KindIcon kind={c.kind} size={14} />{KIND_META[c.kind].label} · fee {c.fee}
                </button>
              ))}
            </div>
          </>
        );
      } else if (card.effect === 'RUMOR') {
        effectReady = rumor.length >= 1 && rumor.length <= 2;
        const pushRumor = (sector: Sector, delta: 1 | -1) => {
          sfx.tap();
          setRumor((r) => (r.some((m) => Math.abs(m.delta) === 2) ? [{ sector, delta }] : r.length >= 2 ? r : [...r, { sector, delta }]));
        };
        effectUI = (
          <>
            <p className="ap-desc">Pilih ±1 di dua sektor, atau ±2 di satu sektor. Rumor tidak memicu Stock Crash / Stock Split.</p>
            <div className="sector-picks">
              {SECTORS.map((s) => (
                <span key={s} className="spick" style={{ '--kc': SECTOR_META[s].color, cursor: 'default' } as React.CSSProperties}>
                  <KindIcon kind={s} size={14} />{SECTOR_META[s].label}
                  <button className="icon-btn icon-sm icon-sm-text" aria-label={`${SECTOR_META[s].label} turun 2`}
                    onClick={() => { sfx.tap(); setRumor([{ sector: s, delta: -2 }]); }}>−2</button>
                  <button className="icon-btn icon-sm" aria-label={`${SECTOR_META[s].label} turun 1`} disabled={rumor.length >= 2}
                    onClick={() => pushRumor(s, -1)}><IconDown size={12} /></button>
                  <button className="icon-btn icon-sm" aria-label={`${SECTOR_META[s].label} naik 1`} disabled={rumor.length >= 2}
                    onClick={() => pushRumor(s, 1)}><IconUp size={12} /></button>
                  <button className="icon-btn icon-sm icon-sm-text" aria-label={`${SECTOR_META[s].label} naik 2`}
                    onClick={() => { sfx.tap(); setRumor([{ sector: s, delta: 2 }]); }}>+2</button>
                </span>
              ))}
            </div>
            <div className="move-list">
              {rumor.map((m, i) => (
                <div className="move-item" key={i}>
                  <span style={{ color: SECTOR_META[m.sector].color, fontWeight: 600 }}>{SECTOR_META[m.sector].label}</span>
                  <button className="chip" style={{ cursor: 'pointer' }} title="Balik arah" onClick={() => setRumor((r) => r.map((x, j) => j === i ? { ...x, delta: (-x.delta) as 1 | -1 | 2 | -2 } : x))}>
                    {m.delta > 0 ? <IconUp size={12} /> : <IconDown size={12} />}{m.delta > 0 ? `+${m.delta}` : `−${Math.abs(m.delta)}`}
                  </button>
                  <button className="rm" aria-label="Hapus perubahan" onClick={() => setRumor((r) => r.filter((_, j) => j !== i))}><IconX size={14} /></button>
                </div>
              ))}
            </div>
          </>
        );
      } else if (card.effect === 'INFO') {
        effectReady = infoSecs.length === 2;
        effectUI = (
          <>
            <p className="ap-desc">Pilih 2 sektor berbeda untuk diintip kartu ekonomi teratasnya. Bonus +2 koin, dan kamu jual paling akhir.</p>
            <div className="sector-picks">
              {SECTORS.map((s) => (
                <button key={s} className={`spick ${infoSecs.includes(s) ? 'on' : ''}`} style={{ '--kc': SECTOR_META[s].color } as React.CSSProperties}
                  onClick={() => { sfx.tap(); setInfoSecs((q) => q.includes(s) ? q.filter((x) => x !== s) : q.length < 2 ? [...q, s] : q); }}>
                  <KindIcon kind={s} size={14} />{SECTOR_META[s].label}
                </button>
              ))}
            </div>
          </>
        );
      } else if (card.effect === 'ACQUIRE') {
        effectReady = target !== null;
        effectUI = targets.length === 0 ? (
          <p className="ap-desc">Tidak ada saham lawan yang bisa diakuisisi. Simpan kartu ini sebagai aset.</p>
        ) : (
          <>
            <p className="ap-desc">Pilih 1 saham lawan. Biaya floor(harga ÷ 2) dibayar ke Bank. Sahammu di sektor itu harus ≥ milik target. Split token ikut pindah.</p>
            <div className="target-list">
              {targets.map(({ owner, card: t, need, have }) => {
                const ok = have >= need;
                return (
                  <button key={t.id} className={`target-row ${target === t.id ? 'on' : ''}`} disabled={!ok} onClick={() => { sfx.tap(); setTarget(t.id); }}>
                    <KindIcon kind={t.kind} size={16} />
                    <span style={{ fontWeight: 600, fontSize: 13 }}>{KIND_META[t.kind].label}{t.split && <span className="chip chip-violet" style={{ marginLeft: 6 }}>×2</span>}</span>
                    <span style={{ color: 'var(--faint)', fontSize: 12 }}>milik {nameOf(owner)} · kamu {have}/{need}</span>
                    <span className="cost"><IconCoin size={13} />{Math.floor(view.price[t.kind as Sector] / 2)}</span>
                  </button>
                );
              })}
            </div>
          </>
        );
      }
    }

    const confirmEffect = () => {
      const params =
        card.effect === 'QUICK_BUY' ? { cardIds: quick } :
        card.effect === 'RUMOR' ? { moves: rumor } :
        card.effect === 'INFO' ? { sectors: infoSecs } :
        { targetCardId: target ?? undefined };
      submit({ type: 'TAKE', cardId: card.id, mode: 'effect', params }, sfx.take);
    };

    return (
      <div className="panel action-panel paper-scope">
        <div className="ap-title">
          <span style={{ color: KIND_META[card.kind].color, display: 'inline-flex', gap: 7, alignItems: 'center' }}><KindIcon kind={card.kind} size={17} />{KIND_META[card.kind].label}</span>
          <span className="chip">{eff.label}</span>
          <span className="chip chip-gold"><IconCoin size={12} />fee {card.fee}</span>
          <div className="spacer" />
          <button className="icon-btn" style={{ width: 30, height: 30 }} aria-label="Batal pilih kartu" onClick={() => { setSel(null); sfx.tap(); }}><IconX size={14} /></button>
        </div>
        <p className="ap-desc">{eff.desc}</p>
        <div className="dock-switch-label">Kartu lain di meja</div>
        {openStrip}
        {!affordable ? (
          <p className="ap-desc" style={{ color: 'var(--bear)' }}>Koinmu tidak cukup untuk fee kartu ini. Pilih kartu lain.</p>
        ) : (
          <>
            <div className="mode-choice">
              <button className={`mode-opt ${mode === 'save' ? 'on' : ''}`} onClick={() => { setMode('save'); sfx.tap(); }}>
                <span className="t"><IconCoin size={15} />Simpan sebagai Aset</span>
                <span className="d">Efek mati. Jual nanti saat harga tinggi{card.kind === 'FUND' ? ` (harga reksa dana ${view.fundPrice})` : ` (harga ${view.price[card.kind as Sector]})`}.</span>
              </button>
              <button className={`mode-opt ${mode === 'effect' ? 'on' : ''}`} disabled={card.effect === 'NONE'} onClick={() => { setMode('effect'); sfx.tap(); }}>
                <span className="t"><IconEye size={15} />Gunakan Efek</span>
                <span className="d">{card.effect === 'NONE' ? 'Kartu polos tidak punya efek.' : `${eff.label} — kartu dibuang setelah dipakai.`}</span>
              </button>
            </div>
            {mode === 'effect' && <div style={{ marginTop: 14 }}>{effectUI}</div>}
            <div className="ap-actions">
              {mode === 'save' && (
                <button className="btn btn-primary" onClick={() => submit({ type: 'TAKE', cardId: card.id, mode: 'save' }, sfx.take)}>
                  <IconCheck />Ambil & Simpan{card.fee > 0 ? ` (−${card.fee} koin)` : ''}
                </button>
              )}
              {mode === 'effect' && card.effect !== 'NONE' && (
                <button className="btn btn-primary" disabled={!effectReady} onClick={confirmEffect}>
                  <IconCheck />Konfirmasi {eff.label}
                </button>
              )}
              <button className="btn btn-ghost" onClick={() => { setSel(null); sfx.tap(); }}>Batal</button>
            </div>
          </>
        )}
      </div>
    );
  }

  // ── SELL ──
  if (view.phase === 'SELL') {
    if (!isMySell) {
      return (
        <div className="panel action-panel idle">
          <div className="ap-title"><span className="pulse-dot" />Giliran jual {nameOf(view.turn)}</div>
          <p className="ap-desc" style={{ marginBottom: 0 }}>Antrean jual: {view.sellQueue.map(nameOf).join(' → ')}. Pengguna Info Bursa menjual paling akhir.</p>
        </div>
      );
    }
    const chosen = me.assets.filter((a) => sellIds.includes(a.id));
    const total = chosen.reduce((t, c) => t + valueOf(c), 0);
    return (
      <div className="panel action-panel paper-scope">
        <div className="ap-title"><IconCoin />Giliranmu — jual aset</div>
        <p className="ap-desc">Maksimal 1 jenis aset per ronde, jumlah lembar bebas. Harga saham = harga × (Split ? 2 : 1). Reksa Dana baru dicairkan otomatis di akhir permainan.</p>
        {sellGroups.length === 0 ? (
          <p className="ap-desc">{hasFund ? 'Kamu hanya punya Reksa Dana — cair otomatis di akhir. Lewati untuk lanjut ke fase Ekonomi.' : 'Kamu tidak punya aset. Lewati untuk lanjut ke fase Ekonomi.'}</p>
        ) : (
          <>
            <div className="sell-groups">
              {sellGroups.map(([kind, cards]) => (
                <button key={kind} className={`spick ${sellKind === kind ? 'on' : ''}`} style={{ '--kc': KIND_META[kind].color } as React.CSSProperties}
                  onClick={() => { sfx.tap(); setSellKind(kind); setSellIds(cards.map((c) => c.id)); }}>
                  <KindIcon kind={kind} size={14} />{KIND_META[kind].label} ×{cards.length} · {kind === 'FUND' ? view.fundPrice : view.price[kind as Sector]}{kind !== 'FUND' && cards.some((c) => c.split) ? ' (×2 split)' : ''}/lembar
                </button>
              ))}
            </div>
            {sellKind && (
              <div className="sector-picks" style={{ marginBottom: 12 }}>
                {me.assets.filter((a) => a.kind === sellKind).map((c) => (
                  <button key={c.id} className={`spick ${sellIds.includes(c.id) ? 'on' : ''}`} style={{ '--kc': KIND_META[c.kind].color } as React.CSSProperties}
                    onClick={() => { sfx.tap(); setSellIds((ids) => ids.includes(c.id) ? ids.filter((x) => x !== c.id) : [...ids, c.id]); }}>
                    #{c.id}{c.split ? ' ×2' : ''} · {valueOf(c)}k
                  </button>
                ))}
              </div>
            )}
            <div className="sell-summary">
              <span>{chosen.length} kartu dipilih</span>
              <span className="total"><IconCoin size={16} />+{total}</span>
            </div>
          </>
        )}
        <div className="ap-actions">
          <button className="btn btn-primary" disabled={chosen.length === 0} onClick={() => submit({ type: 'SELL', cardIds: sellIds }, sfx.coin)}>
            <IconCoin />Jual {chosen.length > 0 ? `(+${total} koin)` : ''}
          </button>
          <button className="btn" onClick={() => submit({ type: 'SELL', cardIds: [] }, sfx.tap)}><IconSkip />Lewati</button>
        </div>
      </div>
    );
  }

  return null;
}