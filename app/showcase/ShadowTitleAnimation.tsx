"use client"

import {SectionTitle} from "@/app/UI"
import {useMounted} from "@/hooks/useMounted"
import {classed} from "@tw-classed/react"
import {motion, useAnimate} from "framer-motion"
import React, {useEffect} from "react"
import {twMerge} from "tailwind-merge"

/**
 * @description composition from SectionTitle based classes
 */
const AnimateTitle = classed(motion.span, SectionTitle)

export function ShadowTitleAnimation({title}: {title: string}) {
   const isMounted = useMounted()
   const [titleRef, animateTitle] = useAnimate()
   useEffect(() => {
      isMounted &&
         animateTitle(
            titleRef.current,
            {
               opacity: [0, 0.2, 0.4, 0.1, 0.4, 0.1, 0],
               x: [-80, 80, -80],
               y: [-20, 20, -20, 0, -10, 20, 0, -20],
               scale: [1.8, 1.6, 1.7, 1.8],
            },
            {duration: 45, delay: 0.7, repeat: Infinity, ease: "linear"}
         )
   }, [animateTitle, isMounted, titleRef])

   if (!isMounted) return <></>

   return (
      <AnimateTitle
         ref={titleRef}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 0.7}}
         className={twMerge(
            "mx-auto px-0 opacity-60 blur-sm",
            "scale-150",
            "absolute left-[25%] top-0"
         )}>
         {title}
      </AnimateTitle>
   )
}
