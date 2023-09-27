'use client'

import {useMobileNavigation} from '@/app/[lang]/(app-layout-components)/mobile-navigation.context'
import {NavigationItem, NavigationList} from '@/app/[lang]/(app-layout-components)/navigation.ui'
import BurgerButton from '@/components/molecule/BurgerButton'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import {Z_PageI18nParam} from '@/schemas/i18n.page.props.schema'
import routes from '@/static-content/route.static.content'
import {motion} from 'framer-motion'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import React from 'react'
import {createPortal} from 'react-dom'

export default function MobileNavigation() {
   const {modalIsOpen} = useMobileNavigation()

   return (
      <div className="flex items-center md:hidden">
         {/*Burger Button Trigger*/}
         <BurgerButton />
         {modalIsOpen && createPortal(<MenuPortal />, document.body!)}
      </div>
   )
}

const MenuPortal = () => {
   const {handleCloseMenu, modalIsOpen} = useMobileNavigation()
   const pathName = usePathname()
   const params = useParams()
   let parsed = Z_PageI18nParam.parse(params)
   let currentLang = parsed.lang || 'fr'
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
                           href={`/${currentLang}${route.path}`}>
                           {route.name[currentLang]}
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
