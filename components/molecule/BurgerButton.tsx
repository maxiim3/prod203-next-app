'use client'

import useAnimateMenu from '@/hooks/useAnimateMenu'
import React from 'react'

const BurgerButton = () => {
   const {iconType, setIconType} = useAnimateMenu()

   return (
      <button
         className="btn btn-square btn-ghost"
         onClick={() => setIconType(prev => (prev === 'burger' ? 'cross' : 'burger'))}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
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
