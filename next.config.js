/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the 'experimental.typedRoutes' warning from your logs
  typedRoutes: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure proper asset prefix for Railway
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;
