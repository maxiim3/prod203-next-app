import DropDownMenu from '@/components/organism/DropDownMenu'
import {MobileNavigationProvider} from '@/components/organism/MobileNavigationProvider'
import NavBarMenu from '@/components/organism/NavBarMenu'
import prod203 from '@/public/assets/logo/prod203-white.webp'
import Image from 'next/image'
import React from 'react'

export default function MainNavigation() {
   return (
      <header
         id={'header'}
         className={
            'align-center fixed left-0 top-0 z-50 flex w-screen justify-between bg-base-100/60 px-2 py-3 backdrop-blur-sm motion-safe:animate-[fadeIn_850ms_ease-out_950ms_both] md:px-4 lg:px-8'
         }>
         <Image
            width={260}
            height={80}
            className={'w-32 -translate-x-2 object-contain object-center sm:w-36'} // ! ADJUSTED THE TRANSLATE-X TO CENTER THE LOGO
            src={prod203.src}
            alt="Prod203"
         />
         <NavBarMenu />
         <MobileNavigationProvider>
            <DropDownMenu />
         </MobileNavigationProvider>
      </header>
   )
}
