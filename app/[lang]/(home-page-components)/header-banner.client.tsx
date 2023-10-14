'use client'

import ScrollButton from '@/app/[lang]/(home-page-components)/scroll-button.client'
import VideoBanner from '@/app/[lang]/(home-page-components)/video-banner.client'
import Loading from '@/app/[lang]/loading'
import {cn} from '@/lib/utils'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image'
import React, {Suspense} from 'react'

export function HeaderBanner() {
   let {scrollYProgress} = useScroll()

   let y = useTransform(scrollYProgress, [0, 2], ['0%', '200%'])
   // let scale = useTransform(scrollYProgress, [0, 1], ['100%', '150%'])
   let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
   console.log()
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
               <ScrollButton
                  container={{className: 'opacity-75 animate-scroll transform'}}
                  anchor={{href: '#services'}}
                  svg={{className: 'rotate-180'}}
               />
            </motion.div>
         </motion.section>
      </header>
   )
}
