'use client'

import useAnimateProjectCards from '@/app/(pages)/projects/use-project-preview.hook'
import {T_MarkdownElement} from '@/schemas/project.sanity.schema'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export const ProjectCardPreview = ({
   slug,
   description,
   title,
   index,
}: {
   slug: string
   description: T_MarkdownElement[]
   title: string
   index: number
}) => {
   const containerRef = useAnimateProjectCards()
   // const imageSource = getImageSource(project)

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
                  'motion-safe:transition-all motion-safe:duration-[2s] motion-safe:group-hover/card:scale-110 motion-safe:group-hover/card:opacity-75'
               )}
               sizes={
                  '(min-width: 1560px) 324px, (min-width: 1280px) calc(15.38vw + 87px), (min-width: 1040px) calc(33.18vw - 41px), (min-width: 780px) calc(50vw - 40px), (min-width: 640px) calc(50vw - 16px), calc(100vw - 16px)' /*Generated from https://ausi.github.io/respimagelint/*/
               }
               src={'/imaheholder-hi.jpg'}
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
                  )}
                  style={{transitionDelay: '0.035s'}}>
                  {title}
               </h3>
               {description &&
                  description.map((text, index) => {
                     return text.children.map(text => (
                        <p
                           className={twMerge(
                              'font-regular font-poppins text-xs',
                              index === description.length - 1 && 'line-clamp-1',
                              `transition-all duration-300 motion-safe:-translate-y-[50px]  motion-safe:opacity-75 motion-safe:group-hover/card:translate-y-0 motion-safe:group-hover/card:opacity-100`
                           )}
                           style={{transitionDelay: `calc(${index + 1.4}* 0.02s)`}}
                           key={index}>
                           {text.text}
                        </p>
                     ))
                  })}
            </div>
         </Link>
      </motion.li>
   )
}
