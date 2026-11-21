import { applyAction, currentActors, newGame, viewFor, GameError } from '../engine.ts';
import type { Action, GameState } from '../engine.ts';
import { CONFIG } from '../config.ts';
import { autoAction, botCandidates } from './bot.ts';
import type { Difficulty } from './bot.ts';
import {
  deleteRoom, deleteRoomsBefore, insertRoom, readRoom, roomExists, saveRoom,
} from './roomStore.ts';

export interface Seat {
  pid: number;
  name: string;
  token: string;
  bot: boolean;
  difficulty: Difficulty;
  lastSeen: number;
}
export interface Room {
  code: string;
  hostPid: number;
  seats: Seat[];
  state: GameState | null;
  createdAt: number;
  /** Kapan bot berikutnya boleh jalan (epoch ms). Disimpan agar jalan lintas instance. */
  botNextAt?: number;
  gamesPlayed: number;
}

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const token = () => crypto.randomUUID();

/** Jeda antar langkah bot; client polling tiap ~900ms. */
const BOT_DELAY = 800;

async function makeCode(): Promise<string> {
  for (;;) {
    let c = '';
    for (let i = 0; i < 6; i++) c += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    if (!(await roomExists(c))) return c;
  }
}

export class ApiError extends Error {
  constructor(public status: number, message: string) { super(message); }
}
function err(status: number, m: string): never { throw new ApiError(status, m); }

export function cleanName(raw: unknown): string {
  const n = String(raw ?? '').trim().slice(0, 16);
  return n || 'Trader';
}

function seatOf(room: Room, tok: unknown): Seat {
  const s = room.seats.find((x) => x.token === tok);
  if (!s) err(403, 'Sesi tidak valid. Gabung ulang ke room.');
  s.lastSeen = Date.now();
  return s;
}
export function requireHost(room: Room, tok: unknown): Seat {
  const s = seatOf(room, tok);
  if (s.pid !== room.hostPid) err(403, 'Hanya host yang bisa melakukan ini.');
  return s;
}

/** Tulis room; bentrok revisi berarti instance lain sudah mengubah state. */
async function commit(room: Room): Promise<void> {
  if (!(await saveRoom(room))) err(409, 'State room berubah. Coba lagi.');
}

async function sweep(): Promise<void> {
  try { await deleteRoomsBefore(Date.now() - 24 * 3600 * 1000); }
  catch (e) { console.error('Gagal membersihkan room lama:', e); }
}

export async function getRoom(code: string): Promise<Room> {
  const r = await readRoom(code.toUpperCase());
  if (!r) err(404, 'Room tidak ditemukan. Cek lagi kodenya.');
  return r;
}

export async function createRoom(name: string): Promise<{ room: Room; seat: Seat }> {
  await sweep();
  for (;;) {
    const room: Room = {
      code: await makeCode(), hostPid: 0, seats: [], state: null,
      createdAt: Date.now(), gamesPlayed: 0,
    };
    const seat: Seat = { pid: 0, name: cleanName(name), token: token(), bot: false, difficulty: 'smart', lastSeen: Date.now() };
    room.seats.push(seat);
    if (await insertRoom(room)) return { room, seat };
  }
}

export async function addBot(room: Room, difficulty: Difficulty): Promise<Seat> {
  if (room.state) err(400, 'Game sudah dimulai.');
  if (room.seats.length >= CONFIG.maxPlayers) err(400, 'Room penuh (maks 5 pemain).');
  const pid = room.seats.length;
  const seat: Seat = { pid, name: `Bot ${difficulty === 'smart' ? 'Smart' : 'Random'} ${pid}`, token: token(), bot: true, difficulty, lastSeen: Date.now() };
  room.seats.push(seat);
  await commit(room);
  return seat;
}

export async function removeBot(room: Room, pid: number): Promise<void> {
  if (room.state && room.state.phase !== 'ENDED') err(400, 'Game sedang berjalan.');
  const target = room.seats.find((s) => s.pid === pid);
  if (!target?.bot) err(400, 'Hanya bot yang bisa dikeluarkan.');
  room.seats = room.seats.filter((s) => s.pid !== pid);
  room.seats.forEach((s, i) => { s.pid = i; });
  if (room.hostPid >= room.seats.length) room.hostPid = 0;
  await commit(room);
}

export async function joinRoom(code: string, name: string): Promise<{ room: Room; seat: Seat }> {
  const room = await getRoom(code);
  if (room.state) err(400, 'Game di room ini sudah dimulai.');
  if (room.seats.length >= CONFIG.maxPlayers) err(400, 'Room penuh (maks 5 pemain).');
  const seat: Seat = { pid: room.seats.length, name: cleanName(name), token: token(), bot: false, difficulty: 'smart', lastSeen: Date.now() };
  room.seats.push(seat);
  await commit(room);
  return { room, seat };
}

export async function startGame(room: Room, tok: unknown): Promise<void> {
  const seat = seatOf(room, tok);
  if (seat.pid !== room.hostPid) err(403, 'Hanya host yang bisa memulai game.');
  if (room.state && room.state.phase !== 'ENDED') err(400, 'Game sedang berjalan.');
  if (room.seats.length < CONFIG.minPlayers) err(400, 'Butuh minimal 3 pemain. Tambahkan bot atau undang teman.');
  room.state = newGame(room.seats.length, (Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) | 0);
  room.gamesPlayed++;
  armBot(room);
  await commit(room);
}

export async function doAction(room: Room, tok: unknown, action: Action): Promise<void> {
  const seat = seatOf(room, tok);
  if (!room.state) err(400, 'Game belum dimulai.');
  if (seat.bot) err(403, 'Bot tidak dikendalikan manusia.');
  try {
    room.state = applyAction(room.state, seat.pid, action);
  } catch (e) {
    if (e instanceof GameError) err(400, e.message);
    throw e;
  }
  armBot(room);
  await commit(room);
}

export async function skipTurn(room: Room, tok: unknown): Promise<void> {
  const seat = seatOf(room, tok);
  if (seat.pid !== room.hostPid) err(403, 'Hanya host yang bisa melewati giliran.');
  const s = room.state;
  if (!s || s.phase === 'ENDED') err(400, 'Tidak ada giliran aktif.');
  const actor = currentActors(s)[0];
  if (actor === undefined) err(400, 'Tidak ada giliran aktif.');
  room.state = applyAction(s, actor, autoAction(s, actor));
  armBot(room);
  await commit(room);
}

export async function leaveRoom(room: Room, tok: unknown): Promise<void> {
  const seat = seatOf(room, tok);
  if (room.state && room.state.phase !== 'ENDED') err(400, 'Tidak bisa keluar saat game berjalan.');
  const wasHost = seat.pid === room.hostPid;
  room.seats = room.seats.filter((s) => s.pid !== seat.pid);
  if (!room.seats.some((s) => !s.bot)) {
    await deleteRoom(room.code);
    return;
  }
  room.seats.forEach((s, i) => { s.pid = i; });
  if (wasHost) room.hostPid = room.seats.find((s) => !s.bot)!.pid;
  room.state = null;
  await commit(room);
}

function currentBot(room: Room): Seat | undefined {
  const s = room.state;
  if (!s || s.phase === 'ENDED') return undefined;
  const pid = currentActors(s)[0];
  if (pid === undefined) return undefined;
  const seat = room.seats.find((x) => x.pid === pid);
  return seat?.bot ? seat : undefined;
}

function armBot(room: Room): void {
  room.botNextAt = currentBot(room) ? Date.now() + BOT_DELAY : undefined;
}

/**
 * Majukan satu langkah bot yang sudah jatuh tempo. Dipanggil dari polling state
 * agar bot tetap jalan walau server di-restart atau berjalan di banyak instance.
 */
export async function advanceBotIfDue(room: Room): Promise<void> {
  const seat = currentBot(room);
  if (!seat) {
    if (room.botNextAt !== undefined) { room.botNextAt = undefined; await saveRoom(room); }
    return;
  }
  if (room.botNextAt === undefined) {
    room.botNextAt = Date.now() + BOT_DELAY;
    await saveRoom(room);
    return;
  }
  if (Date.now() < room.botNextAt) return;

  const s = room.state!;
  for (const a of botCandidates(s, seat.pid, seat.difficulty)) {
    try { room.state = applyAction(s, seat.pid, a); break; } catch (e) { if (!(e instanceof GameError)) throw e; }
  }
  armBot(room);
  // Bentrok berarti instance lain sudah memajukan bot; payload akan segar di polling berikutnya.
  await saveRoom(room);
}

export function lobbyPayload(room: Room, youPid: number) {
  return {
    code: room.code,
    started: !!room.state && room.state.phase !== 'ENDED',
    ended: room.state?.phase === 'ENDED',
    you: youPid,
    hostPid: room.hostPid,
    gamesPlayed: room.gamesPlayed,
    seats: room.seats.map((s) => ({ pid: s.pid, name: s.name, bot: s.bot, difficulty: s.difficulty })),
  };
}

export async function statePayload(room: Room, tok: unknown) {
  const seat = seatOf(room, tok);
  await advanceBotIfDue(room);
  const base = lobbyPayload(room, seat.pid);
  if (!room.state) return { ...base, view: null };
  return { ...base, view: viewFor(room.state, seat.pid) };
}
