/** @type {import('next').NextConfig} */

const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:slug((?!szybkie-i-bezpieczne-pozyczki$)(?!api)(?!image-shape.svg)(?!krk-partners-logo.png).*)',
        destination: '/szybkie-i-bezpieczne-pozyczki',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;