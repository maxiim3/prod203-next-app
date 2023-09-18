'use client'

import Item from '@/components/atom/navigation.item.atom'
import {NavigationList} from '@/components/layout/navigation.list.atom'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import routes from '@/static-content/route.static.content'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

export default function NavBarMenu() {
   const pathname = usePathname()
   return (
      <>
         <nav className={'hidden items-center md:flex'}>
            <NavigationList>
               {routes.map(route => (
                  <Item
                     key={nanoid()}
                     active={route.path === pathname}>
                     <Link href={route.path}>{route.name}</Link>
                  </Item>
               ))}
            </NavigationList>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
      </>
   )
}
