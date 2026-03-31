/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    return config;
  },
  // Enable static exports if needed
  // output: 'export',
  // Optional: Add basePath if deploying to a subdirectory
  // basePath: '/neo-retro',

  // Optional: Configure trailing slash behavior
  // trailingSlash: true,

  // Optional: Configure image optimization
  images: {
    unoptimized: true, // Set to false if using Next.js Image Optimization API
  },

  // Optional: Configure headers for security
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