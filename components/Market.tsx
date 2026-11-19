'use client';
import type { CSSProperties } from 'react';
import type { EconCard } from '@/engine';
import type { Sector } from '@/config';
import { ECON_LABEL, SECTOR_META, econDetail, econTone } from '@/lib/meta';
import { IconCheck, IconEye, IconX } from './icons';
import { KindIcon } from './icons';

type Reveal = { sector: Sector; card: EconCard };

function econGlyph(card: EconCard): string {
  switch (card.type) {
    case 'MOVE': return (card.delta ?? 0) > 0 ? '↑' : (card.delta ?? 0) < 0 ? '↓' : '→';
    case 'BOOM': return '⇈';
    case 'CRASH': return '⇊';
    case 'SPLIT': return '×2';
    case 'DIVIDEND': return '◉';
    case 'RIGHT_ISSUE': return '↺';
    case 'EXTRA_FEE': return '¤';
    case 'PAJAK': return '⚖';
    case 'BUYBACK': return '↩';
    case 'RESESI': return '▼▼';
    case 'STIMULUS': return '▲▲';
    case 'RESTRUCTURE': return '✦';
  }
}

export function EconomyReveal({ reveals, round, onClose }: { reveals: Reveal[]; round: number; onClose: () => void }) {
  return (
    <div className="econ-stage" role="dialog" aria-modal="true" aria-label={`Kartu ekonomi ronde ${round}`} onClick={onClose}>
      <div className="econ-stage-inner" onClick={(e) => e.stopPropagation()}>
        <div className="econ-stage-head">
          <span className="econ-kicker">BANKER MEMBUKA KARTU EKONOMI</span>
          <h3>Ronde {round}</h3>
          <p>Pasar bergerak. Kartu ungu dieksekusi lebih dulu.</p>
        </div>
        <div className="econ-cards">
          {reveals.map((r, i) => {
            const tone = econTone(r.card);
            return (
              <div key={r.sector} className={`econ-flip tone-${tone}`}
                style={{ '--sc': SECTOR_META[r.sector].color, '--i': i } as CSSProperties}>
                <div className="econ-flip-inner">
                  <div className="econ-face econ-face-back"><span>STOCKLAB</span></div>
                  <div className="econ-face econ-face-front">
                    <span className="ef-sector"><KindIcon kind={r.sector} size={13} />{SECTOR_META[r.sector].label}</span>
                    <span className="ef-glyph" aria-hidden>{econGlyph(r.card)}</span>
                    <span className={`ef-type${ECON_LABEL[r.card.type].length > 11 ? ' ef-type-sm' : ''}`}>{ECON_LABEL[r.card.type]}</span>
                    <span className={`ef-move tone-${tone}`}>{econDetail(r.card)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="econ-stage-actions">
          <button className="btn btn-primary" onClick={onClose}><IconCheck />Lanjut ke ronde {round + 1}</button>
          <span className="econ-hint">Ketuk di mana saja untuk menutup</span>
        </div>
      </div>
    </div>
  );
}

export function MarketTape({ log, round, rounds, hasEconomy, onHistory, onEconomy }: {
  log: string[];
  round: number;
  rounds: number;
  hasEconomy: boolean;
  onHistory: () => void;
  onEconomy: () => void;
}) {
  const latest = log[log.length - 1] ?? 'Meja siap.';
  return (
    <div className="market-tape">
      <span className="tape-title"><IconEye size={12} />Catatan Bursa</span>
      <span className="tape-round">R{Math.min(round, rounds)}/{rounds}</span>
      <span className="tape-now" title={latest}>{latest}</span>
      <div className="spacer" />
      {hasEconomy && (
        <button type="button" className="tape-btn tape-btn-gold" onClick={onEconomy}>
          <IconEye size={12} />Ekonomi
        </button>
      )}
      <button type="button" className="tape-btn" onClick={onHistory}>Riwayat</button>
    </div>
  );
}

export function Ledger({ log, round, rounds, onClose }: { log: string[]; round: number; rounds: number; onClose: () => void }) {
  return (
    <div className="ledger-stage" role="dialog" aria-modal="true" aria-label="Riwayat catatan bursa" onClick={onClose}>
      <div className="ledger-sheet paper-scope" onClick={(e) => e.stopPropagation()}>
        <div className="ledger-head">
          <span className="panel-title">Catatan Bursa</span>
          <div className="stamps">
            {Array.from({ length: rounds }).map((_, i) => (
              <span key={i} className={`stamp ${i + 1 < round ? 'done' : i + 1 === round ? 'now' : ''}`}>{i + 1}</span>
            ))}
          </div>
          <button className="icon-btn" style={{ width: 30, height: 30 }} aria-label="Tutup catatan" onClick={onClose}><IconX size={14} /></button>
        </div>
        <div className="ledger-log">
          {log.map((l, i) => (
            <div key={i} className={`log-line ${l.startsWith('Ronde') ? 'round' : l.startsWith('Ekonomi') ? 'econ' : l === 'Game selesai' ? 'end' : ''}`}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
