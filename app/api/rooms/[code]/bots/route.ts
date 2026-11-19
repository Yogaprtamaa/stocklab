import { NextRequest } from 'next/server';
import { addBot, ApiError, getRoom, requireHost } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const b = await body(req);
    const room = getRoom(code);
    requireHost(room, b.token);
    if (room.state && room.state.phase !== 'ENDED') throw new ApiError(400, 'Game sedang berjalan.');
    if (b.add) addBot(room, b.add === 'random' ? 'random' : 'smart');
    if (typeof b.remove === 'number') {
      const target = room.seats.find((s) => s.pid === b.remove);
      if (!target?.bot) throw new ApiError(400, 'Hanya bot yang bisa dikeluarkan.');
      room.seats = room.seats.filter((s) => s.pid !== b.remove);
      room.seats.forEach((s, i) => { s.pid = i; });
      if (room.hostPid >= room.seats.length) room.hostPid = 0;
    }
    return ok({ ok: true });
  } catch (e) { return fail(e); }
}