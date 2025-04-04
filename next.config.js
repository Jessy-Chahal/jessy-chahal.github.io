/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["cdn.pixabay.com", "th.bing.com"],
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = {
  distDir: 'out',
};
