import { applyAction, currentActors, newGame, viewFor, GameError } from '../engine.ts';
import type { Action, GameState } from '../engine.ts';
import { CONFIG } from '../config.ts';
import { autoAction, botCandidates } from './bot.ts';
import type { Difficulty } from './bot.ts';

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
  botTimer: ReturnType<typeof setTimeout> | null;
  gamesPlayed: number;
}

const g = globalThis as unknown as { __stocklabRooms?: Map<string, Room> };
export const rooms: Map<string, Room> = (g.__stocklabRooms ??= new Map());

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const token = () => crypto.randomUUID();
function makeCode(): string {
  for (;;) {
    let c = '';
    for (let i = 0; i < 6; i++) c += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    if (!rooms.has(c)) return c;
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

function sweep() {
  const cutoff = Date.now() - 24 * 3600 * 1000;
  for (const [code, r] of rooms) if (r.createdAt < cutoff) { if (r.botTimer) clearTimeout(r.botTimer); rooms.delete(code); }
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
export function getRoom(code: string): Room {
  sweep();
  const r = rooms.get(code.toUpperCase());
  if (!r) err(404, 'Room tidak ditemukan. Cek lagi kodenya.');
  return r;
}

export function createRoom(name: string): { room: Room; seat: Seat } {
  const room: Room = { code: makeCode(), hostPid: 0, seats: [], state: null, createdAt: Date.now(), botTimer: null, gamesPlayed: 0 };
  const seat: Seat = { pid: 0, name: cleanName(name), token: token(), bot: false, difficulty: 'smart', lastSeen: Date.now() };
  room.seats.push(seat);
  rooms.set(room.code, room);
  return { room, seat };
}

export function addBot(room: Room, difficulty: Difficulty): Seat {
  if (room.state) err(400, 'Game sudah dimulai.');
  if (room.seats.length >= CONFIG.maxPlayers) err(400, 'Room penuh (maks 5 pemain).');
  const pid = room.seats.length;
  const seat: Seat = { pid, name: `Bot ${difficulty === 'smart' ? 'Smart' : 'Random'} ${pid}`, token: token(), bot: true, difficulty, lastSeen: Date.now() };
  room.seats.push(seat);
  return seat;
}

export function joinRoom(code: string, name: string): { room: Room; seat: Seat } {
  const room = getRoom(code);
  if (room.state) err(400, 'Game di room ini sudah dimulai.');
  if (room.seats.length >= CONFIG.maxPlayers) err(400, 'Room penuh (maks 5 pemain).');
  const seat: Seat = { pid: room.seats.length, name: cleanName(name), token: token(), bot: false, difficulty: 'smart', lastSeen: Date.now() };
  room.seats.push(seat);
  return { room, seat };
}

export function startGame(room: Room, tok: unknown): void {
  const seat = seatOf(room, tok);
  if (seat.pid !== room.hostPid) err(403, 'Hanya host yang bisa memulai game.');
  if (room.state && room.state.phase !== 'ENDED') err(400, 'Game sedang berjalan.');
  if (room.seats.length < CONFIG.minPlayers) err(400, 'Butuh minimal 3 pemain. Tambahkan bot atau undang teman.');
  room.state = newGame(room.seats.length, (Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) | 0);
  room.gamesPlayed++;
  scheduleBots(room);
}

export function doAction(room: Room, tok: unknown, action: Action): void {
  const seat = seatOf(room, tok);
  if (!room.state) err(400, 'Game belum dimulai.');
  if (seat.bot) err(403, 'Bot tidak dikendalikan manusia.');
  try {
    room.state = applyAction(room.state, seat.pid, action);
  } catch (e) {
    if (e instanceof GameError) err(400, e.message);
    throw e;
  }
  scheduleBots(room);
}

export function skipTurn(room: Room, tok: unknown): void {
  const seat = seatOf(room, tok);
  if (seat.pid !== room.hostPid) err(403, 'Hanya host yang bisa melewati giliran.');
  const s = room.state;
  if (!s || s.phase === 'ENDED') err(400, 'Tidak ada giliran aktif.');
  const actor = currentActors(s)[0];
  if (actor === undefined) err(400, 'Tidak ada giliran aktif.');
  room.state = applyAction(s, actor, autoAction(s, actor));
  scheduleBots(room);
}

export function leaveRoom(room: Room, tok: unknown): void {
  const seat = seatOf(room, tok);
  if (room.state && room.state.phase !== 'ENDED') err(400, 'Tidak bisa keluar saat game berjalan.');
  const wasHost = seat.pid === room.hostPid;
  room.seats = room.seats.filter((s) => s.pid !== seat.pid);
  if (!room.seats.some((s) => !s.bot)) {
    if (room.botTimer) clearTimeout(room.botTimer);
    rooms.delete(room.code);
    return;
  }
  room.seats.forEach((s, i) => { s.pid = i; });
  if (wasHost) room.hostPid = room.seats.find((s) => !s.bot)!.pid;
  room.state = null;
}

/** Satu timer serial per room; bot bertindak dengan jeda agar manusia bisa mengikuti. */
export function scheduleBots(room: Room): void {
  if (room.botTimer) return; // timer pending sudah membaca state terbaru saat fired
  const s = room.state;
  if (!s || s.phase === 'ENDED') return;
  const actor = currentActors(s)[0];
  if (actor === undefined) return;
  const seat = room.seats.find((x) => x.pid === actor);
  if (!seat?.bot) return;
  room.botTimer = setTimeout(() => {
    room.botTimer = null;
    const st = room.state;
    if (!st || st.phase === 'ENDED') return;
    const pid = currentActors(st)[0];
    const botSeat = room.seats.find((x) => x.pid === pid && x.bot);
    if (!botSeat) return;
    for (const a of botCandidates(st, pid, botSeat.difficulty)) {
      try { room.state = applyAction(st, pid, a); break; } catch (e) { if (!(e instanceof GameError)) throw e; }
    }
    scheduleBots(room);
  }, 850 + Math.random() * 700);
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

export function statePayload(room: Room, tok: unknown) {
  const seat = seatOf(room, tok);
  scheduleBots(room); // safety net: timer hilang setelah restart server / HMR
  const base = lobbyPayload(room, seat.pid);
  if (!room.state) return { ...base, view: null };
  return { ...base, view: viewFor(room.state, seat.pid) };
}