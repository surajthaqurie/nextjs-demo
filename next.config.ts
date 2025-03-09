import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {},
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: '192.168.110.76', port: '4001' },
      { protocol: 'https', hostname: 'utfs.io', port: '' },
    ],
  },
};

export default nextConfig;
