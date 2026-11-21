import { NextRequest } from 'next/server';
import { doAction, getRoom } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';
import type { Action } from '@/engine';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const b = await body(req);
    await doAction(await getRoom(code), b.token, b.action as Action);
    return ok({ ok: true });
  } catch (e) { return fail(e); }
}