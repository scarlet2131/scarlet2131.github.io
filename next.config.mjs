/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // This is required for static exports
    },
    output: 'export',
  };
  
export default nextConfig;
