import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: 'Jamais 203 Productions',
      short_name: 'prod203',
      description: 'La passion du son',
      start_url: '/',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#FFFFFF',
      icons: [
         {
            src: '/assets/android-chrome-36x36.png',
            sizes: '36x36',
            type: 'image/png',
         },
         {
            src: '/assets/android-chrome-48x48.png',
            sizes: '48x48',
            type: 'image/png',
         },
         {
            src: '/assets/android-chrome-72x72.png',
            sizes: '72x72',
            type: 'image/png',
         },
         {
            src: '/assets/apple-touch-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
         },
         {
            src: '/assets/apple-touch-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
         },
         {
            src: '/assets/apple-touch-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
         },
      ],
   }
}
