/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'uk', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
