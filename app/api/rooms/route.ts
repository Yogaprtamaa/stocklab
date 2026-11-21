import { NextRequest } from 'next/server';
import { addBot, createRoom, startGame } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';
import type { Difficulty } from '@/lib/bot';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const b = await body(req);
    const { room, seat } = await createRoom(String(b.name ?? ''));
    const solo = b.solo as { bots?: number; difficulty?: Difficulty } | undefined;
    if (solo) {
      const n = Math.max(2, Math.min(4, Number(solo.bots) || 3));
      const d: Difficulty = solo.difficulty === 'random' ? 'random' : 'smart';
      for (let i = 0; i < n; i++) await addBot(room, d);
      await startGame(room, seat.token);
    }
    return ok({ code: room.code, token: seat.token, pid: seat.pid });
  } catch (e) { return fail(e); }
}