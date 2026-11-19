import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, IBM_Plex_Mono, Fraunces } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' });
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', weight: 'variable' });

export const metadata: Metadata = {
  title: 'StockLab — Permainan Pasar Saham',
  description: 'Bid, draft kartu, jual saham, dan baca kartu ekonomi. Kalahkan bot atau temanmu lewat room kode unik. 6 ronde, koin terbanyak menang.',
};

export const viewport: Viewport = {
  themeColor: '#33210f',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}