/** @type {import('next').NextConfig} */

// example for registering a domain for image hosted caching.
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      }
    ]
  }
}

module.exports = nextConfig
