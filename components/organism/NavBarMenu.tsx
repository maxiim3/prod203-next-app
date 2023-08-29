import NavLI from '@/components/atom/NavLI'
import {NavUL} from '@/components/layout/NavUL'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import ROUTES from '@/lib/ROUTES'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import React from 'react'

export default function NavBarMenu() {
   return (
      <>
         <nav className={'hidden items-center md:flex'}>
            <NavUL>
               {ROUTES.map(route => (
                  <NavLI key={nanoid()}>
                     <Link href={route.path}>{route.name}</Link>
                  </NavLI>
               ))}
            </NavUL>
         </nav>
         <LanguageSelection className={'hidden md:flex'} />
      </>
   )
}
