/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
