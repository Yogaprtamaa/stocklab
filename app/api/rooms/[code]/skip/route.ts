import { NextRequest } from 'next/server';
import { getRoom, skipTurn } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const b = await body(req);
    await skipTurn(await getRoom(code), b.token);
    return ok({ ok: true });
  } catch (e) { return fail(e); }
}