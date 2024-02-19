import { Lato, Cinzel } from 'next/font/google';

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const cinzel = Cinzel({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});
