import DropDownMenu from '@/components/organism/DropDownMenu'
import {MobileNavigationProvider} from '@/components/organism/MobileNavigationProvider'
import NavBarMenu from '@/components/organism/NavBarMenu'
import Image from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function MainNavigation() {
   return (
      <header
         id={'header'}
         className={twMerge(
            'left-o align-center navbar fixed top-0 z-50 flex justify-between bg-base-100/60 px-2 backdrop-blur-sm md:px-4 lg:px-8',
            'motion-safe:animate-[fadeIn_450ms_ease-out_650ms_both]'
         )}>
         <Image
            width={148}
            height={36}
            className={'object-contain object-center'}
            src="/assets/Prod203/203white.png"
            alt="Prod203"
         />
         <NavBarMenu />
         <MobileNavigationProvider>
            <DropDownMenu />
         </MobileNavigationProvider>
      </header>
   )
}
