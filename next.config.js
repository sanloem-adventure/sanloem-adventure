/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','chairlift6.netlify.app','ts6.ca'],
    imageSizes: [128, 256, 384],
  },
  i18n: {
    locales: ["en","fr" ],
    defaultLocale: "en",
    localeDetection: false
  },
  optimizeFonts: true
}

module.exports = nextConfig
