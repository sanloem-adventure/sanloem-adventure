/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','chairlift6.netlify.app','ts6.ca'],
    imageSizes: [128, 256, 384],
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["en","fr" , "es-ES", "it-IT"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
    localeDetection: false
  },
  optimizeFonts: true
}

module.exports = nextConfig
