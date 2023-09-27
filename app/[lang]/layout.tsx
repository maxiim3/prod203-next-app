import Footer from '@/components/ui/Footer'
import MainNavigation from '@/components/ui/MainNavigation'
import {cormorant, manrope, poppins} from '@/styles/font'
import '@radix-ui/themes/styles.css'
import type {Metadata} from 'next'
import 'next-cloudinary/dist/cld-video-player.css'
import React, {PropsWithChildren} from 'react'
import '../globals.css'

export const metadata: Metadata = {
   title: 'Prod203',
   description: 'Jamais 203 Productions',
}

interface LayoutProps extends PropsWithChildren {
   params: {
      lang: string
   }
}

function RootLayout({children, params}: LayoutProps) {
   return (
      <html
         lang={params.lang}
         data-theme={'customTheme'}>
         <body
            className={`${cormorant.variable} ${manrope.variable} ${poppins.variable} font-poppins font-extralight`}>
            <MainNavigation />
            {children}
            <Footer />
         </body>
      </html>
   )
}

export default RootLayout
