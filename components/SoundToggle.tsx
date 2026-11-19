'use client';
import { useEffect, useState } from 'react';
import { isMuted, setMuted, sfx } from '@/lib/sound';
import { IconMute, IconSound } from './icons';

export function SoundToggle() {
  const [muted, setM] = useState(false);
  useEffect(() => { setM(isMuted()); }, []);
  return (
    <button
      className={`icon-btn ${muted ? '' : 'on'}`}
      title={muted ? 'Nyalakan suara' : 'Matikan suara'}
      aria-label={muted ? 'Nyalakan suara' : 'Matikan suara'}
      onClick={() => { const m = !muted; setM(m); setMuted(m); if (!m) sfx.tap(); }}
    >
      {muted ? <IconMute /> : <IconSound />}
    </button>
  );
}