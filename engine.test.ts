import test from 'node:test';
import assert from 'node:assert/strict';
import { applyAction, fundPrice, newGame, pay, resolveEconomy, viewFor, GameError } from './engine.ts';
import type { ActionCard, EconCard, GameState } from './engine.ts';
import { SECTORS } from './config.ts';

const card = (id: number, kind: ActionCard['kind'], o: Partial<ActionCard> = {}): ActionCard =>
  ({ id, kind, effect: 'NONE', fee: 0, split: false, ...o });
const setTops = (s: GameState, tops: Record<number, EconCard>) => {
  s.board.forEach((sec, i) => { s.stacks[sec][0] = tops[i] ?? { id: 9000 + i, type: 'MOVE', delta: 0 }; });
};

test('harga reksa dana = floor(rata-rata sektor ke-2 & ke-3)', () => {
  const s = newGame(3, 1);
  s.price[s.board[1]] = 7;
  s.price[s.board[2]] = 4;
  assert.equal(fundPrice(s), 5);
});

test('bidding: tertinggi dapat urutan 1, seri -> nomor urutan lama lebih kecil', () => {
  let s = newGame(3, 1);
  s.players[0].order = 3; s.players[1].order = 1; s.players[2].order = 2;
  for (const id of [0, 1, 2]) s = applyAction(s, id, { type: 'BID', amount: 2 });
  assert.deepEqual(s.players.map((p) => p.order), [3, 1, 2]);
  assert.ok(s.players.every((p) => p.coins === 13));
  assert.equal(s.phase, 'ACTION');

  let t = newGame(3, 1);
  t.players[0].order = 3; t.players[1].order = 1; t.players[2].order = 2;
  t = applyAction(t, 0, { type: 'BID', amount: 5 });
  t = applyAction(t, 1, { type: 'BID', amount: 2 });
  t = applyAction(t, 2, { type: 'BID', amount: 2 });
  assert.deepEqual(t.players.map((p) => p.order), [1, 2, 3]);
});

test('bid melebihi koin ditolak & state lama tidak berubah', () => {
  const s = newGame(3, 1);
  assert.throws(() => applyAction(s, 0, { type: 'BID', amount: 99 }), GameError);
  assert.equal(s.players[0].bid, null);
});

test('utang: kurang bayar -> Kartu Utang (pinjam 10, potong 13)', () => {
  const s = newGame(3, 1);
  s.players[0].coins = 2;
  pay(s, s.players[0], 7);
  assert.equal(s.players[0].debt, 1);
  assert.equal(s.players[0].coins, 5);
  s.players[0].coins = 1;
  pay(s, s.players[0], 3); // kurang 2 -> 1 kartu, saldo 11-3=8
  assert.equal(s.players[0].debt, 2);
  assert.equal(s.players[0].coins, 8);
});

test('akuisisi: bayar floor(harga/2) ke Bank, syarat sahammu >= milik target, Split ikut pindah', () => {
  let s = newGame(3, 1);
  s.phase = 'ACTION';
  const ord = [...s.players].sort((a, b) => a.order - b.order);
  const me = ord[0], victim = ord[1];
  s.turn = me.id;
  s.price.TAMBANG = 7;
  me.assets = [card(502, 'TAMBANG')];
  victim.assets = [card(500, 'TAMBANG', { split: true }), card(501, 'FUND')];
  s.open = [card(600, 'KONSUMER', { effect: 'ACQUIRE' }), card(601, 'KEUANGAN')];
  assert.throws(() => applyAction(s, me.id, { type: 'TAKE', cardId: 600, mode: 'effect', params: { targetCardId: 501 } }), GameError);
  s = applyAction(s, me.id, { type: 'TAKE', cardId: 600, mode: 'effect', params: { targetCardId: 500 } });
  assert.equal(s.players[me.id].coins, 15 - 3);
  assert.equal(s.players[victim.id].coins, 15); // kompensasi dari Bank
  assert.ok(s.players[me.id].assets.some((c) => c.id === 500 && c.split));
  assert.equal(s.players[victim.id].assets.length, 1);
});

test('akuisisi ditolak bila saham sektor itu lebih sedikit dari target', () => {
  const s = newGame(3, 1);
  s.phase = 'ACTION';
  const ord = [...s.players].sort((a, b) => a.order - b.order);
  const me = ord[0], victim = ord[1];
  s.turn = me.id;
  me.assets = [card(700, 'KEUANGAN')];
  victim.assets = [card(701, 'KEUANGAN'), card(702, 'KEUANGAN')];
  s.open = [card(703, 'KONSUMER', { effect: 'ACQUIRE' }), card(704, 'TAMBANG')];
  assert.throws(() => applyAction(s, me.id, { type: 'TAKE', cardId: 703, mode: 'effect', params: { targetCardId: 701 } }), GameError);
  assert.equal(s.players[me.id].assets.length, 1);
});

test('bid minimal 1 koin', () => {
  const s = newGame(3, 1);
  assert.throws(() => applyAction(s, 0, { type: 'BID', amount: 0 }), GameError);
  assert.equal(s.phase, 'BIDDING');
});

test('Reksa Dana tidak bisa dijual di fase Jual', () => {
  const s = newGame(3, 1);
  s.phase = 'SELL';
  s.turn = s.players[0].id;
  s.sellQueue = [s.players[0].id];
  s.players[0].assets = [card(800, 'FUND')];
  assert.throws(() => applyAction(s, 0, { type: 'SELL', cardIds: [800] }), GameError);
  assert.equal(s.players[0].assets.length, 1);
});

test('Rumor: boleh ±2 ke satu sektor, tidak memicu Stock Crash/Split', () => {
  let s = newGame(3, 1);
  s.phase = 'ACTION';
  s.turn = s.players[0].id;
  s.price.KONSUMER = 1;
  s.players[0].assets = [card(810, 'KONSUMER')];
  s.open = [card(811, 'KEUANGAN', { effect: 'RUMOR' })].concat(s.open);
  s = applyAction(s, s.players[0].id, { type: 'TAKE', cardId: 811, mode: 'effect', params: { moves: [{ sector: 'KONSUMER', delta: -2 }] } });
  assert.equal(s.price.KONSUMER, 0); // clamp, bukan crash
  assert.equal(s.players[0].assets.length, 1);
});

test('harga melewati batas bawah -> Stock Crash: saham kembali ke Bank, harga reset 5', () => {
  const s = newGame(3, 1);
  const sec = s.board[0];
  s.price[sec] = 1;
  s.players[0].assets = [card(900, sec), card(901, sec, { split: true }), card(902, 'FUND')];
  setTops(s, { 0: { id: 1, type: 'MOVE', delta: -2 } });
  resolveEconomy(s);
  assert.equal(s.price[sec], 5);
  assert.deepEqual(s.players[0].assets.map((c) => c.kind), ['FUND']);
});

test('harga melewati batas atas -> Stock Split: pemegang dapat token Split, harga 10', () => {
  const s = newGame(3, 1);
  const sec = s.board[0];
  s.price[sec] = 9;
  s.players[0].assets = [card(910, sec), card(911, 'FUND')];
  setTops(s, { 0: { id: 1, type: 'MOVE', delta: 2 } });
  resolveEconomy(s);
  assert.equal(s.price[sec], 10);
  assert.equal(s.players[0].assets[0].split, true);
});

test('Restrukturisasi membatalkan semua efek lain & reset harga ke 5', () => {
  const s = newGame(3, 1);
  SECTORS.forEach((k, i) => { s.price[k] = i * 2 + 1; });
  setTops(s, { 0: { id: 1, type: 'RESTRUCTURE' }, 1: { id: 2, type: 'MOVE', delta: 2 }, 2: { id: 3, type: 'EXTRA_FEE' } });
  s.players[0].assets = [card(700, 'KONSUMER')];
  resolveEconomy(s);
  assert.ok(SECTORS.every((k) => s.price[k] === 5));
  assert.equal(s.players[0].coins, 15); // Extra Fee tidak jalan
  assert.equal(s.round, 2);
});

test('Buyback: harga +1 dulu, lalu semua saham sektor itu dijual (Split x2)', () => {
  const s = newGame(3, 1);
  const sec = s.board[0];
  s.players[0].assets = [card(800, sec), card(801, sec, { split: true }), card(802, 'FUND')];
  setTops(s, { 0: { id: 1, type: 'BUYBACK' } });
  resolveEconomy(s);
  assert.equal(s.price[sec], 6);
  assert.equal(s.players[0].coins, 15 + 6 + 12);
  assert.deepEqual(s.players[0].assets.map((c) => c.id), [802]); // Reksa Dana tidak ikut
});

test('Pajak Jalan = nomor kartu urutan', () => {
  const s = newGame(3, 1);
  setTops(s, { 0: { id: 1, type: 'PAJAK' } });
  const orders = s.players.map((p) => p.order);
  resolveEconomy(s);
  s.players.forEach((p, i) => assert.equal(p.coins, 15 - orders[i]));
});

test('Info Bursa: jual paling akhir, antar pengguna ikut nomor urutan', () => {
  let s = newGame(4, 3);
  s.phase = 'ACTION';
  const ord = [...s.players].sort((a, b) => a.order - b.order);
  ord[0].usedInfo = true; ord[2].usedInfo = true;
  s.turn = ord[3].id;
  s.open = [card(900, 'KONSUMER')];
  s = applyAction(s, ord[3].id, { type: 'TAKE', cardId: 900, mode: 'save' });
  assert.equal(s.phase, 'SELL');
  assert.deepEqual(s.sellQueue, [ord[1].id, ord[3].id, ord[0].id, ord[2].id]);
});

test('hidden info: koin & bid lawan tidak bocor di view', () => {
  const s = newGame(5, 7);
  const v = viewFor(s, 0);
  assert.equal(typeof v.players[0].coins, 'number');
  assert.ok(v.players.slice(1).every((p) => p.coins === null && p.bid === null));
  assert.equal(viewFor(s, -1).players[0].coins, null);
});
