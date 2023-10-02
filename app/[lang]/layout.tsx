import AppLayout from '@/app/[lang]/(app-layout-components)/app-layout'
import Error from '@/app/[lang]/error'
import Loading from '@/app/[lang]/loading'
import {cormorant, manrope, poppins} from '@/styles/font'
import '@radix-ui/themes/styles.css'
import type {Metadata} from 'next'
import 'next-cloudinary/dist/cld-video-player.css'
import React, {PropsWithChildren, Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
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
            className={`${cormorant.variable} ${manrope.variable} ${poppins.variable} flex min-h-[80vh] flex-col justify-between font-poppins font-extralight`}>
            <ErrorBoundary fallback={<Error />}>
               <Suspense fallback={<Loading />}>
                  <AppLayout>{children}</AppLayout>
               </Suspense>
            </ErrorBoundary>
         </body>
      </html>
   )
}

export default RootLayout
