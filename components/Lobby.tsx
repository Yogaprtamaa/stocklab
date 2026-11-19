'use client';
import { useState } from 'react';
import type { RoomPayload } from '@/lib/client';
import { sfx } from '@/lib/sound';
import { IconBot, IconCheck, IconCopy, IconCrown, IconPlay, IconPlus, IconUser, IconX } from './icons';

interface Props {
  payload: RoomPayload;
  onHost: (fn: 'start' | 'restart' | 'skip' | 'leave', extra?: { add?: 'random' | 'smart'; remove?: number }) => Promise<void>;
}

export function Lobby({ payload, onHost }: Props) {
  const [copied, setCopied] = useState(false);
  const isHost = payload.you === payload.hostPid;
  const humans = payload.seats.filter((s) => !s.bot).length;
  const canStart = payload.seats.length >= 3;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(payload.code);
      setCopied(true);
      sfx.tap();
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <div className="lobby-wrap">
      <div className="table-rim">
        <div className="felt" style={{ padding: '28px 20px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="lamp" />

          <div className="code-display" style={{ position: 'relative', zIndex: 2 }}>
            <div className="code-tent">
              <div className="lbl">Kode Room — bagikan ke temanmu</div>
              <div className="code-big">{payload.code}</div>
            </div>
            <div className="code-actions">
              <button className="btn btn-sm" onClick={copy}>
                {copied ? <IconCheck /> : <IconCopy />}{copied ? 'Tersalin' : 'Salin Kode'}
              </button>
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button className="btn btn-sm" onClick={() => { void navigator.share({ title: 'StockLab', text: `Ayo main StockLab! Kode room: ${payload.code}`, url: window.location.href }).catch(() => {}); }}>
                  Bagikan
                </button>
              )}
            </div>
          </div>

          <div className="panel" style={{ position: 'relative', zIndex: 2, background: 'rgba(0,0,0,0.22)', border: '1.5px dashed rgba(244,236,217,0.28)', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)' }}>
            <div className="panel-head" style={{ borderBottomColor: 'rgba(244,236,217,0.18)' }}>
              <span className="panel-title" style={{ color: 'var(--cream-muted)' }}>Meja Permainan</span>
              <span className="chip">{payload.seats.length}/5 kursi</span>
              <div className="spacer" />
              {isHost && <span className="chip chip-gold"><IconCrown size={13} />Host</span>}
            </div>
            <div className="seat-list">
              {payload.seats.map((s) => (
                <div className="seat-row paper-scope" key={s.pid}>
                  <span className="seat-ava" style={{ background: s.bot ? 'rgba(91,74,134,0.12)' : 'rgba(30,111,71,0.12)', color: s.bot ? '#5b4a86' : '#1e6f47' }}>
                    {s.bot ? <IconBot size={19} /> : <IconUser size={19} />}
                  </span>
                  <span className="seat-name">{s.name}{s.pid === payload.you && <span style={{ color: 'var(--ink-faint)', fontWeight: 400 }}> (kamu)</span>}</span>
                  <span className="seat-tags">
                    {s.pid === payload.hostPid && <span className="chip chip-gold"><IconCrown size={12} />Host</span>}
                    {s.bot && <span className="chip chip-violet">{s.difficulty}</span>}
                    {isHost && s.bot && (
                      <button className="icon-btn" style={{ width: 28, height: 28 }} title="Keluarkan bot" aria-label={`Keluarkan ${s.name}`}
                        onClick={() => { sfx.tap(); void onHost('leave', { remove: s.pid }); }}>
                        <IconX size={13} />
                      </button>
                    )}
                  </span>
                </div>
              ))}
              {Array.from({ length: 5 - payload.seats.length }).map((_, i) => (
                <div className="seat-row empty-seat" key={`empty-${i}`}>Kursi kosong — menunggu pemain…</div>
              ))}
            </div>
          </div>

          {isHost ? (
            <div className="tray" style={{ position: 'relative', zIndex: 2 }}>
              <div className="action-panel paper-scope" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="mode-row">
                  <span className="lbl">Isi kursi dengan bot</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-sm" disabled={payload.seats.length >= 5} onClick={() => { sfx.tap(); void onHost('leave', { add: 'random' }); }}>
                      <IconPlus size={13} />Bot Random
                    </button>
                    <button className="btn btn-sm" disabled={payload.seats.length >= 5} onClick={() => { sfx.tap(); void onHost('leave', { add: 'smart' }); }}>
                      <IconPlus size={13} />Bot Smart
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block" disabled={!canStart} onClick={() => void onHost('start')}>
                  <IconPlay />Mulai Game ({payload.seats.length} pemain)
                </button>
                {!canStart && <p style={{ fontSize: 12.5, color: 'var(--ink-faint)', textAlign: 'center' }}>Butuh minimal 3 pemain — undang teman atau tambahkan bot.</p>}
                <button className="btn btn-ghost btn-sm" onClick={() => void onHost('leave')}>Keluar room</button>
              </div>
            </div>
          ) : (
            <div className="panel" style={{ position: 'relative', zIndex: 2, padding: 22, textAlign: 'center', background: 'rgba(0,0,0,0.22)', border: '1.5px dashed rgba(244,236,217,0.28)' }}>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, color: 'var(--cream-muted)', fontSize: 14 }}>
                <span className="pulse-dot" />Menunggu host memulai game…
              </p>
              <p style={{ fontSize: 12.5, color: 'var(--cream-faint)', marginTop: 6 }}>{humans} manusia · {payload.seats.length - humans} bot di meja</p>
              <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }} onClick={() => void onHost('leave')}>Keluar room</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}