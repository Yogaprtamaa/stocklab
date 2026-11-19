'use client';
import { useEffect, useRef, useState } from 'react';
import type { GameView } from '@/lib/client';
import type { Sector } from '@/config';
import { SECTOR_META } from '@/lib/meta';
import { IconDown, IconUp, KindIcon } from './icons';

export function Board({ view }: { view: GameView }) {
  const prevRef = useRef<Record<string, number> | null>(null);
  const [deltas, setDeltas] = useState<Record<string, number>>({});
  const [flashKey, setFlashKey] = useState(0);

  useEffect(() => {
    const cur: Record<string, number> = { ...view.price, FUND: view.fundPrice };
    const prev = prevRef.current;
    if (prev) {
      const d: Record<string, number> = {};
      let changed = false;
      for (const k of Object.keys(cur)) {
        d[k] = cur[k] - (prev[k] ?? cur[k]);
        if (d[k] !== 0) changed = true;
      }
      if (changed) { setDeltas(d); setFlashKey((x) => x + 1); }
    }
    prevRef.current = cur;
  }, [view.price, view.fundPrice]);

  const cols: (Sector | 'FUND')[] = [view.board[0], view.board[1], 'FUND', view.board[2], view.board[3]];

  return (
    <div className="playmat">
      {cols.map((k) => {
        const isFund = k === 'FUND';
        const color = isFund ? '#b8860b' : SECTOR_META[k as Sector].color;
        const price = isFund ? view.fundPrice : view.price[k as Sector];
        const d = deltas[k] ?? 0;
        const stack = isFund ? 0 : view.stackCounts[k as Sector];
        return (
          <div className={`lane ${isFund ? 'fund' : ''} ${isFund ? '' : stack === 0 ? 'stack-empty' : ''}`} key={k} style={{ '--sc': color } as React.CSSProperties}>
            {!isFund && (
              <span className={`lane-econ ${stack === 0 ? 'empty' : ''}`} title={`${stack} kartu ekonomi tersisa di tumpukan`} aria-label={`${stack} kartu ekonomi tersisa`}>
                <i className="econ-back b1" />
                <i className="econ-back b2" />
                <i className="econ-back b3" />
              </span>
            )}
            <div className="lane-head">
              <KindIcon kind={k} size={15} />
              <span className="lane-name">{isFund ? 'Reksa Dana' : SECTOR_META[k as Sector].label}</span>
              {!isFund && (
                <span className="econ-count" title={`${stack} kartu ekonomi tersisa`}>
                  <KindIcon kind={k} size={8} />{stack}
                </span>
              )}
            </div>
            <div className="lane-price">
              <span key={`${flashKey}-${k}`} className={`n ${d > 0 ? 'flash-up' : d < 0 ? 'flash-down' : ''}`}>{price}</span>
              {d !== 0 && (
                <span className="delta" style={{ color: d > 0 ? 'var(--bull)' : 'var(--bear)' }}>
                  {d > 0 ? <IconUp size={12} /> : <IconDown size={12} />}{Math.abs(d)}
                </span>
              )}
            </div>
            <div className="lane-track">
              <span className="marker" style={{ left: `${price * 10}%` }} />
            </div>
            <div className="lane-scale"><span>0</span><span>5</span><span>10</span></div>
            <div className="lane-foot">
              {isFund ? (
                <span className="lane-note">harga = floor((S2 + S3) ÷ 2)<br />tanpa kartu ekonomi</span>
              ) : (
                <span className="lane-note">kartu ekonomi<br />di balik sektor</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}