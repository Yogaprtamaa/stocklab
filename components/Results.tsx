'use client';
import type { GameView, SeatInfo } from '@/lib/client';
import { sfx } from '@/lib/sound';
import { IconCrown, IconHome, IconPlay } from './icons';

interface Props {
  view: GameView;
  seats: SeatInfo[];
  you: number;
  isHost: boolean;
  onRestart: () => void;
  onHome: () => void;
}

export function Results({ view, seats, you, isHost, onRestart, onHome }: Props) {
  const r = view.result;
  if (!r) return null;
  const nameOf = (pid: number) => seats.find((s) => s.pid === pid)?.name ?? `P${pid}`;
  const won = r.winner === you;
  const debtOf = (pid: number) => view.players.find((p) => p.id === pid)?.debt ?? 0;

  return (
    <div className="results-overlay">
      <div className="panel results-card paper-scope">
        <span className="results-crown"><IconCrown size={30} /></span>
        <h2 className="results-title">{won ? 'Kamu menang!' : `${nameOf(r.winner)} menang!`}</h2>
        <p className="results-sub">
          {won ? 'Bursa berpihak padamu. Koin terbanyak setelah likuidasi.' : ' Likuidasi selesai — begini klasemen akhirnya.'}
        </p>
        <div className="score-list">
          {r.scores.map((s, i) => (
            <div className={`score-row ${i === 0 ? 'winner' : ''}`} key={s.id} style={{ animationDelay: `${0.08 * i}s` }}>
              <span className="score-rank">{i + 1}</span>
              <span>
                <span className="score-name">{nameOf(s.id)}{s.id === you ? ' (kamu)' : ''}</span>
                <div className="score-detail">urutan {s.order} · {debtOf(s.id) > 0 ? `utang ${debtOf(s.id)} × −7 = −${debtOf(s.id) * 7}` : 'tanpa utang'}</div>
              </span>
              <span className="score-total">{s.total}</span>
            </div>
          ))}
        </div>
        <div className="results-actions">
          {isHost ? (
            <button className="btn btn-primary btn-lg" onClick={() => { sfx.start(); onRestart(); }}><IconPlay />Main Lagi</button>
          ) : (
            <span className="chip"><span className="pulse-dot" />Menunggu host memulai ulang…</span>
          )}
          <button className="btn btn-lg" onClick={onHome}><IconHome />Beranda</button>
        </div>
      </div>
    </div>
  );
}