import '@/global/global.scss';
import { locale, themeColor } from '@/global/constants';
import type { Viewport } from 'next';
import { lato, cinzel } from '@/global/fonts';

export const viewport: Viewport = {
  themeColor: themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <body className={`${lato.className} ${cinzel.variable}`}>{children}</body>
    </html>
  );
}
