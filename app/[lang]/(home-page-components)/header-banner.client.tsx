'use client'

import VideoBanner from '@/app/[lang]/(home-page-components)/video-banner.client'
import Loading from '@/app/[lang]/loading'
import {useMounted} from '@/hooks/useMounted'
import {cn} from '@/lib/utils'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image'
import React, {Suspense, useCallback} from 'react'

export function HeaderBanner() {
   let {scrollYProgress} = useScroll()

   let y = useTransform(scrollYProgress, [0, 2], ['0%', '200%'])
   // let scale = useTransform(scrollYProgress, [0, 1], ['100%', '150%'])
   let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
   return (
      <header className={'relative mx-auto h-screen lg:aspect-video lg:h-auto lg:w-screen'}>
         <motion.section
            id={'hero'}
            aria-label={'Video hero banner'}
            className="fixed top-0 mx-auto h-screen overflow-hidden lg:aspect-video lg:h-auto lg:w-screen">
            <Suspense fallback={<Loading />}>
               <VideoBanner />
            </Suspense>
         </motion.section>
         <motion.section
            style={{y, opacity}}
            className="absolute flex h-full w-screen flex-col items-center text-center text-primary">
            <article
               className={
                  'relative mx-auto flex h-full select-none flex-col items-center justify-center text-primary'
               }>
               <h1 className="sr-only">Jamais 203 Productions</h1>
               <Image
                  src={'/assets/logo/prod203-white.webp'}
                  alt="Prod203"
                  priority={true}
                  className={cn(
                     'max-h-32 w-full object-contain object-center',
                     'motion-safe:animate-[scaleAndFade_850ms_ease-out_450ms_both]'
                  )}
                  width={1500}
                  height={337}
               />
            </article>

            <motion.div className={' bottom-2 flex h-auto w-auto justify-center'}>
               <ButtonCTA />
            </motion.div>
         </motion.section>
      </header>
   )
}

const ButtonCTA = () => {
   const isMounted = useMounted()
   const isIPhoneSafari = useCallback(() => {
      if (!isMounted) return false
      const userAgent = navigator?.userAgent
      const isIPhoneSafari = /iPhone.*Safari\/[\w.]+/.test(userAgent)

      if (isIPhoneSafari) {
         // Add your code for iPhone Safari
         // console.log('This is iPhone Safari')
         return true
      } else {
         // Code for other browsers
         // console.log('This is not iPhone Safari')
         return false
      }
   }, [isMounted])

   return (
      <div
         className={cn(
            `absolute bottom-0 z-30 flex w-full items-center justify-center pb-8 sm:pb-[5vw]  2xl:pb-40  landscape:pb-8  md:landscape:pb-[5vw] 2xl:landscape:pb-20`,
            {
               'pb-24': isIPhoneSafari(),
            },
            'transform opacity-75'
         )}>
         <a
            href={'#services'}
            className={
               'relative mx-auto h-16 w-12 overflow-hidden rounded-lg border-none bg-base-100/10 backdrop-blur-md transition-colors backdrop:opacity-0 hover:bg-base-100/50 md:h-24 md:w-16'
            }>
            <span className={'flex w-full animate-scroll items-center justify-center '}>
               <svg
                  width="64"
                  height="64"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className={'h-8 w-8 !rotate-180 text-primary md:h-12   md:w-12'}>
                  <path
                     fill="currentColor"
                     d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
                  />
               </svg>
            </span>
         </a>
      </div>
   )
}
