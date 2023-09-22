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
      ],
   },
}

module.exports = nextConfig
