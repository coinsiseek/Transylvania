/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the 'experimental.typedRoutes' warning from your logs
  typedRoutes: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove the custom Webpack JSON/Alias rules. 
  // Next.js uses your tsconfig.json automatically for the '@' alias.
};

module.exports = nextConfig;