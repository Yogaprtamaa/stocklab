import { NextRequest, NextResponse } from 'next/server';
import { ApiError } from './rooms.ts';

export function ok(data: unknown) { return NextResponse.json(data); }
export function fail(e: unknown) {
  if (e instanceof ApiError) return NextResponse.json({ error: e.message }, { status: e.status });
  console.error(e);
  return NextResponse.json({ error: 'Terjadi kesalahan server.' }, { status: 500 });
}
export async function body(req: NextRequest): Promise<Record<string, unknown>> {
  try { return (await req.json()) as Record<string, unknown>; } catch { return {}; }
}