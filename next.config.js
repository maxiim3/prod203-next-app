// noinspection GrazieInspection

/** @type {import('next').NextConfig} */
const nextConfig = {
   optimizeFonts: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: 'photos/**',
         },
      ],
   },
}

module.exports = nextConfig
