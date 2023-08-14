import React from "react"
import Link from "next/link"
import LanguageSelection from "@/components/navigationFeature/LanguageSelection"
import {BurgerMenuButton} from "@/components/navigationFeature/BurgerMenuButton"
import ROUTES from "@/lib/ROUTES"
import {nanoid} from "nanoid"
import StyledItem from "@/components/navigationFeature/StyledItem"
import {twMerge} from "tailwind-merge"


export default function FixedHeader() {

   return (
      <header
         id={"header"}
         className={twMerge("z-50 bg-base-100/20 backdrop-blur-sm navbar fixed top-0 left-o flex justify-between align-center px-2 md:px-4 lg:px-8", "motion-safe:animate-[fadeIn_1200ms_ease-out_950ms_both]")}>
         <span className={"w-16 sm:w-24 md:w-32"}>
            <img className={"object-contain w-full object-center"}
                 src="/assets/Prod203/203white.png" alt="Prod203" />
         </span>
         <nav className={"hidden md:flex md:gap-1"}>
            <ul className="menu menu-horizontal ">
               {ROUTES.map(route => (
                  <StyledItem key={nanoid()}><Link href={route.path}>{route.name}</Link></StyledItem>))}
            </ul>
            <LanguageSelection />
         </nav>
         <BurgerMenuButton />
      </header>)
}


