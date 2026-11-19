import type { Kind } from '@/config';

type P = { size?: number; className?: string };
const svg = (size: number, className?: string) => ({
  width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  className, 'aria-hidden': true,
});

export const IconLogo = ({ size = 24, className }: P) => (
  <svg {...svg(size, className)}>
    <path d="M4 20V10M4 6v2M9 20v-6M9 8v4M14 20V5M14 15v3M19 20v-9M19 7v2" strokeWidth="2.2" />
  </svg>
);
export const IconCoin = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}>
    <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5v9M9.5 9.8c0-1.2 1.1-1.8 2.5-1.8s2.5.6 2.5 1.7c0 2.6-5 1.7-5 4.3 0 1.1 1.1 1.8 2.5 1.8s2.5-.6 2.5-1.8" strokeWidth="1.5" />
  </svg>
);
export const IconUp = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
);
export const IconDown = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
);
export const IconCopy = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);
export const IconCheck = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M4 12.5l5 5L20 6.5" /></svg>
);
export const IconX = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const IconPlus = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconMinus = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M5 12h14" /></svg>
);
export const IconPlay = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M7 4.5l13 7.5-13 7.5z" fill="currentColor" stroke="none" /></svg>
);
export const IconSkip = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M5 4.5l10 7.5-10 7.5z" fill="currentColor" stroke="none" /><path d="M19 5v14" strokeWidth="2.2" /></svg>
);
export const IconHome = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" /></svg>
);
export const IconSound = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></svg>
);
export const IconMute = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M17 9l5 6M22 9l-5 6" /></svg>
);
export const IconBot = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><rect x="4" y="8" width="16" height="11" rx="2.5" /><path d="M12 8V4.5M12 4.5a1.2 1.2 0 1 0-.01 0" /><circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" /><path d="M9.5 16.5h5" /></svg>
);
export const IconUser = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c1.2-3.5 4-5 7.5-5s6.3 1.5 7.5 5" /></svg>
);
export const IconCrown = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-1.5 11h-15z" /></svg>
);
export const IconEye = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="2.8" /></svg>
);
export const IconDebt = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></svg>
);
export const IconClock = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const IconChevron = ({ size = 16, className, dir = 'down' }: P & { dir?: 'up' | 'down' }) => (
  <svg {...svg(size, className)} style={dir === 'up' ? { transform: 'rotate(180deg)' } : undefined}><path d="M6 9l6 6 6-6" /></svg>
);
export const IconCards = ({ size = 16, className }: P) => (
  <svg {...svg(size, className)}><rect x="3" y="6" width="12" height="16" rx="2" /><path d="M8 3h9a2 2 0 0 1 2 2v11" /></svg>
);

export const KindIcon = ({ kind, size = 18, className }: P & { kind: Kind }) => {
  const p = svg(size, className);
  switch (kind) {
    case 'KONSUMER': return <svg {...p}><path d="M4 6h2l2.2 10h9.6L20 8H7" /><circle cx="9.5" cy="19" r="1.4" /><circle cx="16.5" cy="19" r="1.4" /></svg>;
    case 'KEUANGAN': return <svg {...p}><path d="M3 9.5L12 4l9 5.5M4.5 9.5V18M9.5 9.5V18M14.5 9.5V18M19.5 9.5V18M3 20h18" /></svg>;
    case 'AGRIKULTUR': return <svg {...p}><path d="M12 21V9M12 9c0-3 2-5 5-5 0 3-2 5-5 5zM12 13c0-3-2-5-5-5 0 3 2 5 5 5zM12 17c0-3 2-5 5-5 0 3-2 5-5 5z" /></svg>;
    case 'TAMBANG': return <svg {...p}><path d="M14 4l6 6M12 6l6 6M13 5l-8.5 8.5a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0L17 9M3 21l4-4" /></svg>;
    case 'FUND': return <svg {...p}><path d="M12 3v9h9a9 9 0 1 1-9-9z" /><path d="M15 3.5A9 9 0 0 1 20.5 9H15z" /></svg>;
  }
};