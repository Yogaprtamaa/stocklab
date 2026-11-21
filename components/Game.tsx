'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Action, RoomPayload, Session } from '@/lib/client';
import type { Kind, Sector } from '@/config';
import { CONFIG } from '@/config';
import { KIND_META, PHASE_META, SECTOR_META } from '@/lib/meta';
import { sfx } from '@/lib/sound';
import { Board } from './Board';
import { ActionPanel } from './ActionPanel';
import { ActionDock } from './ActionDock';
import { EconomyReveal, Ledger, MarketTape } from './Market';
import { Results } from './Results';
import { CoinStack, PhysicalCard, Pile } from './table';
import { IconBot, IconCoin, IconEye, IconSkip, KindIcon } from './icons';

interface Props {
  payload: RoomPayload;
  session: Session;
  onAction: (a: Action) => Promise<void>;
  onHost: (fn: 'start' | 'restart' | 'skip' | 'leave') => Promise<void>;
}

export function Game({ payload, session, onAction, onHost }: Props) {
  const view = payload.view!;
  const router = useRouter();
  const you = session.pid;
  const isHost = payload.you === payload.hostPid;
  const [sel, setSel] = useState<number | null>(null);
  const [sellKind, setSellKind] = useState<Kind | null>(null);
  const [sellIds, setSellIds] = useState<number[]>([]);
  const [coinPop, setCoinPop] = useState(0);
  const [dockOpen, setDockOpen] = useState(true);
  const [ledgerOpen, setLedgerOpen] = useState(false);
  const [econOpen, setEconOpen] = useState(false);
  const prevCoins = useRef<number | null>(null);
  const econSeen = useRef<number | null>(-1);
  const me = view.players.find((p) => p.id === you)!;
  const nameOf = (pid: number | null) => payload.seats.find((s) => s.pid === pid)?.name ?? '—';
  const isMyAction = view.phase === 'ACTION' && view.turn === you;
  const isMySell = view.phase === 'SELL' && view.turn === you;
  const isMyBid = view.phase === 'BIDDING' && !me.hasBid;
  const myTurn = isMyAction || isMySell;

  useEffect(() => {
    setSel(null);
    const active =
      view.phase === 'BIDDING' ? !me.hasBid :
      (view.phase === 'ACTION' || view.phase === 'SELL') && view.turn === you;
    setDockOpen(active);
  // sengaja: reset hanya saat fase/giliran/ronde berganti
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.phase, view.turn, view.round]);
  useEffect(() => { if (view.phase === 'BIDDING' && me.hasBid) setDockOpen(false); }, [me.hasBid, view.phase]);
  useEffect(() => { if (sel !== null) setDockOpen(true); }, [sel]);
  useEffect(() => { setSellKind(null); setSellIds([]); }, [view.round, view.phase]);
  useEffect(() => {
    const c = me.coins;
    if (prevCoins.current !== null && c !== null && c > prevCoins.current) setCoinPop((k) => k + 1);
    prevCoins.current = c;
  }, [me.coins]);
  useEffect(() => {
    if (econSeen.current === -1) {
      // muat pertama: jangan buka popup untuk ronde yang sudah lewat
      econSeen.current = view.lastEconomyRound ?? 0;
      return;
    }
    if (!view.lastEconomy || view.lastEconomyRound === null) return;
    if (econSeen.current === null || view.lastEconomyRound > econSeen.current) {
      econSeen.current = view.lastEconomyRound;
      setEconOpen(true);
    }
  }, [view.lastEconomy, view.lastEconomyRound]);
  useEffect(() => {
    if (!econOpen) return;
    const t = setTimeout(() => setEconOpen(false), 8000);
    return () => clearTimeout(t);
  }, [econOpen]);
  // Di mobile, geser baris tenda lawan agar pemain yang sedang giliran selalu terlihat.
  useEffect(() => {
    if (window.innerWidth > 720) return;
    const row = document.querySelector<HTMLElement>('.far-seats');
    const active = row?.querySelector<HTMLElement>('.tent.turn');
    if (!row || !active) return;
    row.scrollTo({ left: Math.max(0, active.offsetLeft - (row.clientWidth - active.clientWidth) / 2), behavior: 'smooth' });
  }, [view.turn, view.phase, view.round]);

  useEffect(() => {
    if (sel === null) return;
    if (window.innerWidth >= 900) {
      const spread = document.querySelector<HTMLElement>('.spread');
      if (!spread) return;
      const top = spread.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, top - 76), behavior: 'smooth' });
      return;
    }
    const el = document.querySelector<HTMLElement>(`[data-card-id="${sel}"]`);
    if (!el) return;
    const dockH = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dock-h')) || 0;
    const top = 62;
    const bottom = window.innerHeight - dockH - 16;
    const r = el.getBoundingClientRect();
    if (r.bottom > bottom || r.top < top) {
      const free = Math.max(120, bottom - top);
      const target = r.top - top - (free - r.height) / 2;
      window.scrollBy({ top: target, behavior: 'smooth' });
    }
  }, [sel]);

  const valueOf = (c: { kind: Kind; split: boolean }) =>
    c.kind === 'FUND' ? view.fundPrice : view.price[c.kind as Sector] * (c.split ? 2 : 1);

  const groupedAssets = (assets: { kind: Kind; split: boolean }[]) => {
    const m = new Map<Kind, { n: number; split: number; value: number }>();
    for (const a of assets) {
      const g = m.get(a.kind) ?? { n: 0, split: 0, value: 0 };
      g.n++; if (a.split) g.split++;
      g.value += valueOf(a);
      m.set(a.kind, g);
    }
    return [...m.entries()];
  };

  const toggleSell = (c: { id: number; kind: Kind }) => {
    sfx.slide();
    if (sellKind && c.kind !== sellKind) {
      setSellKind(c.kind);
      setSellIds([c.id]);
    } else {
      setSellKind(c.kind);
      setSellIds((ids) => (ids.includes(c.id) ? ids.filter((x) => x !== c.id) : [...ids, c.id]));
    }
  };

  const opponents = [...view.players].filter((p) => p.id !== you).sort((a, b) => a.order - b.order);

  const dockLabel =
    view.phase === 'BIDDING' ? (isMyBid ? 'Pasang bid tertutup' : 'Menunggu bid pemain lain') :
    view.phase === 'ACTION' ? (isMyAction ? (sel !== null ? 'Atur kartu pilihanmu' : 'Giliranmu — pilih kartu') : `Giliran ${nameOf(view.turn)}`) :
    view.phase === 'SELL' ? (isMySell ? (sellIds.length > 0 ? `${sellIds.length} aset dipilih` : 'Giliranmu — jual aset') : `Giliran jual ${nameOf(view.turn)}`) :
    'Permainan selesai';
  const dockHint =
    view.phase === 'BIDDING' ? (isMyBid ? `${me.coins ?? 0} koin di tangan` : `Bid kamu: ${me.bid ?? 0}`) :
    view.phase === 'ACTION' ? `${view.open.length} kartu terbuka` :
    view.phase === 'SELL' ? `Antrean: ${view.sellQueue.map(nameOf).join(' → ')}` :
    undefined;

  return (
    <div className={`game-wrap ${myTurn ? 'my-turn' : ''}`}>
      <div className="game-head">
        <div className="round-pills" title={`Ronde ${view.round} dari ${CONFIG.rounds}`}>
          {Array.from({ length: CONFIG.rounds }).map((_, i) => (
            <span key={i} className={`round-pill ${i + 1 < view.round || view.phase === 'ENDED' ? 'done' : i + 1 === view.round ? 'now' : ''}`}>{i + 1}</span>
          ))}
        </div>
        <span className="chip mobile-round">Ronde {view.round}/{CONFIG.rounds}</span>
        <span className={`phase-badge phase-${view.phase}`}>{PHASE_META[view.phase].label}</span>
        <span className="chip hide-sm">{view.deckCount} kartu di deck</span>
        {myTurn && <span className="turn-chip"><span className="pulse-dot" />Giliranmu</span>}
        <div className="spacer" />
        <span className="chip chip-gold mobile-coins" title="Koinmu">
          <IconCoin size={13} />{me.coins ?? '??'}
        </span>
        {isHost && view.phase !== 'ENDED' && (
          <button className="btn btn-sm" aria-label="Lewati giliran pemain yang macet" title="Paksa auto-pass untuk pemegang giliran (kalau pemain macet)" onClick={() => { sfx.tap(); void onHost('skip'); }}>
            <IconSkip size={13} /><span className="hide-sm">Lewati Giliran</span>
          </button>
        )}
      </div>

      <div className={`game-grid ${view.phase !== 'ENDED' && !econOpen && !ledgerOpen ? 'with-dock' : 'no-side'}`}>
        <div className="game-main">
          <div className={`table-rim ${myTurn ? 'is-my-turn' : ''}`}>
            <div className="felt felt-table">
              <div className="lamp" />
              <div className="felt-mark" aria-hidden><span>STOCKLAB</span><small>PAPAN BURSA</small></div>

              {/* sisi jauh meja: tenda nama lawan */}
              <div className="far-seats">
                {opponents.map((p) => {
                  const seat = payload.seats.find((s) => s.pid === p.id);
                  const isTurn = view.turn === p.id && view.phase !== 'ENDED';
                  return (
                    <div key={p.id} className={`prow tent ${isTurn ? 'turn' : ''}`}>
                      <div className="tent-top">
                        <span className="porder" title="Urutan jalan">{p.order}</span>
                        <span className="pname">{seat?.name ?? `P${p.id}`}</span>
                        {seat?.bot && <span style={{ color: 'var(--purple-ink)', display: 'inline-flex', flexShrink: 0 }}><IconBot size={13} /></span>}
                        <span className="pcoins"><CoinStack coins={p.coins} /></span>
                      </div>
                      <div className="tent-assets">
                        {p.assets.length === 0 ? (
                          <span className="tent-empty">belum punya aset</span>
                        ) : (
                          groupedAssets(p.assets).map(([kind, g]) => (
                            <span
                              key={kind}
                              className="asset-chip"
                              style={{ '--kc': KIND_META[kind].color } as React.CSSProperties}
                              title={`${KIND_META[kind].label}: ${g.n} lembar${g.split > 0 ? `, ${g.split} bertoken Split (×2)` : ''} · nilai ${g.value} koin`}
                            >
                              <KindIcon kind={kind} size={13} />
                              <span className="ac-name">{KIND_META[kind].label}</span>
                              <span className="ac-count">×{g.n}</span>
                              {g.split > 0 && <span className="ac-split">{g.split}×2</span>}
                              <span className="ac-val">{g.value}k</span>
                            </span>
                          ))
                        )}
                      </div>
                      <div className="tent-meta">
                        {p.debt > 0 && (
                          <span className="debt-stack" title={`Kartu utang: ${p.debt} (−13 skor tiap kartu)`}>
                            <Pile count={p.debt} red small />
                            <span className="lbl">utang {p.debt}</span>
                          </span>
                        )}
                        {view.phase === 'BIDDING' && (
                          <span className={`bid-card ${p.hasBid ? 'done' : ''}`}>{p.hasBid ? '✓ sudah bid' : '… belum bid'}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Board view={view} />

              {/* deck + hamparan kartu terbuka */}
              {view.phase !== 'ENDED' && (
                <div className="spread-row">
                  <div className="deck-zone">
                    <Pile count={view.deckCount} label="deck" />
                    <span className="deck-label">Deck aksi</span>
                  </div>
                  <div className="spread" style={{ position: 'relative' }}>
                    <span className="spread-label">
                      Kartu terbuka · {view.open.length} lembar
                      {isMyAction && <span className="hide-sm"> · ketuk untuk memilih</span>}
                    </span>
                    {view.open.length === 0 ? (
                      <p style={{ color: 'var(--cream-faint)', fontSize: 13, fontStyle: 'italic', padding: '18px 2px' }}>Tidak ada kartu terbuka di meja.</p>
                    ) : (
                      view.open.map((c, i) => {
                        const clickable = isMyAction && c.fee <= (me.coins ?? 0);
                        return (
                          <PhysicalCard
                            key={c.id}
                            card={c}
                            clickable={clickable}
                            selected={sel === c.id}
                            dim={isMyAction && !clickable}
                            delay={Math.min(i * 0.05, 0.45)}
                            onClick={() => { if (clickable) { setSel(c.id === sel ? null : c.id); sfx.slide(); } }}
                          />
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              <MarketTape
                log={view.log}
                round={view.round}
                rounds={CONFIG.rounds}
                hasEconomy={!!view.lastEconomy && view.lastEconomyRound !== null && view.lastEconomyRound > 0}
                onHistory={() => { sfx.reveal(); setLedgerOpen(true); }}
                onEconomy={() => { sfx.reveal(); setEconOpen(true); }}
              />

              {/* sisi dekat meja: kursimu */}
              <div className="near-seat">
                <div className="near-top">
                  <span className="order-card" title="Nomor urutan jalanmu"><span className="n">{me.order}</span><span className="l">URUTAN</span></span>
                  <span className={`prow me near-tent ${myTurn ? 'turn' : ''}`}>
                    <span className="pname">{nameOf(you)}</span>
                    {payload.seats.find((s) => s.pid === you)?.bot && <IconBot size={13} />}
                    <CoinStack coins={me.coins} pop={coinPop} />
                  </span>
                  {me.debt > 0 && (
                    <span className="debt-stack" title={`Kartu utang: ${me.debt} (−13 skor tiap kartu)`}>
                      <Pile count={me.debt} red small />
                      <span className="lbl">utang {me.debt}</span>
                    </span>
                  )}
                  <div className="spacer" />
                  {isMySell && <span className="chip chip-gold">Pilih saham di tanganmu — Reksa Dana cair otomatis di akhir</span>}
                </div>

                <div className="hand">
                  {me.assets.length === 0 ? (
                    <span className="hand-empty">Tanganmu kosong — ambil kartu terbuka sebagai aset untuk dijual nanti.</span>
                  ) : (
                    me.assets.map((c) => (
                      <PhysicalCard
                        key={c.id}
                        card={c}
                        mini
                        clickable={isMySell && c.kind !== 'FUND'}
                        dim={isMySell && c.kind === 'FUND'}
                        selected={isMySell && sellIds.includes(c.id)}
                        foot={<span className="acard-fee"><KindIcon kind={c.kind} size={9} />{valueOf(c)}k{c.split ? ' ×2' : ''}</span>}
                        onClick={isMySell && c.kind !== 'FUND' ? () => toggleSell(c) : undefined}
                      />
                    ))
                  )}
                </div>

                {me.peeks.length > 0 && (
                  <div className="slip">
                    <span className="slip-title"><IconEye size={13} />INFO BURSA — kartu ekonomi teratas (privat)</span>
                    {me.peeks.map((p) => (
                      <div className="peek-row" key={p.sector}>
                        <KindIcon kind={p.sector} size={14} />
                        <span style={{ color: SECTOR_META[p.sector].color, fontWeight: 600 }}>{SECTOR_META[p.sector].label}</span>
                        <span className="econ">{p.card.type}{p.card.delta !== undefined ? ` ${p.card.delta > 0 ? '+' : ''}${p.card.delta}` : ''}{p.card.coins !== undefined ? ` +${p.card.coins}k` : ''}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {econOpen && view.lastEconomy && view.lastEconomyRound !== null && (
                <EconomyReveal reveals={view.lastEconomy} round={view.lastEconomyRound} onClose={() => setEconOpen(false)} />
              )}
              {ledgerOpen && (
                <Ledger log={view.log} round={view.round} rounds={CONFIG.rounds} onClose={() => setLedgerOpen(false)} />
              )}
            </div>
          </div>
        </div>

        {view.phase !== 'ENDED' && !econOpen && !ledgerOpen && (
          <div className="game-side-dock">
            <ActionDock
              open={dockOpen}
              onToggle={() => { sfx.tap(); setDockOpen((o) => !o); }}
              label={dockLabel}
              hint={dockHint}
              active={isMyBid || isMyAction || isMySell || sel !== null}
              urgent={isMyBid || myTurn}
            >
              <ActionPanel
                view={view} you={you} seats={payload.seats} sel={sel} setSel={setSel}
                sellKind={sellKind} sellIds={sellIds} setSellKind={setSellKind} setSellIds={setSellIds}
                onAction={onAction}
              />
            </ActionDock>
          </div>
        )}
      </div>

      {view.phase === 'ENDED' && (
        <Results view={view} seats={payload.seats} you={you} isHost={isHost}
          onRestart={() => void onHost('restart')} onHome={() => router.push('/')} />
      )}
    </div>
  );
}
