import {BurgerMenuButton} from "@/components/navigationFeature/BurgerMenuButton"
import LanguageSelection from "@/components/navigationFeature/LanguageSelection"
import StyledItem from "@/components/navigationFeature/StyledItem"
import ROUTES from "@/lib/ROUTES"
import {nanoid} from "nanoid"
import Link from "next/link"
import React from "react"
import {twMerge} from "tailwind-merge"

export default function FixedHeader() {
   return (
      <header
         id={"header"}
         className={twMerge(
            "left-o align-center navbar fixed top-0 z-50 flex justify-between bg-base-100/20 px-2 backdrop-blur-sm md:px-4 lg:px-8",
            "motion-safe:animate-[fadeIn_450ms_ease-out_650ms_both]"
         )}>
         <span className={"w-16 sm:w-24 md:w-32"}>
            <img
               className={"w-full object-contain object-center"}
               src="/assets/Prod203/203white.png"
               alt="Prod203"
            />
         </span>
         <nav className={"hidden md:flex md:gap-1"}>
            <ul className="menu menu-horizontal ">
               {ROUTES.map(route => (
                  <StyledItem key={nanoid()}>
                     <Link href={route.path}>{route.name}</Link>
                  </StyledItem>
               ))}
            </ul>
            <LanguageSelection />
         </nav>
         <BurgerMenuButton />
      </header>
   )
}
