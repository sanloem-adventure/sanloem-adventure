/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','chairlift6.netlify.app','ts6.ca'],
    imageSizes: [128, 256, 384],
  },
}

module.exports = nextConfig
