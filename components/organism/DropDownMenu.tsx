'use client'

import BurgerButton from '@/components/molecule/BurgerButton'
import MenuPortal from '@/components/organism/MenuPortal'
import {useMobileNavigation} from '@/components/organism/MobileNavigationProvider'
import useAnimateMenu from '@/hooks/useAnimateMenu'
import React from 'react'
import {createPortal} from 'react-dom'

export default function DropDownMenu() {
   const {isVisible} = useMobileNavigation()

   console.log(isVisible)
   return (
      <div className="flex-none md:hidden">
         {/*Burger Button Trigger*/}
         <BurgerButton />
         {isVisible && createPortal(<MenuPortal />, document.body!)}
      </div>
   )
}
