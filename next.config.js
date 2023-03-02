/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'jp'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
		domains: [
			"deckofcardsapi.com",
		],
	},

}

module.exports = nextConfig