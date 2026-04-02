/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the 'experimental.typedRoutes' warning from your logs
  typedRoutes: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Explicitly configure webpack for path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
      '@/components': require('path').resolve(__dirname, 'components'),
      '@/lib': require('path').resolve(__dirname, 'lib'),
      '@/contexts': require('path').resolve(__dirname, 'contexts'),
    };
    return config;
  },
};

module.exports = nextConfig;
