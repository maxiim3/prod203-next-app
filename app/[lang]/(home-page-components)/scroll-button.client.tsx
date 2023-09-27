'use client'

import {useMounted} from '@/hooks/useMounted'
import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {ComponentPropsWithoutRef, useCallback} from 'react'

interface ScrollButtonComposedProps {
   container?: ComponentPropsWithoutRef<'div'>
   anchor?: ComponentPropsWithoutRef<'a'>
   svg?: ComponentPropsWithoutRef<'svg'>
}

export const ScrollButton = ({svg, container, anchor}: ScrollButtonComposedProps) => {
   const isMounted = useMounted()
   const isIPhoneSafari = useCallback(() => {
      if (!isMounted) return false
      const userAgent = navigator?.userAgent
      const isIPhoneSafari = /iPhone.*Safari\/[\w.]+/.test(userAgent)

      if (isIPhoneSafari) {
         // Add your code for iPhone Safari
         console.log('This is iPhone Safari')
         return true
      } else {
         // Code for other browsers
         console.log('This is not iPhone Safari')
         return false
      }
   }, [isMounted])

   return (
      <div
         className={cn(
            `absolute bottom-0 z-30 flex w-full items-center justify-center  pb-8 sm:pb-[5vw]  2xl:pb-40  landscape:pb-8  md:landscape:pb-[5vw] 2xl:landscape:pb-20`,
            {
               'pb-24': isIPhoneSafari(),
            },
            container?.className
         )}>
         <motion.a
            initial={{scale: 0.9, translateY: -25, opacity: 0.2}}
            whileInView={{
               scale: 1,
               translateY: 0,
               opacity: 1,
            }}
            transition={{
               type: 'spring',
               stiffness: 260,
               damping: 20,
               duration: 0.25,
               delay: 0.075,
            }}
            href={anchor?.href}
            className={cn(
               'flex h-12 w-12 items-center justify-center rounded-full border-none p-1  text-xl font-bold uppercase text-primary opacity-70 backdrop-blur-md backdrop:opacity-0 xs:h-16 xs:w-16',
               anchor?.className
            )}>
            <svg
               width="512"
               className={cn(
                  'h-8 w-8 text-primary xs:h-12 xs:w-12 sm:h-12 sm:w-12 lg:h-16 lg:w-16',
                  svg?.className
               )}
               height="512"
               viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  fill="currentColor"
                  d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
               />
            </svg>
         </motion.a>
      </div>
   )
}
