import type { viewFor } from '../engine.ts';
import type { Action } from '../engine.ts';
import type { Difficulty } from './bot.ts';

export type GameView = ReturnType<typeof viewFor>;
export type { Action, Difficulty };

export interface SeatInfo { pid: number; name: string; bot: boolean; difficulty: Difficulty }
export interface RoomPayload {
  code: string;
  started: boolean;
  ended: boolean;
  you: number;
  hostPid: number;
  gamesPlayed: number;
  seats: SeatInfo[];
  view: GameView | null;
}

export interface Session { code: string; token: string; pid: number; name: string }

const key = (code: string) => `stocklab:session:${code.toUpperCase()}`;
export function loadSession(code: string): Session | null {
  try {
    const raw = localStorage.getItem(key(code));
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch { return null; }
}
export function saveSession(s: Session) { localStorage.setItem(key(s.code), JSON.stringify(s)); }
export function clearSession(code: string) { localStorage.removeItem(key(code)); }

async function req<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error ?? `HTTP ${res.status}`);
  return data as T;
}

export const api = {
  create: (name: string) => req<{ code: string; token: string; pid: number }>('/api/rooms', { method: 'POST', body: JSON.stringify({ name }) }),
  solo: (name: string, bots: number, difficulty: Difficulty) => req<{ code: string; token: string; pid: number }>('/api/rooms', { method: 'POST', body: JSON.stringify({ name, solo: { bots, difficulty } }) }),
  join: (code: string, name: string) => req<{ token: string; pid: number; name: string }>(`/api/rooms/${code}/join`, { method: 'POST', body: JSON.stringify({ name }) }),
  state: (code: string, token: string) => req<RoomPayload>(`/api/rooms/${code}/state?token=${encodeURIComponent(token)}`),
  action: (code: string, token: string, action: Action) => req<{ ok: true }>(`/api/rooms/${code}/action`, { method: 'POST', body: JSON.stringify({ token, action }) }),
  start: (code: string, token: string) => req<{ ok: true }>(`/api/rooms/${code}/start`, { method: 'POST', body: JSON.stringify({ token }) }),
  bots: (code: string, token: string, body: { add?: Difficulty; remove?: number }) => req<{ ok: true }>(`/api/rooms/${code}/bots`, { method: 'POST', body: JSON.stringify({ token, ...body }) }),
  restart: (code: string, token: string) => req<{ ok: true }>(`/api/rooms/${code}/restart`, { method: 'POST', body: JSON.stringify({ token }) }),
  skip: (code: string, token: string) => req<{ ok: true }>(`/api/rooms/${code}/skip`, { method: 'POST', body: JSON.stringify({ token }) }),
  leave: (code: string, token: string) => req<{ ok: true }>(`/api/rooms/${code}/leave`, { method: 'POST', body: JSON.stringify({ token }) }),
};