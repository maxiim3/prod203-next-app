'use client'

import useAnimateProjectCards from '@/app/[lang]/projects/use-canimate-project-cards.hook'
import useLangParamsHook from '@/hooks/useLangParams.hook'
import ImageBuilder from '@/lib/sanity/image.builder'
import {ProjectFactory} from '@/lib/sanity/project'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

type T_ProjectFactory = ReturnType<typeof ProjectFactory>
type ComponentProps = {
   index: number
   project: T_ProjectFactory
}

export const ProjectThumbnail = ({project, index}: ComponentProps) => {
   const {title, description, slug, thumbnail} = project

   const containerRef = useAnimateProjectCards()
   // const imageSource = getImageSource(project)
   const {lang} = useLangParamsHook()
   const thumbnailURL = thumbnail ? ImageBuilder(thumbnail).url() : '/imaheholder-hi.jpg'

   return (
      <motion.li
         initial={{
            opacity: 0,
         }}
         animate={{
            opacity: 1,
         }}
         exit={{
            opacity: 0,
         }}
         transition={{
            duration: 0.125,
            delay: index * 0.05,
         }}
         ref={containerRef.current}
         className="group/card card relative h-full min-h-[260px] w-full min-w-[260px] overflow-hidden bg-base-100 shadow-xl">
         <Link href={`/${lang}/projects/${slug?.current}`}>
            <Image
               fill={true}
               className={twMerge(
                  'object-cover',
                  'motion-safe:transition motion-safe:duration-1000 motion-safe:group-hover/card:scale-110 motion-safe:group-hover/card:opacity-75'
               )}
               sizes={
                  '(min-width: 1560px) 324px, (min-width: 1280px) calc(15.38vw + 87px), (min-width: 1040px) calc(33.18vw - 41px), (min-width: 780px) calc(50vw - 40px), (min-width: 640px) calc(50vw - 16px), calc(100vw - 16px)'
               }
               src={thumbnailURL}
               alt="Image cannot be loaded"
            />
            <div
               className={twMerge(
                  'card-body relative bg-base-100/80 shadow-md shadow-base-300/50 drop-shadow-lg motion-safe:scale-95 motion-safe:transition-all motion-safe:delay-75 motion-safe:duration-200 sm:bg-base-100/60',
                  'rounded-xl',
                  ' h-full w-full gap-1 px-12 py-8',
                  'motion-safe:sm:-translate-y-full motion-safe:sm:opacity-10',
                  'motion-safe:sm:group-hover/card:translate-y-0 motion-safe:sm:group-hover/card:scale-105  motion-safe:sm:group-hover/card:bg-base-100/90 motion-safe:sm:group-hover/card:opacity-100 '
               )}>
               {title && (
                  <h3
                     className={twMerge(
                        'card-title text-base',
                        `transition-all duration-300 motion-safe:sm:-translate-y-[50px] motion-safe:sm:opacity-75 motion-safe:sm:group-hover/card:sm:translate-y-0 motion-safe:sm:group-hover/card:opacity-100`
                     )}>
                     {title[lang]}
                  </h3>
               )}
               {description &&
                  description?.[lang] &&
                  description[lang]
                     .filter((_, blockIndex) => blockIndex === 0)
                     .map((block, index) => {
                        return (
                           <p
                              className={twMerge(
                                 'font-regular hidden font-poppins text-xs sm:block',
                                 'line-clamp-2 text-balance',
                                 `transition-all duration-300 motion-safe:sm:-translate-y-[50px] motion-safe:sm:opacity-75 motion-safe:sm:group-hover/card:sm:translate-y-0 motion-safe:sm:group-hover/card:sm:opacity-100`
                              )}
                              key={index}>
                              {block.children[0].text}
                           </p>
                        )
                     })}
               <button
                  className={
                     'relative -bottom-2 -left-2 w-fit  rounded-full bg-base-200/80 px-3 py-0.5 text-xs'
                  }>
                  {lang === 'en' ? 'See more' : 'Voir plus'}
               </button>
            </div>
         </Link>
      </motion.li>
   )
}
