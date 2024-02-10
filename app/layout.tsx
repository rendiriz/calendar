import '@/styles/globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { fontSerif, fontSans } from '@/lib/fonts';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Kalender — Rendi Riz',
  description: 'Kalender lengkap beserta libur nasional.',
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSerif.variable,
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
