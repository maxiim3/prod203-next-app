'use client'

import LanguageSelection from '@/app/[lang]/(app-layout-components)/language-selection.client'
import {NavigationItem, NavigationList} from '@/app/[lang]/(app-layout-components)/navigation.ui'
import useCurrentLanguage from '@/hooks/use-current-language.hook'
import routes, {Route} from '@/static-content/route.static.content'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

export default function DesktopNavigationClient() {
   const lang = useCurrentLanguage()
   const pathname = usePathname()

   return (
      <>
         <nav className={'z-50 hidden items-center md:flex'}>
            <NavigationList>
               {routes.map(route => {
                  const {name, path}: Route = route
                  const title = name[lang]!

                  return (
                     <NavigationItem
                        key={nanoid()}
                        active={route.path === pathname}>
                        <Link href={`/${lang}${path}`}>{title}</Link>
                     </NavigationItem>
                  )
               })}
            </NavigationList>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
      </>
   )
}
