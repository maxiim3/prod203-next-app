'use client'

import {getImageSource} from '@/lib/sanityClient'
import Project from '@/schemas/project.schema'
import {motion, stagger, useAnimate, useInView} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import {twMerge} from 'tailwind-merge'

function useProjectInView() {
   const [containerRef, animateContainer] = useAnimate()
   const isInView = useInView(containerRef)

   useEffect(() => {
      console.log(isInView)
      if (isInView) {
         animateContainer(
            containerRef.current,
            {
               opacity: [0, 0.4, 1],
            },
            {
               duration: 0.5,
               delay: 0.5,
            }
         )
      }
   }, [isInView, animateContainer, containerRef])
   return containerRef // todo fix the animation with intersection observer
}

export const ProjectPreview = ({project, index}: {project: Project; index: number}) => {
   const containerRef = useProjectInView()
   const imageSource = getImageSource(project)

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
         className="group/card card h-full min-h-[260px] w-full min-w-[260px] overflow-hidden bg-base-100 shadow-xl">
         <Link
            className={'m-1 h-[100%-20px] w-[100%-20px]'}
            href={`/showcase/${project.slug.current}`}>
            <figure className="absolute left-0 top-0 h-full min-h-[260px] w-full min-w-[260px]">
               {imageSource && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <Image
                     width={500}
                     height={500}
                     className={
                        'h-full min-h-[260px] w-full min-w-[260px] object-cover motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110'
                     }
                     src={imageSource}
                     alt="Image cannot be loaded"
                  />
               )}
            </figure>
            <div
               className={twMerge(
                  'card-body m-4 bg-base-100/60 motion-safe:scale-95 motion-safe:transition-all motion-safe:delay-75 motion-safe:duration-200',
                  'rounded-xl',
                  'opacity-10 group-hover/card:opacity-100',
                  'group-hover/card:bg-base-100/90 motion-safe:group-hover/card:scale-105 '
               )}>
               <h3 className="card-title">{project.title}</h3>
               {project.description &&
                  project.description.map(d => {
                     return <p key={d._key}>{d.children[0].text}</p>
                  })}
            </div>
         </Link>
      </motion.li>
   )
}
