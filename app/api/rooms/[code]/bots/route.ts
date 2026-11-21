import { NextRequest } from 'next/server';
import { addBot, getRoom, removeBot, requireHost } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const b = await body(req);
    const room = await getRoom(code);
    requireHost(room, b.token);
    if (b.add) await addBot(room, b.add === 'random' ? 'random' : 'smart');
    if (typeof b.remove === 'number') await removeBot(room, b.remove);
    return ok({ ok: true });
  } catch (e) { return fail(e); }
}
