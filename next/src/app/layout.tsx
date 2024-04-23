import { GoogleTagManager } from '@next/third-parties/google';
import '@/global/global.scss';
import { locale, themeColor } from '@/global/constants';
import { lato, cinzel } from '@/global/fonts';
import CookieConsent from '@/components/_global/CookieConsent';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: themeColor,
};

const isProduction = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale}>
      {isProduction && <GoogleTagManager gtmId="GTM-T3N838XB" />}
      <body className={`${lato.className} ${cinzel.variable}`}>
        {children}
        {isProduction && <CookieConsent />}
      </body>
    </html>
  );
}
