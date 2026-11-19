'use client';
import type { CSSProperties, ReactNode } from 'react';
import type { Effect, Kind } from '@/config';
import { EFFECT_META, KIND_META } from '@/lib/meta';
import { IconCoin, KindIcon } from './icons';

export interface CardData {
  id: number;
  kind: Kind;
  effect: Effect;
  fee: number;
  split?: boolean;
}

export const tiltOf = (id: number) => (((id * 37) % 7) - 3) * 0.8;

interface CardProps {
  card: CardData;
  mini?: boolean;
  clickable?: boolean;
  selected?: boolean;
  dim?: boolean;
  disabled?: boolean;
  delay?: number;
  foot?: ReactNode;
  onClick?: () => void;
}

export function PhysicalCard({ card, mini, clickable, selected, dim, disabled, delay = 0, foot, onClick }: CardProps) {
  const meta = KIND_META[card.kind];
  const eff = EFFECT_META[card.effect];
  const cls = ['acard', mini ? 'mini' : '', clickable ? 'clickable' : '', selected ? 'selected' : '', dim ? 'dim' : ''].filter(Boolean).join(' ');
  return (
    <button
      type="button"
      className={cls}
      data-card-id={card.id}
      style={{ '--kc': meta.color, '--tilt': `${tiltOf(card.id)}deg`, animationDelay: `${delay}s` } as CSSProperties}
      disabled={disabled ?? !clickable}
      onClick={onClick}
      aria-pressed={selected}
    >
      {!mini && (
        <>
          <span className="acard-corner tl">{card.id}<KindIcon kind={card.kind} size={9} /></span>
          <span className="acard-corner br">{card.id}<KindIcon kind={card.kind} size={9} /></span>
        </>
      )}
      <span className="acard-band"><KindIcon kind={card.kind} size={mini ? 10 : 14} />{meta.label}</span>
      <span className="acard-art"><KindIcon kind={card.kind} size={mini ? 22 : 46} /></span>
      <span className={`acard-effect ${card.effect === 'NONE' ? 'none' : ''}`}>{eff.label}</span>
      {foot ?? (
        <span className={`acard-fee ${card.fee === 0 ? 'free' : ''}`}>
          <IconCoin size={mini ? 9 : 12} />{card.fee === 0 ? 'gratis' : `fee ${card.fee}`}
        </span>
      )}
      {card.split && <span className="acard-split">×2</span>}
    </button>
  );
}

export function CardBack({ red }: { red?: boolean }) {
  return <div className={`cback ${red ? 'red' : ''}`} />;
}

export function Pile({ count, red, small, label }: { count: number; red?: boolean; small?: boolean; label?: string }) {
  return (
    <div className={`pile ${small ? 'small' : ''}`}>
      {count > 0 ? (
        Array.from({ length: Math.min(count, 3) }).map((_, i) => <CardBack key={i} red={red} />)
      ) : (
        <div className="cback" style={{ opacity: 0.16, boxShadow: 'none' }} />
      )}
      <span className="pile-count">{count}{label ? ` ${label}` : ''}</span>
    </div>
  );
}

export function CoinStack({ coins, pop = 0 }: { coins: number | null; pop?: number }) {
  const hidden = coins === null;
  return (
    <span className={`coins ${hidden ? 'hidden' : ''}`}>
      <span className="coin-stack">
        <span className="disc" />
        {!hidden && (coins ?? 0) > 0 && <span className="disc" />}
        {!hidden && (coins ?? 0) > 4 && <span className="disc" />}
      </span>
      <span key={pop} className={`coin-count ${pop > 0 ? 'pop' : ''}`}>{hidden ? '??' : coins}</span>
    </span>
  );
}