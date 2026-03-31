/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This ensures TypeScript paths are properly resolved
    tsconfigPath: './tsconfig.json',
  },
  typedRoutes: true,
  reactStrictMode: true,
  webpack: (config, { isServer, dev }) => {
    // Handle JSON imports
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
      parser: {
        parse: JSON.parse,
      },
    });
    
    // Ensure proper resolution for assets
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias['@'] = require('path').resolve(__dirname);
    
    return config;
  },

  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;