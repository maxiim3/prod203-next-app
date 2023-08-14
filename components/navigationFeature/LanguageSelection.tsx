"use client"

import {classed} from "@tw-classed/react"
import {usePathname} from "next/navigation"
import Link from "next/link"
import React from "react"

export default function LanguageSelection({large, onClick}: {large?: boolean, onClick?: () => void}) {
   const pathname = usePathname()

   return (<article className={"space-x-2"}>
      <LanguageSelector onClick={onClick} large={large || false} isSelected={!pathname.includes("eng")}>
         <Link href={"/"}>FR</Link>
      </LanguageSelector>
      <LanguageSelector onClick={onClick} large={large || false} isSelected={pathname.includes("eng")}>
         <Link
            href={"/eng/"}>ENG</Link>
      </LanguageSelector>
   </article>)
}


export const LanguageSelector = classed("span", "font-manrope uppercase md:text-base lg:text-lg xl:text-xl", {
   variants: {
      isSelected: {
         true: "font-semibold",
         false: "font-thin",
      },
      large: {
         true: "text-2xl",
      },
   },
   defaultVariants: {
      isSelected: false,
   },
})
