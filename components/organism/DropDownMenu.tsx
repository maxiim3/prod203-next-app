'use client'

import BurgerButton from '@/components/molecule/BurgerButton'
import MenuPortal from '@/components/organism/MenuPortal'
import useAnimateMenu from '@/hooks/useAnimateMenu'
import React from 'react'
import {createPortal} from 'react-dom'

export default function DropDownMenu() {
   const {modalIsVisible} = useAnimateMenu()

   return (
      <div className="flex-none md:hidden">
         {/*Burger Button Trigger*/}
         <BurgerButton />
         {modalIsVisible && createPortal(<MenuPortal />, document.body!)}
      </div>
   )
}
