'use client'

import NavLI from '@/components/atom/NavLI'
import {NavUL} from '@/components/layout/NavUL'
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
            <NavUL>
               {routes.map(route => (
                  <NavLI
                     key={nanoid()}
                     active={route.path === pathname}>
                     <Link href={route.path}>{route.name}</Link>
                  </NavLI>
               ))}
            </NavUL>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
      </>
   )
}
