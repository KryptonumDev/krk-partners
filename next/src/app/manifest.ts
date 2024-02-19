import type { MetadataRoute } from 'next';
import { backgroundColor, themeColor } from '@/global/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KRK Partners',
    short_name: 'KRK Partners',
    description: 'Szybkie i bezpieczne pożyczki nawet do 5 000 000 zł',
    start_url: '/',
    display: 'standalone',
    background_color: backgroundColor,
    theme_color: themeColor,
    icons: [
      {
        src: '/krk-partners-logo.png',
        type: 'image/png',
      },
    ],
  };
}
