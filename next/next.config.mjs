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
        source: '/',
        destination: '/szybkie-i-bezpieczne-pozyczki',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;