'use client'

import useAnimateProjectCards from '@/app/[lang]/projects/use-canimate-project-cards.hook'
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
   title: T_ProjectFactory['title']['fr']
   description?: T_ProjectFactory['description']['fr']
   slug: T_ProjectFactory['slug']['current']
   thumbnail: T_ProjectFactory['thumbnail']
}

export const ProjectThumbnail = ({slug, description, title, index, thumbnail}: ComponentProps) => {
   const containerRef = useAnimateProjectCards()
   // const imageSource = getImageSource(project)

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
         <Link href={`/projects/${slug}`}>
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
                  'card-body bg-base-100/60 motion-safe:scale-95 motion-safe:transition-all motion-safe:delay-75 motion-safe:duration-200',
                  'rounded-xl',
                  ' h-full w-full gap-1 px-12 py-8',
                  'motion-safe:-translate-y-full motion-safe:opacity-10',
                  'motion-safe:group-hover/card:translate-y-0 motion-safe:group-hover/card:scale-105  motion-safe:group-hover/card:bg-base-100/90 motion-safe:group-hover/card:opacity-100 '
               )}>
               <h3
                  className={twMerge(
                     'card-title text-base',
                     `transition-all duration-300  motion-safe:-translate-y-[50px] motion-safe:opacity-75 motion-safe:group-hover/card:translate-y-0 motion-safe:group-hover/card:opacity-100`
                  )}>
                  {title}
               </h3>
               {description &&
                  description.map((block, index) => {
                     return block.children.map(content => (
                        <p
                           className={twMerge(
                              'font-regular font-poppins text-xs',
                              index === description.length - 1 && 'line-clamp-1',
                              `transition-all duration-300 motion-safe:-translate-y-[50px]  motion-safe:opacity-75 motion-safe:group-hover/card:translate-y-0 motion-safe:group-hover/card:opacity-100`
                           )}
                           key={index}>
                           {content.text}
                        </p>
                     ))
                  })}
            </div>
         </Link>
      </motion.li>
   )
}
