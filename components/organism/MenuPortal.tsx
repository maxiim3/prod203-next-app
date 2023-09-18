'use client'

import NavigationItem from '@/components/atom/navigation.item.atom'
import {NavigationList} from '@/components/layout/navigation.list.atom'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import {useMobileNavigation} from '@/components/organism/MobileNavigationProvider'
import routes from '@/static-content/route.static.content'
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
         className={'fixed left-0 top-0 z-40 h-screen w-screen md:hidden'}
         open={modalIsOpen}>
         <motion.article className={'h-full w-full bg-base-100/95 backdrop-blur-lg md:hidden'}>
            <nav
               className={
                  'flex h-full w-full flex-col items-end justify-center gap-16 px-12 pt-12 landscape:items-center   '
               }>
               <NavigationList className="flex-col items-end gap-8 xs:gap-12 landscape:flex-row landscape:items-center landscape:justify-center landscape:gap-4">
                  {routes.map(route => (
                     <NavigationItem
                        key={nanoid()}
                        className={`duration-250 text-4xl motion-safe:transition-all xs:text-5xl  landscape:text-xl`}>
                        <Link
                           onClick={() => pathName === route.path && handleCloseMenu()}
                           href={route.path}>
                           {route.name}
                        </Link>
                     </NavigationItem>
                  ))}
               </NavigationList>
               <LanguageSelection
                  className={'self-end text-2xl text-primary sm:text-4xl landscape:text-xl'}
                  onClick={handleCloseMenu}
                  large
               />
            </nav>
         </motion.article>
      </dialog>
   )
}
export default MenuPortal
