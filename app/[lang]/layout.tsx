import AppLayout from '@/app/[lang]/(app-layout-components)/app-layout'
import GoogleAnalytics from '@/app/[lang]/(app-layout-components)/googleAnalitycs.client'
import Loading from '@/app/[lang]/loading'
import {cormorant, manrope, poppins} from '@/styles/font'
import '@radix-ui/themes/styles.css'
import type {Metadata} from 'next'
import 'next-cloudinary/dist/cld-video-player.css'
import React, {PropsWithChildren, Suspense} from 'react'
import '../globals.css'

export const metadata: Metadata = {
   title: 'Jamais 203 Productions',
   description: 'Jamais 203 Productions, la passion du son',
}

interface LayoutProps extends PropsWithChildren {
   params: {
      lang: 'fr' | 'en'
   }
}

// Generate segments for [category]

function RootLayout({children, params}: LayoutProps) {
   return (
      <html
         lang={params.lang}
         data-theme={'customTheme'}>
         <head>
            <title>Jamais 203 Productions</title>
            <>
               {/* Primary Meta Tags */}
               <title>Jamais 203 Productions</title>
               <meta
                  name="title"
                  content="Jamais 203 Productions"
               />
               <meta
                  name="description"
                  content="Jamais 203 Productions | La passion du son | Fondée par Jérôme Kuhn, Nathan Stornetta et Samuel Briand, Jamais 203 Productions est une agence de production audiovisuelle."
               />
               {/* Open Graph / Facebook */}
               <meta
                  property="og:type"
                  content="website"
               />
               <meta
                  property="og:url"
                  content="https://prod203.com"
               />
               <meta
                  property="og:title"
                  content="Jamais 203 Productions"
               />
               <meta
                  property="og:description"
                  content="Jamais 203 Productions | La passion du son | Fondée par Jérôme Kuhn, Nathan Stornetta et Samuel Briand, Jamais 203 Productions est une agence de production audiovisuelle."
               />
               <meta
                  property="og:image"
                  content="/assets/prod203-banner-sq.png"
               />
               {/* Twitter */}
               <meta
                  property="twitter:card"
                  content="summary_large_image"
               />
               <meta
                  property="twitter:url"
                  content="/assets/prod203-banner-sq.png"
               />
               <meta
                  property="twitter:title"
                  content="Jamais 203 Productions"
               />
               <meta
                  property="twitter:description"
                  content="Jamais 203 Productions | La passion du son | Fondée par Jérôme Kuhn, Nathan Stornetta et Samuel Briand, Jamais 203 Productions est une agence de production audiovisuelle."
               />
               <meta
                  property="twitter:image"
                  content="https://prod203.vercel.app/fr"
               />
               {/* Meta Tags Generated with https://metatags.io */}
            </>
         </head>
         <body
            className={`${cormorant.variable} ${manrope.variable} ${poppins.variable} flex min-h-[80vh] flex-col justify-between font-poppins font-extralight`}>
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
               <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
            ) : null}
            <Suspense fallback={<Loading />}>
               <AppLayout>{children}</AppLayout>
            </Suspense>
         </body>
      </html>
   )
}

export default RootLayout
