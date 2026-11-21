import { applyAction, currentActors, GameError, fundPrice, newGame } from './engine.ts';
import type { Action, GameState } from './engine.ts';
import { CONFIG, SECTORS } from './config.ts';
import type { Sector } from './config.ts';

type Strategy = 'random' | 'smart';
const mulberry = (a: number) => () => {
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/** Kandidat aksi berurutan; yang terakhir DIJAMIN valid (fallback). */
function candidates(s: GameState, pid: number, st: Strategy, r: () => number): Action[] {
  const p = s.players[pid];
  const pick = <T>(a: T[]) => a[Math.floor(r() * a.length)];
  const val = (k: string) => (k === 'FUND' ? fundPrice(s) : s.price[k as Sector]);

  if (s.phase === 'BIDDING') {
    const cap = Math.min(p.coins, st === 'smart' ? 2 : 3);
    const lo = Math.min(CONFIG.minBid, cap);
    return [{ type: 'BID', amount: lo + Math.floor(r() * (cap - lo + 1)) }];
  }

  if (s.phase === 'ACTION') {
    const aff = s.open.filter((c) => c.fee <= p.coins);
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
        const count = (pl: typeof p, sec: Sector) => pl.assets.filter((a) => a.kind === sec).length;
        const targets = s.players.filter((q) => q.id !== pid).flatMap((q) =>
          q.assets.filter((a) => a.kind !== 'FUND' && count(p, a.kind as Sector) >= count(q, a.kind as Sector)));
        if (targets.length) out.push({ ...base, params: { targetCardId: pick(targets).id } });
      } else if (c.effect === 'QUICK_BUY') {
        const others = s.open.filter((o) => o.id !== c.id).sort((a, b) => a.fee - b.fee);
        out.push({ ...base, params: { cardIds: others.slice(0, Math.min(2, others.length)).map((o) => o.id) } });
      }
    }
    out.push({ type: 'TAKE', cardId: c.id, mode: 'save' });
    return out;
  }

  // SELL
  const kinds = [...new Set(p.assets.map((a) => a.kind))].filter((k) => k !== 'FUND');
  const total = (k: string) => p.assets.filter((a) => a.kind === k).reduce((t, a) => t + s.price[k as Sector] * (a.split ? 2 : 1), 0);
  const final = s.round >= CONFIG.rounds;
  const eligible = st === 'smart' ? kinds.filter((k) => final || val(k) >= 6) : kinds.filter(() => r() < 0.4);
  if (!eligible.length) return [{ type: 'SELL', cardIds: [] }];
  const k = st === 'smart' ? eligible.sort((a, b) => total(b) - total(a))[0] : pick(eligible);
  return [{ type: 'SELL', cardIds: p.assets.filter((a) => a.kind === k).map((a) => a.id) }, { type: 'SELL', cardIds: [] }];
}

function check(s: GameState): void {
  for (const p of s.players) if (p.coins < 0) throw new Error(`koin negatif P${p.id}`);
  for (const k of SECTORS) if (s.price[k] < CONFIG.minPrice || s.price[k] > CONFIG.maxPrice) throw new Error(`harga di luar batas ${k}`);
}

const N = Number(process.argv[2] ?? 1000);
const PLAYERS = 5;
const strategies: Strategy[] = ['random', 'random', 'smart', 'smart', 'smart'];
const agg = { steps: 0, debtGames: 0, debtCards: 0, winners: Array(PLAYERS).fill(0), seatScore: Array(PLAYERS).fill(0), win: { random: 0, smart: 0 }, price: {} as Record<string, number>, rejected: 0, scoreMax: -Infinity, scoreMin: Infinity };
SECTORS.forEach((k) => { agg.price[k] = 0; });

for (let g = 0; g < N; g++) {
  let s = newGame(PLAYERS, 1000 + g);
  const r = mulberry(g + 77);
  let steps = 0;
  while (s.phase !== 'ENDED') {
    if (++steps > 3000) throw new Error(`game ${g} tidak selesai (phase=${s.phase})`);
    const pid = currentActors(s)[0];
    let done = false;
    for (const a of candidates(s, pid, strategies[pid], r)) {
      try { s = applyAction(s, pid, a); done = true; break; } catch (e) { if (!(e instanceof GameError)) throw e; agg.rejected++; }
    }
    if (!done) throw new Error(`tidak ada aksi valid, game ${g}, phase ${s.phase}`);
    check(s);
  }
  agg.steps += steps;
  agg.winners[s.result!.winner]++;
  agg.win[strategies[s.result!.winner]]++;
  s.result!.scores.forEach((x) => { agg.seatScore[x.id] += x.total; agg.scoreMax = Math.max(agg.scoreMax, x.total); agg.scoreMin = Math.min(agg.scoreMin, x.total); });
  const d = s.players.reduce((t, p) => t + p.debt, 0);
  agg.debtCards += d; if (d) agg.debtGames++;
  SECTORS.forEach((k) => { agg.price[k] += s.price[k]; });
}

const f = (x: number, d = 2) => x.toFixed(d);
console.log(`${N} game x ${PLAYERS} pemain, tanpa error/invariant violation`);
console.log(`rata-rata aksi/game: ${f(agg.steps / N, 0)} | aksi ditolak (fallback bot): ${agg.rejected}`);
console.log('harga akhir rata-rata:', Object.fromEntries(SECTORS.map((k) => [k, f(agg.price[k] / N)])));
console.log(`game dengan utang: ${f((agg.debtGames / N) * 100, 1)}% | kartu utang/game: ${f(agg.debtCards / N)}`);
console.log('skor rata-rata per seat (seat 0-1 random, 2-4 smart):', agg.seatScore.map((x) => f(x / N, 1)).join(' | '));
console.log(`skor min/max: ${agg.scoreMin} / ${agg.scoreMax}`);
console.log(`win-rate: random ${f((agg.win.random / N) * 100, 1)}% (2 seat) vs smart ${f((agg.win.smart / N) * 100, 1)}% (3 seat)`);
