import { CONFIG, ECONOMY_DECK, PURPLE, SECTORS } from './config.ts';
import type { EconType, Effect, Kind, Sector } from './config.ts';

// ───────────────────────── Types ─────────────────────────
export interface ActionCard { id: number; kind: Kind; effect: Effect; fee: number; split: boolean }
export interface EconCard { id: number; type: EconType; delta?: number; coins?: number }
export interface Player {
  id: number;
  coins: number;
  assets: ActionCard[];
  debt: number;
  order: number; // Kartu Urutan Jalan (1 = jalan duluan)
  bid: number | null;
  peeks: { sector: Sector; card: EconCard }[]; // hasil Info Bursa, privat
  usedInfo: boolean;
}
export type Phase = 'BIDDING' | 'ACTION' | 'SELL' | 'ENDED';
export interface GameState {
  rng: number;
  round: number;
  phase: Phase;
  board: Sector[]; // kiri -> kanan
  price: Record<Sector, number>;
  stacks: Record<Sector, EconCard[]>; // index 0 = kartu teratas (tertutup)
  deck: ActionCard[];
  open: ActionCard[];
  discard: ActionCard[];
  players: Player[];
  turn: number | null;
  sellQueue: number[];
  nextId: number;
  log: string[];
  /** Kartu ekonomi yang baru dibuka (info publik setelah dibuka). */
  lastEconomy?: { sector: Sector; card: EconCard }[];
  lastEconomyRound?: number;
  result?: { scores: { id: number; total: number; order: number }[]; winner: number };
}
export interface EffectParams {
  moves?: { sector: Sector; delta: 1 | -1 | 2 | -2 }[]; // RUMOR
  sectors?: Sector[]; // INFO
  targetCardId?: number; // ACQUIRE
  cardIds?: number[]; // QUICK_BUY
}
export type Action =
  | { type: 'BID'; amount: number }
  | { type: 'TAKE'; cardId: number; mode: 'save' | 'effect'; params?: EffectParams }
  | { type: 'SELL'; cardIds: number[] }; // [] = pass

export class GameError extends Error {}
const fail = (m: string): never => { throw new GameError(m); };

// ───────────────────────── RNG (seeded, deterministik) ─────────────────────────
function rand(s: GameState): number {
  s.rng = (s.rng + 0x6d2b79f5) | 0;
  let t = Math.imul(s.rng ^ (s.rng >>> 15), 1 | s.rng);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
function shuffle<T>(s: GameState, a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand(s) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ───────────────────────── Setup ─────────────────────────
export function newGame(playerCount: number, seed = 1): GameState {
  if (playerCount < CONFIG.minPlayers || playerCount > CONFIG.maxPlayers) fail('jumlah pemain harus 3-5');
  const s: GameState = {
    rng: seed | 0, round: 1, phase: 'BIDDING', board: [...SECTORS],
    price: {} as Record<Sector, number>, stacks: {} as Record<Sector, EconCard[]>,
    deck: [], open: [], discard: [], players: [], turn: null, sellQueue: [], nextId: 1, log: [],
  };
  shuffle(s, s.board);
  for (const sec of SECTORS) s.price[sec] = CONFIG.startPrice;

  const econ: EconCard[] = [];
  for (const e of ECONOMY_DECK) {
    for (let i = 0; i < e.n; i++) econ.push({ id: s.nextId++, type: e.type, delta: e.delta, coins: e.coins });
  }
  shuffle(s, econ);
  for (const sec of s.board) s.stacks[sec] = econ.splice(0, CONFIG.economyPerSector);

  const kinds: Kind[] = [
    ...SECTORS.flatMap((sec) => Array<Kind>(CONFIG.stocksPerSector).fill(sec)),
    ...Array<Kind>(CONFIG.fundCards).fill('FUND'),
  ];
  const effects = Object.entries(CONFIG.effectCounts).flatMap(([e, n]) => Array<Effect>(n).fill(e as Effect));
  const fees = Object.entries(CONFIG.fees).flatMap(([f, n]) => Array<number>(n).fill(Number(f)));
  if (effects.length !== kinds.length || fees.length !== kinds.length) throw new Error('config deck tidak konsisten');
  shuffle(s, effects);
  shuffle(s, fees);
  s.deck = shuffle(s, kinds.map((kind, i) => ({ id: s.nextId++, kind, effect: effects[i], fee: fees[i], split: false })));

  const orders = shuffle(s, Array.from({ length: playerCount }, (_, i) => i + 1));
  s.players = orders.map((order, id) => ({
    id, coins: CONFIG.startCoins, assets: [], debt: 0, order, bid: null, peeks: [], usedInfo: false,
  }));
  startRound(s);
  return s;
}

// ───────────────────────── Helpers ─────────────────────────
const byOrder = (s: GameState) => [...s.players].sort((a, b) => a.order - b.order);
const clamp = (n: number) => Math.max(CONFIG.minPrice, Math.min(CONFIG.maxPrice, n));

/**
 * Geser harga sektor. Melewati batas bawah = Stock Crash, batas atas = Stock Split.
 * Rumor memakai `boundaries: false` karena efek itu tidak boleh memicu Crash/Split.
 */
function movePrice(s: GameState, sec: Sector, d: number, opts: { boundaries?: boolean } = {}): void {
  if (d === 0) return;
  const next = s.price[sec] + d;
  if (opts.boundaries === false) { s.price[sec] = clamp(next); return; }
  if (next < CONFIG.minPrice) { stockCrash(s, sec); return; }
  if (next > CONFIG.maxPrice) { split(s, sec); s.price[sec] = CONFIG.maxPrice; return; }
  s.price[sec] = next;
}

/** Harga menembus batas bawah: semua saham sektor itu kembali ke Bank, harga reset. */
function stockCrash(s: GameState, sec: Sector): void {
  let returned = 0;
  for (const p of s.players) {
    const held = stocksOf(p, sec);
    if (!held.length) continue;
    returned += held.length;
    s.discard.push(...held);
    p.assets = p.assets.filter((c) => c.kind !== sec);
  }
  s.price[sec] = CONFIG.startPrice;
  s.log.push(`Stock Crash ${sec}: ${returned} lembar kembali ke Bank, harga reset ${CONFIG.startPrice}`);
}

export function fundPrice(s: GameState): number {
  return Math.floor((s.price[s.board[1]] + s.price[s.board[2]]) / 2);
}
function value(s: GameState, c: ActionCard): number {
  return c.kind === 'FUND' ? fundPrice(s) : s.price[c.kind] * (c.split ? 2 : 1);
}
/** Bayar; kalau koin kurang -> Kartu Utang paksa (1 kartu = pinjaman 10 koin, kembalian masuk saldo). */
export function pay(s: GameState, payer: Player, amount: number, payee?: Player): void {
  if (amount <= 0) return;
  if (payer.coins < amount) {
    const n = Math.ceil((amount - payer.coins) / CONFIG.loan);
    payer.debt += n;
    payer.coins += n * CONFIG.loan;
    s.log.push(`P${payer.id} ambil ${n} Kartu Utang`);
  }
  payer.coins -= amount;
  if (payee) payee.coins += amount;
}
export function currentActors(s: GameState): number[] {
  if (s.phase === 'BIDDING') return s.players.filter((p) => p.bid === null).map((p) => p.id);
  return s.turn === null ? [] : [s.turn];
}

// ───────────────────────── Round flow ─────────────────────────
function drawOpen(s: GameState): ActionCard[] {
  const n = Math.min(2 * s.players.length, s.deck.length);
  const ok = (h: ActionCard[]) => {
    const per: Record<string, number> = {};
    for (const c of h) per[c.kind] = (per[c.kind] ?? 0) + 1;
    return Math.max(0, ...Object.values(per)) <= CONFIG.openLimit.sameKind &&
      h.filter((c) => c.effect === 'QUICK_BUY').length <= CONFIG.openLimit.quickBuy;
  };
  for (let t = 0; t < CONFIG.openRetryCap; t++) {
    const hand = s.deck.splice(0, n);
    if (ok(hand)) return hand;
    s.deck.push(...hand);
    shuffle(s, s.deck);
  }
  s.log.push('filter buka kartu gagal, dipakai apa adanya');
  return s.deck.splice(0, n);
}
function startRound(s: GameState): void {
  s.phase = 'BIDDING';
  s.turn = null;
  s.sellQueue = [];
  s.players.forEach((p) => { p.bid = null; });
  s.open = drawOpen(s);
  s.log.push(`Ronde ${s.round}: ${s.open.length} kartu aksi dibuka`);
}
function resolveBids(s: GameState): void {
  const ranked = [...s.players].sort((a, b) => b.bid! - a.bid! || a.order - b.order);
  s.log.push('Bid: ' + ranked.map((p) => `P${p.id}=${p.bid}`).join(' '));
  ranked.forEach((p, i) => { p.coins -= p.bid!; p.order = i + 1; p.bid = null; });
  s.phase = 'ACTION';
  s.turn = byOrder(s).at(-1)!.id; // nextTurn akan mulai dari order 1
  nextTurn(s);
}
function nextTurn(s: GameState): void {
  if (s.open.length === 0) return startSell(s);
  const ord = byOrder(s);
  const idx = ord.findIndex((p) => p.id === s.turn);
  for (let i = 1; i <= ord.length; i++) {
    const q = ord[(idx + i) % ord.length];
    if (s.open.some((c) => c.fee <= q.coins)) { s.turn = q.id; return; }
  }
  s.discard.push(...s.open); // tidak ada yang mampu bayar fee -> sisa dibuang
  s.open = [];
  startSell(s);
}
function startSell(s: GameState): void {
  s.phase = 'SELL';
  const ord = byOrder(s);
  s.sellQueue = [...ord.filter((p) => !p.usedInfo), ...ord.filter((p) => p.usedInfo)].map((p) => p.id);
  s.turn = s.sellQueue[0];
}

// ───────────────────────── Actions ─────────────────────────
export function applyAction(prev: GameState, pid: number, a: Action): GameState {
  const s = structuredClone(prev); // atomic: error -> state lama tidak berubah
  const p = s.players[pid] ?? fail('pemain tidak ada');
  if (s.phase === 'ENDED') fail('game sudah selesai');
  if (a.type === 'BID') bid(s, p, a.amount);
  else if (a.type === 'TAKE') take(s, p, a);
  else if (a.type === 'SELL') sell(s, p, a.cardIds);
  else fail('aksi tidak dikenal');
  return s;
}

function bid(s: GameState, p: Player, amount: number): void {
  if (s.phase !== 'BIDDING') fail('bukan fase bidding');
  if (p.bid !== null) fail('sudah bid');
  const minBid = Math.min(CONFIG.minBid, p.coins); // tanpa koin = pass paksa (0)
  if (!Number.isInteger(amount) || amount < minBid || amount > p.coins) fail(`bid minimal ${minBid} koin`);
  p.bid = amount;
  if (s.players.every((q) => q.bid !== null)) resolveBids(s);
}

function take(s: GameState, p: Player, a: Extract<Action, { type: 'TAKE' }>): void {
  if (s.phase !== 'ACTION' || s.turn !== p.id) fail('bukan giliranmu');
  const card = s.open.find((c) => c.id === a.cardId) ?? fail('kartu tidak terbuka');
  if (card.fee > p.coins) fail('koin kurang untuk trading fee');
  if (a.mode === 'effect' && card.effect === 'NONE') fail('kartu polos tidak punya efek');
  p.coins -= card.fee;
  s.open = s.open.filter((c) => c !== card);
  if (a.mode === 'save') p.assets.push(card);
  else { runEffect(s, p, card, a.params ?? {}); s.discard.push(card); }
  nextTurn(s);
}

function runEffect(s: GameState, p: Player, card: ActionCard, x: EffectParams): void {
  switch (card.effect) {
    case 'QUICK_BUY': {
      const ids = x.cardIds ?? [];
      const need = Math.min(CONFIG.quickBuyTake, s.open.length);
      if (ids.length !== need || new Set(ids).size !== need) fail(`Quick Buy: pilih tepat ${need} kartu`);
      const picks = ids.map((id) => s.open.find((c) => c.id === id) ?? fail('kartu tidak terbuka'));
      const fee = picks.reduce((t, c) => t + c.fee, 0);
      if (fee > p.coins) fail('koin kurang untuk fee Quick Buy');
      p.coins -= fee;
      p.assets.push(...picks); // wajib disimpan sebagai aset
      s.open = s.open.filter((c) => !picks.includes(c));
      return;
    }
    case 'RUMOR': {
      const m = x.moves ?? [];
      if (m.length < 1 || m.length > CONFIG.rumorMoves) fail('Rumor: 1-2 perubahan');
      const single = m.length === 1;
      for (const { sector, delta } of m) {
        const ok = single ? [1, -1, 2, -2].includes(delta) : delta === 1 || delta === -1;
        if (!SECTORS.includes(sector) || !ok) fail('Rumor: ±1 ke 1-2 sektor atau ±2 ke satu sektor');
      }
      // Rumor tidak memicu Stock Crash / Stock Split.
      for (const { sector, delta } of m) movePrice(s, sector, delta, { boundaries: false });
      return;
    }
    case 'INFO': {
      const secs = x.sectors ?? [];
      if (secs.length !== 2 || secs[0] === secs[1] || secs.some((c) => !SECTORS.includes(c))) fail('Info Bursa: pilih 2 sektor berbeda');
      p.peeks = secs.map((sector) => ({ sector, card: s.stacks[sector][0] ?? fail('tumpukan kosong') }));
      p.coins += CONFIG.infoBonus;
      p.usedInfo = true;
      return;
    }
    case 'ACQUIRE': {
      const owner = s.players.find((q) => q.id !== p.id && q.assets.some((c) => c.id === x.targetCardId)) ?? fail('target tidak valid');
      const target = owner.assets.find((c) => c.id === x.targetCardId)!;
      if (target.kind === 'FUND') fail('Reksa Dana tidak bisa diakuisisi');
      const sec = target.kind as Sector;
      const mine = stocksOf(p, sec).length;
      const theirs = stocksOf(owner, sec).length;
      if (mine < theirs) fail(`Akuisisi ${sec}: butuh minimal ${theirs} lembar (kamu punya ${mine})`);
      // Kompensasi dibayar ke Bank, bukan ke pemilik saham.
      pay(s, p, Math.floor(s.price[sec] / 2));
      owner.assets = owner.assets.filter((c) => c !== target);
      p.assets.push(target); // Split token ikut pindah
      return;
    }
    default:
      fail('kartu tanpa efek');
  }
}

function sell(s: GameState, p: Player, ids: number[]): void {
  if (s.phase !== 'SELL' || s.turn !== p.id) fail('bukan giliranmu');
  if (ids.length) {
    if (new Set(ids).size !== ids.length) fail('kartu duplikat');
    const cards = ids.map((id) => p.assets.find((c) => c.id === id) ?? fail('bukan kartu milikmu'));
    if (cards.some((c) => c.kind === 'FUND')) fail('Reksa Dana hanya dicairkan di akhir permainan');
    if (new Set(cards.map((c) => c.kind)).size !== 1) fail('hanya boleh jual 1 jenis aset');
    p.coins += cards.reduce((t, c) => t + value(s, c), 0);
    p.assets = p.assets.filter((c) => !cards.includes(c));
    s.discard.push(...cards);
  }
  s.sellQueue.shift();
  if (s.sellQueue.length) s.turn = s.sellQueue[0];
  else resolveEconomy(s);
}

// ───────────────────────── Fase Ekonomi (otomatis = peran Banker) ─────────────────────────
export function resolveEconomy(s: GameState): void {
  const revealed = s.board.map((sector) => ({ sector, card: s.stacks[sector].shift() ?? fail('tumpukan ekonomi kosong') }));
  s.lastEconomy = revealed;
  s.lastEconomyRound = s.round;
  s.log.push('Ekonomi: ' + revealed.map((r) => `${r.sector}:${r.card.type}`).join(' '));
  if (revealed.some((r) => r.card.type === 'RESTRUCTURE')) {
    for (const sec of SECTORS) s.price[sec] = CONFIG.startPrice; // membatalkan SEMUA efek lain
  } else {
    const ordered = [
      ...revealed.filter((r) => PURPLE.has(r.card.type)), // Ungu dulu, kiri -> kanan
      ...revealed.filter((r) => !PURPLE.has(r.card.type)),
    ];
    for (const r of ordered) applyEcon(s, r.sector, r.card);
  }
  s.players.forEach((p) => { p.peeks = []; p.usedInfo = false; });
  s.round++;
  if (s.round > CONFIG.rounds) endGame(s);
  else startRound(s);
}

function stocksOf(p: Player, sec: Sector): ActionCard[] { return p.assets.filter((c) => c.kind === sec); }
/** Harga menembus batas atas / kartu Split: tiap lembar pemegang dapat token Split (×2 nilai). */
function split(s: GameState, sec: Sector): void {
  let granted = 0;
  s.players.forEach((p) => stocksOf(p, sec).forEach((c) => {
    if (!c.split) { c.split = true; granted++; } // maks 1 token / kartu, sesuai suplai fisik
  }));
  if (granted) s.log.push(`Stock Split ${sec}: ${granted} lembar dapat token Split`);
}

function applyEcon(s: GameState, sec: Sector, c: EconCard): void {
  switch (c.type) {
    case 'MOVE': movePrice(s, sec, c.delta ?? 0); break;
    case 'BOOM': movePrice(s, sec, 3); split(s, sec); break;
    case 'CRASH': movePrice(s, sec, -3); break;
    case 'SPLIT': split(s, sec); break;
    case 'DIVIDEND':
      s.players.forEach((p) => { p.coins += stocksOf(p, sec).length * (c.coins ?? 0); });
      break;
    case 'RIGHT_ISSUE':
      movePrice(s, sec, -1);
      s.players.forEach((p) => {
        if (stocksOf(p, sec).length) p.assets.push({ id: s.nextId++, kind: sec, effect: 'NONE', fee: 0, split: true });
      });
      break;
    case 'EXTRA_FEE': s.players.forEach((p) => pay(s, p, p.assets.length)); break;
    case 'PAJAK': s.players.forEach((p) => pay(s, p, p.order)); break;
    case 'BUYBACK':
      movePrice(s, sec, 1);
      s.players.forEach((p) => {
        const sold = stocksOf(p, sec);
        p.coins += sold.reduce((t, k) => t + value(s, k), 0);
        p.assets = p.assets.filter((k) => !sold.includes(k));
        s.discard.push(...sold);
      });
      break;
    case 'RESESI': for (const k of SECTORS) if (s.price[k] > CONFIG.startPrice) movePrice(s, k, -1); break;
    case 'STIMULUS': for (const k of SECTORS) if (s.price[k] < CONFIG.startPrice) movePrice(s, k, 1); break;
    case 'RESTRUCTURE': break; // ditangani di resolveEconomy
  }
}

function endGame(s: GameState): void {
  s.phase = 'ENDED';
  s.turn = null;
  s.sellQueue = [];
  const scores = s.players.map((p) => {
    p.coins += p.assets.reduce((t, c) => t + value(s, c), 0); // likuidasi akhir
    s.discard.push(...p.assets);
    p.assets = [];
    return { id: p.id, total: p.coins - p.debt * CONFIG.debtPenalty, order: p.order };
  });
  scores.sort((a, b) => b.total - a.total || a.order - b.order);
  s.result = { scores, winner: scores[0].id };
  s.log.push('Game selesai');
}

// ───────────────────────── View per pemain (hidden info) ─────────────────────────
/** pid = -1 untuk Banker/penonton: hanya info publik. */
export function viewFor(s: GameState, pid: number) {
  return {
    round: s.round, phase: s.phase, board: s.board, price: s.price, fundPrice: fundPrice(s),
    open: s.open, turn: s.turn, sellQueue: s.sellQueue, deckCount: s.deck.length,
    stackCounts: Object.fromEntries(SECTORS.map((k) => [k, s.stacks[k].length])),
    lastEconomy: s.lastEconomy ?? null,
    lastEconomyRound: s.lastEconomyRound ?? null,
    players: s.players.map((p) => ({
      id: p.id, order: p.order, assets: p.assets, debt: p.debt, hasBid: p.bid !== null,
      coins: p.id === pid ? p.coins : null,
      bid: p.id === pid ? p.bid : null,
      peeks: p.id === pid ? p.peeks : [],
    })),
    result: s.result, log: s.log,
  };
}
