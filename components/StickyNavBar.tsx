import React from "react"
import Link from "next/link"
import {classed} from "@tw-classed/react"


export default function StickyNavBar() {
   return (
      <header className="navbar bg-base-100 fixed top-0 left-o flex justify-between align-center">
         <span className={"w-16 sm:w-24 md:w-32"}>
            <img className={"object-contain w-full object-center"}
                 src="/assets/Prod203/203white.png" alt="Prod203" />
         </span>
         <nav className={"hidden md:flex"}>
            <ul className="menu menu-horizontal ">
               <NavLink><Link href={"#"}>Accueil</Link></NavLink>
               <NavLink><Link href={"#"}>Showcase</Link></NavLink>
               <NavLink><Link href={"#"}>À Propos</Link></NavLink>
               <NavLink><Link href={"#"}>Contacts</Link></NavLink>
            </ul>
            <LanguageSelection />
         </nav>
      </header>)
}

const NavLink = classed("li", "font-cormorant uppercase text-xl ", "md:text-xl lg:text-2xl xl:text-3xl")
const LanguageSelector = classed("span", "font-manrope uppercase text-xl xl:text-2xl", {
   variants: {
      isSelected: {
         true: "font-semibold",
         false: "font-thin",
      },
   },
   defaultVariants: {
      isSelected: false,
   },
})
type ButtonProp = {
   prop: any
}

function LanguageSelection() {

   return <article className={"space-x-2"}>
      <LanguageSelector isSelected>
         <Link href={"#"}>FR</Link>
      </LanguageSelector>
      <LanguageSelector>
         <Link
            href={"#"}>ENG</Link>
      </LanguageSelector>
   </article>
}
