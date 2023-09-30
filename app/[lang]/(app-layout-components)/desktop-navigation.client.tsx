'use client'

import LanguageSelection from '@/app/[lang]/(app-layout-components)/language-selection.client'
import {NavigationItem, NavigationList} from '@/app/[lang]/(app-layout-components)/navigation.ui'
import {Z_PageI18nParam} from '@/schemas/i18n.page.props.schema'
import routes from '@/static-content/route.static.content'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import React from 'react'

export default function DesktopNavigationClient() {
   const pathname = usePathname()
   const params = useParams()
   let safeParams = Z_PageI18nParam.safeParse(params)
   let currentLang = safeParams.success ? safeParams.data.lang : 'fr'

   return (
      <>
         <nav className={'z-50 hidden items-center md:flex'}>
            <NavigationList>
               {routes.map(route => (
                  <NavigationItem
                     key={nanoid()}
                     active={route.path === pathname}>
                     <Link href={`/${currentLang}${route.path}`}>{route.name[currentLang]}</Link>
                  </NavigationItem>
               ))}
            </NavigationList>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
      </>
   )
}
