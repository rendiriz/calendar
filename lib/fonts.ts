import { Marcellus, Inter } from 'next/font/google';

export const fontSerif = Marcellus({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const fontSans = Inter({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
