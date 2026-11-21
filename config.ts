export const SECTORS = ['KONSUMER', 'KEUANGAN', 'AGRIKULTUR', 'TAMBANG'] as const;
export type Sector = (typeof SECTORS)[number];
export type Kind = Sector | 'FUND';
export type Effect = 'NONE' | 'QUICK_BUY' | 'RUMOR' | 'INFO' | 'ACQUIRE';
export type EconType =
  | 'MOVE' | 'BOOM' | 'CRASH' | 'SPLIT' | 'DIVIDEND' | 'RIGHT_ISSUE'
  | 'EXTRA_FEE' | 'PAJAK' | 'BUYBACK' | 'RESESI' | 'STIMULUS' | 'RESTRUCTURE';

/** Kartu Ungu: dieksekusi duluan di Fase Ekonomi. */
export const PURPLE: ReadonlySet<EconType> = new Set<EconType>([
  'EXTRA_FEE', 'PAJAK', 'BUYBACK', 'RESESI', 'STIMULUS', 'RESTRUCTURE',
]);

export const CONFIG = {
  // ---- OFFICIAL (dari rulebook) ----
  rounds: 6,
  startCoins: 15,
  startPrice: 5,
  minPrice: 0,
  maxPrice: 10,
  minPlayers: 3,
  maxPlayers: 5,
  stocksPerSector: 12,
  fundCards: 12,
  /** Rulebook tulis "~"; totalnya harus 60. */
  effectCounts: { NONE: 24, QUICK_BUY: 12, RUMOR: 10, INFO: 8, ACQUIRE: 6 } as Record<Effect, number>,
  openLimit: { sameKind: 3, quickBuy: 3 },
  economyPerSector: 6,
  quickBuyTake: 2,
  rumorMoves: 2,
  infoBonus: 2,
  /** Kartu Utang: pinjam 10 koin, dipotong 13 saat pelunasan akhir. */
  loan: 10,
  debtPenalty: 13,
  /** Bid minimal 1 koin (0 hanya bila pemain benar-benar tidak punya koin). */
  minBid: 1,

  // ---- ASSUMPTION (rulebook tidak menyebut angka pastinya) ----
  /** fee -> jumlah kartu. Total harus 60. */
  fees: { 0: 36, 1: 16, 2: 8 } as Record<number, number>,
  /** Maks percobaan kocok ulang saat filter buka kartu gagal, lalu terima apa adanya. */
  openRetryCap: 100,
};

/** ASSUMPTION: komposisi deck ekonomi (rulebook: 30-36 kartu, 24 dipakai). Total di sini 34. */
export const ECONOMY_DECK: { type: EconType; n: number; delta?: number; coins?: number }[] = [
  { type: 'MOVE', delta: 1, n: 3 },
  { type: 'MOVE', delta: 2, n: 3 },
  { type: 'MOVE', delta: -1, n: 3 },
  { type: 'MOVE', delta: -2, n: 3 },
  { type: 'MOVE', delta: 0, n: 2 },
  { type: 'BOOM', n: 2 },
  { type: 'CRASH', n: 2 },
  { type: 'SPLIT', n: 3 },
  { type: 'DIVIDEND', coins: 1, n: 2 },
  { type: 'DIVIDEND', coins: 2, n: 2 },
  { type: 'RIGHT_ISSUE', n: 2 },
  { type: 'EXTRA_FEE', n: 1 },
  { type: 'PAJAK', n: 1 },
  { type: 'BUYBACK', n: 2 },
  { type: 'RESESI', n: 1 },
  { type: 'STIMULUS', n: 1 },
  { type: 'RESTRUCTURE', n: 1 },
];
