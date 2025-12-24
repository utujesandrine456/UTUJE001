/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode if causing issues
  reactStrictMode: false,
  
  // Optimize for Vercel
  swcMinify: true,
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig