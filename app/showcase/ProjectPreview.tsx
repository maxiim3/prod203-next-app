"use client"

import {getImageSource} from "@/lib/sanityClient"
import Project from "@/schemas/project.schema"
import {useAnimate, useInView} from "framer-motion"
import Link from "next/link"
import React, {useEffect} from "react"
import {twMerge} from "tailwind-merge"

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
   return containerRef
}

export const ProjectPreview = ({project}: {project: Project}) => {
   const containerRef = useProjectInView()
   const imageSource = getImageSource(project)
   return (
      <li
         ref={containerRef.current}
         className="group/card card h-full min-h-[260px] w-full min-w-[260px] overflow-hidden bg-base-100 shadow-xl">
         <Link href={`/showcase/${project.slug.current}`}>
            <figure className="absolute left-0 top-0 h-full min-h-[260px] w-full min-w-[260px]">
               {imageSource && (
                  <img
                     className={
                        "h-full min-h-[260px] w-full min-w-[260px] object-cover motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110"
                     }
                     src={imageSource}
                     alt="Image cannot be loaded"
                  />
               )}
            </figure>
            <div
               className={twMerge(
                  "card-body m-4 bg-base-100/60 motion-safe:scale-95 motion-safe:transition-all motion-safe:delay-75 motion-safe:duration-200",
                  "rounded-xl",
                  "opacity-80 group-hover/card:opacity-100",
                  "group-hover/card:bg-base-100/90 motion-safe:group-hover/card:scale-105 "
               )}>
               <h3 className="card-title">{project.title}</h3>
               {project.description &&
                  project.description.map(d => {
                     return <p key={d._key}>{d.children[0].text}</p>
                  })}
            </div>
         </Link>
      </li>
   )
}
