"use client"

import {SectionTitle, Text} from "@/app/UI"
import {motion, stagger, useAnimate, useInView} from "framer-motion"
import React, {useEffect, useRef} from "react"
import {twMerge} from "tailwind-merge"

export default function PresentationInView() {
   const trigger = useRef(null)
   const isInView = useInView(trigger, {once: true})

   const [titleRef, animateTitle] = useAnimate()
   const [container, animateContainer] = useAnimate()

   const DELAY = useRef(0.6)
   const DURATION = useRef(0.6)
   const OFFSET = useRef([window.innerWidth / 3, 0])

   useEffect(() => {
      if (isInView) {
         animateTitle(
            titleRef.current,
            {
               x: OFFSET.current,
               opacity: [0, 1],
            },
            {
               duration: DELAY.current,
               delay: DELAY.current / 2,
            }
         )
         animateContainer(
            "li",
            {
               x: OFFSET.current,
               opacity: [0, 1],
            },
            {
               duration: DELAY.current,
               delay: stagger(DURATION.current / 2, {
                  startDelay: DELAY.current + DURATION.current / 2,
                  from: "first",
                  ease: "easeOut",
               }),
            }
         )
      } else {
         animateTitle(
            titleRef.current,
            {
               opacity: 0,
               x: -100,
            },
            {duration: 0.5, delay: 1}
         )
         animateContainer(
            "li",
            {
               opacity: 0,
               x: -100,
            },
            {duration: 0.5, delay: 1}
         )
      }
      console.log("isInView", isInView)
   }, [animateContainer, animateTitle, isInView, titleRef])
   return (
      <section
         id={"description"}
         className={"relative flex h-screen w-screen items-center justify-center"}>
         <div
            ref={trigger}
            tabIndex={-1}
            aria-hidden={true}
            className={"invisible absolute top-48 z-0 h-4 w-screen select-none bg-success "}
         />
         <main className={"space-y-8 px-1 sm:px-2"}>
            <SectionTitle
               as={"h2"}
               ref={titleRef}>
               Mettez votre projet entre les mains
               <span className={"text-clrPrimary-300"}>{" d'experts."}</span>
            </SectionTitle>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <ul
               ref={container}
               className={"flex flex-col items-center justify-center gap-4"}>
               {[
                  "Chez Jamais 203 Productions, nous fusionnons passion et expertise pour créer des contenus sonores",
                  "Nous vous accompagnerons de l'idée initiale à la réalisation finale, garantissant une réponse à vos exigences les plus élevées.",
               ].map((text, index) => (
                  <Text
                     as={"li"}
                     className={"list-none"}
                     key={index}>
                     {text}
                  </Text>
               ))}
            </ul>
         </main>
      </section>
   )
}
