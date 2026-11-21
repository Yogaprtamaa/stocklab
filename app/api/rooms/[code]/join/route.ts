import { NextRequest } from 'next/server';
import { joinRoom } from '@/lib/rooms';
import { body, fail, ok } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const b = await body(req);
    const { seat } = await joinRoom(code, String(b.name ?? ''));
    return ok({ token: seat.token, pid: seat.pid, name: seat.name });
  } catch (e) { return fail(e); }
}