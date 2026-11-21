import { NextRequest } from 'next/server';
import { getRoom, statePayload } from '@/lib/rooms';
import { fail, ok } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  try {
    const { code } = await params;
    const room = await getRoom(code);
    const token = req.nextUrl.searchParams.get('token');
    return ok(await statePayload(room, token));
  } catch (e) { return fail(e); }
}