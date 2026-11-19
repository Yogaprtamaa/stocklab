'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { api, clearSession, loadSession, saveSession } from '@/lib/client';
import type { Action, RoomPayload, Session } from '@/lib/client';
import { sfx } from '@/lib/sound';
import { SoundToggle } from '@/components/SoundToggle';
import { IconHome, IconLogo } from '@/components/icons';
import { Lobby } from '@/components/Lobby';
import { Game } from '@/components/Game';

export default function RoomPage() {
  const { code: rawCode } = useParams<{ code: string }>();
  const code = (rawCode ?? '').toUpperCase();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [payload, setPayload] = useState<RoomPayload | null>(null);
  const [fatal, setFatal] = useState('');
  const [toast, setToast] = useState<{ msg: string; kind: 'err' | 'ok' } | null>(null);
  const [joinName, setJoinName] = useState('');
  const [joining, setJoining] = useState(false);
  const prevRef = useRef<{ round: number; phase: string; turn: number | null; coins: number | null; ended: boolean } | null>(null);
  const sendingRef = useRef(false);

  const notify = useCallback((msg: string, kind: 'err' | 'ok' = 'err') => {
    setToast({ msg, kind });
    if (kind === 'err') sfx.error();
  }, []);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3600);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const s = loadSession(code);
    setSession(s);
    try { setJoinName(localStorage.getItem('stocklab:name') ?? ''); } catch {}
    setReady(true);
  }, [code]);

  const refresh = useCallback(async (s: Session) => {
    try {
      const p = await api.state(s.code, s.token);
      setPayload(p);
      setFatal('');
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Koneksi gagal.';
      if (/tidak ditemukan|tidak valid/i.test(msg)) {
        clearSession(code);
        setSession(null);
        setPayload(null);
        setFatal(msg);
      }
    }
  }, [code]);

  useEffect(() => {
    if (!session) return;
    void refresh(session);
    const t = setInterval(() => void refresh(session), 900);
    return () => clearInterval(t);
  }, [session, refresh]);

  // sound feedback dari perubahan state
  useEffect(() => {
    const v = payload?.view;
    if (!v || !session) return;
    const me = v.players.find((p) => p.id === session.pid);
    const cur = { round: v.round, phase: v.phase, turn: v.turn, coins: me?.coins ?? null, ended: v.phase === 'ENDED' };
    const prev = prevRef.current;
    prevRef.current = cur;
    if (!prev) return;
    if (cur.ended && !prev.ended) {
      if (v.result?.winner === session.pid) sfx.win(); else sfx.lose();
    } else if (cur.round !== prev.round && !cur.ended) sfx.reveal();
    else if (cur.turn === session.pid && prev.turn !== session.pid && !cur.ended) sfx.turn();
    else if (cur.coins !== null && prev.coins !== null && cur.coins > prev.coins && cur.phase === prev.phase) sfx.coin();
  }, [payload, session]);

  const send = useCallback(async (action: Action) => {
    if (!session || sendingRef.current) return;
    sendingRef.current = true;
    try {
      await api.action(session.code, session.token, action);
      await refresh(session);
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Aksi gagal.');
    } finally {
      sendingRef.current = false;
    }
  }, [session, refresh, notify]);

  const hostCall = useCallback(async (fn: 'start' | 'restart' | 'skip' | 'leave', extra?: { add?: 'random' | 'smart'; remove?: number }) => {
    if (!session) return;
    try {
      if (extra) {
        await api.bots(session.code, session.token, extra);
        await refresh(session);
        return;
      }
      await api[fn](session.code, session.token);
      if (fn === 'leave') { clearSession(code); router.push('/'); return; }
      if (fn === 'start' || fn === 'restart') sfx.start();
      await refresh(session);
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Gagal.');
    }
  }, [session, refresh, notify, code, router]);

  const joinHere = async () => {
    setJoining(true);
    try {
      const r = await api.join(code, joinName);
      const s: Session = { code, token: r.token, pid: r.pid, name: r.name };
      saveSession(s);
      try { localStorage.setItem('stocklab:name', joinName); } catch {}
      setSession(s);
      setFatal('');
      sfx.start();
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Gagal bergabung.');
    } finally { setJoining(false); }
  };

  if (!ready) return null;

  return (
    <>
      <header className="topbar">
        <div className="shell topbar-in">
          <a className="brand" href="/"><IconLogo size={22} />STOCK<b>LAB</b></a>
          {payload && <span className="chip chip-gold mono">{payload.code}</span>}
          <div className="spacer" />
          <SoundToggle />
          <button className="icon-btn" title="Kembali ke beranda" aria-label="Kembali ke beranda" onClick={() => router.push('/')}><IconHome /></button>
        </div>
      </header>

      <main className="shell">
        {!session ? (
          <div className="join-wrap">
            <div className="table-rim">
              <div className="felt" style={{ padding: 18 }}>
                <div className="lamp" />
                <div className="action-panel paper-scope" style={{ position: 'relative', zIndex: 2 }}>
                  <h2 className="serif" style={{ fontSize: 23, fontWeight: 900, marginBottom: 6 }}>Gabung ke Room {code}</h2>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 18 }}>
                    {fatal || 'Masukkan namamu untuk duduk di meja ini.'}
                  </p>
                  <div className="field" style={{ marginBottom: 14 }}>
                    <label htmlFor="room-join-name">Nama kamu</label>
                    <input id="room-join-name" className="input" value={joinName} maxLength={16} placeholder="Trader"
                      onChange={(e) => setJoinName(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') void joinHere(); }} />
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" disabled={joining} onClick={joinHere}>
                    {joining ? 'Bergabung…' : 'Gabung Sekarang'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : !payload ? (
          <div className="center-msg"><span className="spin"><IconLogo size={28} /></span><p style={{ marginTop: 12 }}>Menghubungkan ke room…</p></div>
        ) : !payload.started && !payload.ended ? (
          <Lobby payload={payload} onHost={hostCall} />
        ) : (
          <Game payload={payload} session={session} onAction={send} onHost={hostCall} />
        )}
      </main>

      {toast && <div className={`toast ${toast.kind}`} role="alert">{toast.msg}</div>}
    </>
  );
}