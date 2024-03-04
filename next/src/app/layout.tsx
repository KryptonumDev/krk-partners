import '@/global/global.scss';
import { locale, themeColor } from '@/global/constants';
import { lato, cinzel } from '@/global/fonts';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <body className={`${lato.className} ${cinzel.variable}`}>
        {children}
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}
