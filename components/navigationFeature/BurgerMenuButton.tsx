"use client"

import LanguageSelection from "@/components/navigationFeature/LanguageSelection"
import StyledItem from "@/components/navigationFeature/StyledItem"
import ROUTES from "@/lib/ROUTES"
import {motion, useAnimate} from "framer-motion"
import {nanoid} from "nanoid"
import Link from "next/link"
import React, {useEffect, useRef, useState} from "react"
import {createPortal} from "react-dom"

export function BurgerMenuButton() {
   const [iconType, setIconType] = useState<"cross" | "burger">("burger")

   const [modalIsVisible, setModalVisibility] = useState<Boolean>(false)

   const [modalScope, animateModal] = useAnimate()
   const [ulScope, animateElements] = useAnimate()

   useEffect(() => {
      if (iconType === "burger" && modalIsVisible) {
         animateModal(modalScope.current, {translateY: "-100%"})
         setTimeout(() => setModalVisibility(false), 600)
      } else if (iconType === "cross") {
         setModalVisibility(true)
      } else {
         setModalVisibility(false)
      }
   }, [iconType])

   const DURATION = useRef(0.125)
   const DELAY = useRef(0.25)
   const templateAnimationProps = {
      type: "spring",
      stiffness: 260,
      damping: 20,
   }

   return (
      <div className="flex-none md:hidden">
         <button
            className="btn btn-square btn-ghost"
            onClick={() => setIconType(prev => (prev === "burger" ? "cross" : "burger"))}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               className="inline-block h-6 w-6 stroke-current">
               {(() => {
                  switch (iconType) {
                     case "burger":
                        return (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        )
                     case "cross":
                        return (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        )
                  }
               })()}
            </svg>
         </button>
         {modalIsVisible &&
            createPortal(
               <motion.article
                  ref={modalScope}
                  initial={{translateY: "-100%"}}
                  animate={{translateY: 0}}
                  transition={{...templateAnimationProps}}
                  className={
                     "absolute left-0 top-0 h-screen w-screen bg-base-100/95 backdrop-blur-lg md:hidden"
                  }>
                  <nav
                     className={"flex h-full w-full flex-col items-end justify-center gap-8 px-4 "}>
                     <ul
                        ref={ulScope}
                        className="menu menu-vertical items-end gap-8 ">
                        {ROUTES.map((route, index) => (
                           <StyledItem key={nanoid()}>
                              <motion.span
                                 initial={{opacity: 0, y: 30}}
                                 animate={{opacity: 1, y: 0}}
                                 transition={{
                                    duration: DURATION.current,
                                    delay: DELAY.current * (index + 1),
                                    ...templateAnimationProps,
                                 }}>
                                 <Link
                                    onClick={() => setIconType("burger")}
                                    href={route.path}>
                                    {route.name}
                                 </Link>
                              </motion.span>
                           </StyledItem>
                        ))}
                     </ul>
                     <motion.span
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                           duration: DURATION.current,
                           delay: DELAY.current * (ROUTES.length + 1),
                           ...templateAnimationProps,
                        }}>
                        <LanguageSelection
                           onClick={() => setIconType("burger")}
                           large
                        />
                     </motion.span>
                  </nav>
               </motion.article>,
               document.body!
            )}
      </div>
   )
}
