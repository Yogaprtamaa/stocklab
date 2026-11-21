-- StockLab: penyimpanan room + state game.
-- Jalankan di Supabase SQL Editor, atau: psql "$DATABASE_URL" -f supabase/schema.sql

create table if not exists public.rooms (
  code       text primary key,
  data       jsonb not null,
  rev        bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists rooms_created_at_idx on public.rooms (created_at);

-- RLS aktif tanpa policy: hanya secret/service key (server) yang bisa akses.
alter table public.rooms enable row level security;

-- Server memakai secret/service key.
grant select, insert, update, delete on public.rooms to service_role;
