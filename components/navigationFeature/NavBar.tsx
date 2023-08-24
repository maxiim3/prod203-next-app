import {BurgerMenuButton} from '@/components/navigationFeature/BurgerMenuButton'
import LanguageSelection from '@/components/navigationFeature/LanguageSelection'
import NavItem from '@/components/navigationFeature/NavItem'
import ROUTES from '@/lib/ROUTES'
import {nanoid} from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function NavBar() {
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
         {/*</span>*/}
         <nav className={'hidden md:flex'}>
            <ul className="flex w-144 flex-row justify-center gap-4">
               {ROUTES.map(route => (
                  <NavItem key={nanoid()}>
                     <Link href={route.path}>{route.name}</Link>
                  </NavItem>
               ))}
            </ul>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
         <BurgerMenuButton />
      </header>
   )
}
