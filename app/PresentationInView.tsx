"use client"

import {SectionTitle, Text} from "@/app/UI"
import {motion, stagger, useAnimate, useInView} from "framer-motion"
import React, {useEffect} from "react"
import {twMerge} from "tailwind-merge"

export default function PresentationInView() {
   const titleRef = React.useRef(null)
   const [container, animate] = useAnimate()
   const isInView = useInView(titleRef, {
      once: false,
      margin: "10px 0px 0px 0px",
      amount: "some",
   })
   const sequence = [
      ["ul", {opacity: 1}, {duration: 0.5}],
      ["li", {x: [-100, 0]}, {delay: stagger(0.1)}],
   ]
   useEffect(() => {
      if (isInView) {
         animate(sequence) // todo : fix animation
      } else {
         animate(
            "li",
            {
               opacity: 0,
               x: -100,
            },
            {duration: 0.5, delay: 1}
         )
      }
      console.log("isInView", isInView)
   }, [animate, isInView])
   return (
      <section
         id="description"
         className={"relative flex h-screen w-screen items-center justify-center"}>
         <main className={"space-y-8 px-1 sm:px-2"}>
            <SectionTitle
               as={"h2"}
               ref={titleRef}>
               Mettez votre projet entre les mains
               <span className={"text-clrPrimary-300"}>{"d'experts."}</span>
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
