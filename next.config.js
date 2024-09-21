// noinspection GrazieInspection

/** @type {import('next').NextConfig} */
const nextConfig = {
   optimizeFonts: true,
   crossOrigin: 'anonymous',
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: 'photos/**',
         },
         {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '**/**',
         },
         {
            protocol: "http",
            hostname: 'localhost',
            port: '3000',
            pathname: ''
         }
      ],
   },
}

module.exports = nextConfig
