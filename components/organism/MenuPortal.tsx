'use client'

import NavItem from '@/components/atom/NavItem'
import {NavListStack} from '@/components/layout/NavListStack'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import {useMobileNavigation} from '@/components/organism/MobileNavigationProvider'
import ROUTES from '@/lib/ROUTES'
import {motion} from 'framer-motion'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

const MenuPortal = () => {
   const {handleCloseMenu, modalIsOpen} = useMobileNavigation()
   const pathName = usePathname()

   return (
      <dialog
         className={'fixed left-0 top-0 h-screen w-screen md:hidden'}
         open={modalIsOpen}>
         <motion.article className={'h-full w-full bg-base-100/95 backdrop-blur-lg md:hidden'}>
            <nav className={'flex h-full w-full flex-col items-end justify-center gap-16  px-4 '}>
               <NavListStack className="flex-col items-end gap-16 sm:gap-24">
                  {ROUTES.map(route => (
                     <NavItem
                        key={nanoid()}
                        className={`duration-250 text-5xl motion-safe:transition-all sm:text-6xl`}>
                        <Link
                           onClick={() => pathName === route.path && handleCloseMenu()}
                           href={route.path}>
                           {route.name}
                        </Link>
                     </NavItem>
                  ))}
               </NavListStack>
               <LanguageSelection
                  className={'text-2xl text-primary sm:text-4xl'}
                  onClick={handleCloseMenu}
                  large
               />
            </nav>
         </motion.article>
      </dialog>
   )
}
export default MenuPortal
