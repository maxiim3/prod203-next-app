'use client'

import NavItem from '@/components/atom/NavItem'
import {NavListStack} from '@/components/layout/NavListStack'
import LanguageSelection from '@/components/molecule/LanguageSelection'
import useAnimateMenu from '@/hooks/useAnimateMenu'
import ROUTES from '@/lib/ROUTES'
import {motion} from 'framer-motion'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import React from 'react'

const MenuPortal = () => {
   const {setIconType, modalScope, DURATION, DELAY, templateAnimationProps} = useAnimateMenu()

   return (
      <motion.article
         ref={modalScope}
         initial={{translateY: '-100%'}}
         animate={{translateY: 0}}
         transition={{...templateAnimationProps}}
         className={
            'absolute left-0 top-0 h-screen w-screen bg-base-100/95 backdrop-blur-lg md:hidden'
         }>
         <nav className={'flex h-full w-full flex-col items-end justify-center gap-16 px-4 '}>
            <NavListStack className="flex-col items-end gap-12">
               {ROUTES.map((route, index) => (
                  <NavItem
                     className={'text-4xl'}
                     key={nanoid()}>
                     <motion.span
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                           duration: DURATION.current,
                           delay: DELAY.current * (index + 1),
                           ...templateAnimationProps,
                        }}>
                        <Link
                           onClick={() => setIconType('burger')}
                           href={route.path}>
                           {route.name}
                        </Link>
                     </motion.span>
                  </NavItem>
               ))}
            </NavListStack>
            <motion.span
               initial={{opacity: 0, y: 30}}
               animate={{opacity: 1, y: 0}}
               transition={{
                  duration: DURATION.current,
                  delay: DELAY.current * (ROUTES.length + 1),
                  ...templateAnimationProps,
               }}>
               <LanguageSelection
                  onClick={() => setIconType('burger')}
                  large
               />
            </motion.span>
         </nav>
      </motion.article>
   )
}
export default MenuPortal
