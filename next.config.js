/** @type {import('next').NextConfig} */
const path = require('path');
const redirects = require('./redirects');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      },
      {
        protocol: 'https',
        hostname: 'placehold.it'
      }
    ]
  },
  async redirects() {
    return redirects;
  }
};

module.exports = nextConfig;
