"use client"

import React, {useCallback, useReducer} from "react"
import {createPortal} from "react-dom"
import Link from "next/link"
import LanguageSelection from "@/components/navigationFeature/LanguageSelection"
import ROUTES from "@/lib/ROUTES"
import {nanoid} from "nanoid"
import StyledItem from "@/components/navigationFeature/StyledItem"

function ModalMenu({onClose}: {onClose: () => void}) {

   /*todo
   *  - [] Add close on drag menu X
   *  - [] Add no overflow and no scrolling when modal is open
   * */
   return (
      <article
         className={"md:hidden absolute top-0 left-0 w-screen h-screen bg-base-100/95 backdrop-blur-lg"}>
         <nav className={"w-full h-full flex justify-center items-end flex-col gap-8 px-4 "}>
            <ul className="menu menu-vertical items-end gap-8 ">
               {ROUTES.map(route => (
                  <StyledItem key={nanoid()}><Link onClick={onClose}
                                                   href={route.path}>{route.name}</Link></StyledItem>))}

            </ul>
            <LanguageSelection onClick={onClose} large />
         </nav>
      </article>
   )
}

export function BurgerMenuButton() {
   const [isOpen, toggleMenu] = useReducer((prevState) => !prevState, false)

   const handleClose = useCallback(toggleMenu, [toggleMenu])

   return <div className="flex-none md:hidden">
      <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current">
            {isOpen ?
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            }
         </svg>
      </button>
      {isOpen &&
         createPortal(<ModalMenu onClose={handleClose} />, document.body!)
      }
   </div>
}
