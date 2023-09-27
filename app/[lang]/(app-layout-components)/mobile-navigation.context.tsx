'use client'

import {usePathname} from 'next/navigation'
import {createContext, PropsWithChildren, useCallback, useContext, useEffect, useState} from 'react'

const useProvideContext = () => {
   const pathname = usePathname()

   const [modalIsOpen, setModalVisibility] = useState(false)

   const [iconType, setIconType] = useState<'burger' | 'cross'>('burger')

   /**
    * Close the menu when the route changes
    */
   useEffect(() => {
      setModalVisibility(false)
   }, [pathname])

   /**
    * Change the icon type depending on the modal state
    */
   useEffect(() => {
      if (modalIsOpen) return setIconType('cross')
      setIconType('burger')
   }, [modalIsOpen])

   /**
    * Prevent scrolling when the menu is open
    */
   useEffect(() => {
      if (modalIsOpen) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'auto'
      }
      return () => {
         document.body.style.overflow = 'auto' // Reset to default when component unmounts
      }
   }, [modalIsOpen])

   /**
    * Open the menu
    */
   const handleOpenMenu = useCallback(() => {
      setModalVisibility(true)
   }, [])

   /**
    * Close the menu
    */
   const handleCloseMenu = useCallback(() => {
      setModalVisibility(false)
   }, [])

   return {
      modalIsOpen,
      iconType,
      handleOpenMenu,
      handleCloseMenu,
   }
}

const NavigationCtx = createContext<null | ReturnType<typeof useProvideContext>>(null)

export function MobileNavigationContext({children}: PropsWithChildren<{}>) {
   // Use your custom hook to provide the context value
   const contextValue = useProvideContext()

   return <NavigationCtx.Provider value={contextValue}>{children}</NavigationCtx.Provider>
}

export const useMobileNavigation = () => {
   const context = useContext(NavigationCtx)!

   return {...context} satisfies ReturnType<typeof useProvideContext>
}
