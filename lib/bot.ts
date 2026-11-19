import { fundPrice } from '../engine.ts';
import type { Action, GameState } from '../engine.ts';
import { CONFIG, SECTORS } from '../config.ts';
import type { Sector } from '../config.ts';

export type Difficulty = 'random' | 'smart';

const mulberry = (a: number) => () => {
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/** Kandidat aksi berurutan; yang terakhir DIJAMIN valid (fallback). Deterministik terhadap state. */
export function botCandidates(s: GameState, pid: number, st: Difficulty): Action[] {
  const r = mulberry((s.rng ^ Math.imul(pid + 1, 2654435761) ^ Math.imul(s.round, 40503)) | 0);
  const p = s.players[pid];
  const pick = <T,>(a: T[]) => a[Math.floor(r() * a.length)];
  const val = (k: string) => (k === 'FUND' ? fundPrice(s) : s.price[k as Sector]);

  if (s.phase === 'BIDDING') {
    const cap = Math.min(p.coins, st === 'smart' ? 2 : 3);
    return [{ type: 'BID', amount: Math.floor(r() * (cap + 1)) }];
  }

  if (s.phase === 'ACTION') {
    const aff = s.open.filter((c) => c.fee <= p.coins);
    if (!aff.length) return [{ type: 'SELL', cardIds: [] }];
    const c = st === 'smart'
      ? [...aff].sort((a, b) => (val(b.kind) - b.fee) - (val(a.kind) - a.fee))[0]
      : pick(aff);
    const out: Action[] = [];
    if (c.effect !== 'NONE' && (st === 'smart' || r() < 0.6)) {
      const base = { type: 'TAKE' as const, cardId: c.id, mode: 'effect' as const };
      if (c.effect === 'RUMOR') {
        const held = SECTORS.filter((k) => p.assets.some((a) => a.kind === k));
        const mv = () => ({ sector: pick(held.length ? held : [...SECTORS]), delta: 1 as const });
        out.push({ ...base, params: { moves: st === 'smart' ? [mv(), mv()] : [{ sector: pick([...SECTORS]), delta: r() < 0.5 ? 1 : -1 }] } });
      } else if (c.effect === 'INFO') {
        const secs = [...SECTORS].sort(() => r() - 0.5).slice(0, 2);
        out.push({ ...base, params: { sectors: secs } });
      } else if (c.effect === 'ACQUIRE') {
        const targets = s.players.filter((q) => q.id !== pid).flatMap((q) => q.assets).filter((a) => a.kind !== 'FUND');
        if (targets.length) out.push({ ...base, params: { targetCardId: pick(targets).id } });
      } else if (c.effect === 'QUICK_BUY') {
        const others = s.open.filter((o) => o.id !== c.id).sort((a, b) => a.fee - b.fee);
        out.push({ ...base, params: { cardIds: others.slice(0, Math.min(2, others.length)).map((o) => o.id) } });
      }
    }
    out.push({ type: 'TAKE', cardId: c.id, mode: 'save' });
    return out;
  }

  const kinds = [...new Set(p.assets.map((a) => a.kind))];
  const total = (k: string) => p.assets.filter((a) => a.kind === k).reduce((t, a) => t + (k === 'FUND' ? fundPrice(s) : s.price[k as Sector] * (a.split ? 2 : 1)), 0);
  const final = s.round >= CONFIG.rounds;
  const eligible = st === 'smart' ? kinds.filter((k) => final || val(k) >= 6) : kinds.filter(() => r() < 0.4);
  if (!eligible.length) return [{ type: 'SELL', cardIds: [] }];
  const k = st === 'smart' ? [...eligible].sort((a, b) => total(b) - total(a))[0] : pick(eligible);
  return [{ type: 'SELL', cardIds: p.assets.filter((a) => a.kind === k).map((a) => a.id) }, { type: 'SELL', cardIds: [] }];
}

/** Aksi aman untuk auto-pass / timeout / skip host. Selalu valid untuk actor saat ini. */
export function autoAction(s: GameState, pid: number): Action {
  if (s.phase === 'BIDDING') return { type: 'BID', amount: 0 };
  if (s.phase === 'ACTION') {
    const p = s.players[pid];
    const aff = s.open.filter((c) => c.fee <= p.coins).sort((a, b) => a.fee - b.fee);
    if (aff.length) return { type: 'TAKE', cardId: aff[0].id, mode: 'save' };
  }
  return { type: 'SELL', cardIds: [] };
}