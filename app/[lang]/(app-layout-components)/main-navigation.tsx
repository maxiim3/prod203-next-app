import DesktopNavigation from '@/app/[lang]/(app-layout-components)/desktop-navigation.client'
import MobileNavigation from '@/app/[lang]/(app-layout-components)/mobile-navigation.client'
import {MobileNavigationContext} from '@/app/[lang]/(app-layout-components)/mobile-navigation.context'
import prod203 from '@/public/assets/logo/prod203-white.webp'
import Image from 'next/image'
import React from 'react'

export default function MainNavigation() {
   return (
      <header
         id={'header'}
         className={
            'fixed left-0 top-0 z-40 w-screen bg-base-100/60 backdrop-blur-sm motion-safe:animate-[fadeIn_850ms_ease-out_950ms_both]'
         }>
         <div
            className={
               'align-center mx-auto flex max-w-[1600px] justify-between px-2 py-3 md:px-4 lg:px-8'
            }>
            <Image
               width={260}
               height={80}
               className={'w-32 -translate-x-2 object-contain object-center sm:w-36'} // ! ADJUSTED THE TRANSLATE-X TO CENTER THE LOGO
               src={prod203.src}
               alt="Prod203"
            />
            <DesktopNavigation />
            <MobileNavigationContext>
               <MobileNavigation />
            </MobileNavigationContext>
         </div>
      </header>
   )
}
