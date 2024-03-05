import Script from 'next/script';
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
      <head>
        {isProduction && (
          <Script id='gtm'>
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T3N838XB');
          `}
          </Script>
        )}
      </head>
      <body className={`${lato.className} ${cinzel.variable}`}>
        {isProduction && (
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-T3N838XB'
              style={{ width: 0, height: 0, display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}
        {children}
        {isProduction && <CookieConsent />}
      </body>
    </html>
  );
}
