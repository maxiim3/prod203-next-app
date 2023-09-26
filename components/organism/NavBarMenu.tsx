'use client'

import Item from '@/components/atom/navigation.item.atom'
import {NavigationList} from '@/components/layout/navigation.list.atom'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import {Z_PageI18nParam} from '@/schemas/i18n.page.props.schema'
import routes from '@/static-content/route.static.content'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import React from 'react'

export default function NavBarMenu() {
   const pathname = usePathname()
   const params = useParams()
   let safeParams = Z_PageI18nParam.safeParse(params)
   let currentLang = safeParams.success ? safeParams.data.lang : 'fr'

   return (
      <>
         <nav className={'hidden items-center md:flex'}>
            <NavigationList>
               {routes.map(route => (
                  <Item
                     key={nanoid()}
                     active={route.path === pathname}>
                     <Link href={`/${currentLang}${route.path}`}>{route.name[currentLang]}</Link>
                  </Item>
               ))}
            </NavigationList>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
      </>
   )
}
