import { NextRequest } from 'next/server';
import { ApiError, getRoom, startGame } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const b = await body(req);
    const room = await getRoom(code);
    if (!room.state || room.state.phase !== 'ENDED') throw new ApiError(400, 'Game belum selesai.');
    await startGame(room, b.token);
    return ok({ ok: true });
  } catch (e) { return fail(e); }
}