import type { Room } from './rooms';
import { getSupabase } from './supabase';

const TABLE = 'rooms';

/** Revisi baris terakhir yang kita baca/tulis, untuk update optimistik (cegah lost update). */
const revs = new WeakMap<Room, number>();

export async function readRoom(code: string): Promise<Room | null> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select('code, data, rev')
    .eq('code', code)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  const room = data.data as Room;
  room.code = data.code as string;
  revs.set(room, data.rev as number);
  return room;
}

export async function insertRoom(room: Room): Promise<boolean> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .insert({ code: room.code, data: room, rev: 0 })
    .select('rev')
    .single();
  if (error) {
    if (error.code === '23505') return false; // kode sudah dipakai → panggil ulang dengan kode lain
    throw error;
  }
  revs.set(room, data.rev as number);
  return true;
}

/** Simpan perubahan. Return false kalau baris sudah diubah proses lain (rev bentrok). */
export async function saveRoom(room: Room): Promise<boolean> {
  const rev = revs.get(room);
  if (rev === undefined) return insertRoom(room);
  const next = rev + 1;
  const { data, error } = await getSupabase()
    .from(TABLE)
    .update({ data: room, rev: next, updated_at: new Date().toISOString() })
    .eq('code', room.code)
    .eq('rev', rev)
    .select('rev');
  if (error) throw error;
  if (!data?.length) return false;
  revs.set(room, next);
  return true;
}

export async function deleteRoom(code: string): Promise<void> {
  const { error } = await getSupabase().from(TABLE).delete().eq('code', code);
  if (error) throw error;
}

export async function roomExists(code: string): Promise<boolean> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select('code')
    .eq('code', code)
    .maybeSingle();
  if (error) throw error;
  return !!data;
}

export async function deleteRoomsBefore(cutoff: number): Promise<void> {
  const { error } = await getSupabase()
    .from(TABLE)
    .delete()
    .lt('created_at', new Date(cutoff).toISOString());
  if (error) throw error;
}
