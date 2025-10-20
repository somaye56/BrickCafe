/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.rhinomenu.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
