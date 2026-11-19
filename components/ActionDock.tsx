'use client';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { IconChevron } from './icons';

interface Props {
  open: boolean;
  onToggle: () => void;
  label: string;
  hint?: string;
  active?: boolean;
  urgent?: boolean;
  children: ReactNode;
}

export function ActionDock({ open, onToggle, label, hint, active, urgent, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => document.documentElement.style.setProperty('--dock-h', `${el.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener('resize', sync);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
      document.documentElement.style.removeProperty('--dock-h');
    };
  }, []);

  return (
    <div ref={ref} className={`action-dock ${open ? 'open' : 'closed'} ${active ? 'active' : ''} ${urgent ? 'urgent' : ''}`}>
      <button type="button" className="dock-handle" onClick={onToggle} aria-expanded={open}>
        <span className="dock-grip" aria-hidden />
        <span className="dock-handle-main">
          <span className="dock-label">{label}</span>
          {hint && <span className="dock-hint">{hint}</span>}
        </span>
        <span className="dock-toggle">
          <span className="dock-toggle-text">{open ? 'Lihat meja' : 'Buka panel'}</span>
          <IconChevron size={15} dir={open ? 'down' : 'up'} />
        </span>
      </button>
      <div className="dock-body">{children}</div>
    </div>
  );
}
