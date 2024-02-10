import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Partytown } from '@builder.io/partytown/react';
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

        <Partytown
          debug={false}
          forward={['dataLayer.push']}
        />
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_TRACKING_ID}`}
          async
          type="text/partytown"
        />
        <script
          async
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.PUBLIC_GA_TRACKING_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
