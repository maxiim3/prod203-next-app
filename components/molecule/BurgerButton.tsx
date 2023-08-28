'use client'

import {useMobileNavigation} from '@/components/organism/MobileNavigationProvider'
import React from 'react'

const BurgerButton = () => {
   const {iconType, handleOpenMenu, handleCloseMenu, modalIsOpen} = useMobileNavigation()

   return (
      <button
         className="btn btn-square btn-ghost"
         onClick={() => (modalIsOpen ? handleCloseMenu() : handleOpenMenu())}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current">
            {(() => {
               switch (iconType) {
                  case 'burger':
                     return (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     )
                  case 'cross':
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
   )
}
export default BurgerButton
