'use client'

import {createContext, PropsWithChildren, useCallback, useContext, useReducer} from 'react'

type contextActionType =
   | {
        type: 'SET_MENU_VISIBILITY'
        payload: boolean
     }
   | {
        type: 'CHANGE_ICON_TYPE'
        payload: 'burger' | 'cross'
     }

type contextStateType = {
   isVisible: boolean
   burgerButtonIconType: 'burger' | 'cross'
}
const reducer = (state: contextStateType, action: contextActionType) => {
   switch (action.type) {
      case 'SET_MENU_VISIBILITY':
         return {...state, isVisible: action.payload}
      case 'CHANGE_ICON_TYPE':
         return {...state, burgerButtonIconType: action.payload}
      default:
         return state
   }
}

const useProvideContext = () => {
   const [context, dispatch] = useReducer(reducer, {
      isVisible: false,
      burgerButtonIconType: 'burger',
   })

   const openMenu = () => dispatch({type: 'SET_MENU_VISIBILITY', payload: true})
   const closeMenu = () => dispatch({type: 'SET_MENU_VISIBILITY', payload: false})
   const setIconType = (type: 'burger' | 'cross') =>
      dispatch({type: 'CHANGE_ICON_TYPE', payload: type})

   const handleOpenMenu = useCallback(() => {
      setIconType('cross')
      const timeout = setTimeout(() => {
         openMenu()
      }, 25)
      return () => clearTimeout(timeout)
   }, [])

   const handleCloseMenu = useCallback(() => {
      setIconType('burger')
      const timeout = setTimeout(() => {
         closeMenu()
      }, 250)
      return () => clearTimeout(timeout)
   }, [])

   return {handleOpenMenu, handleCloseMenu, ...context}
}

const MobileNavigationContext = createContext<null | ReturnType<typeof useProvideContext>>(null)

interface MobileNavigationContextProps extends PropsWithChildren {}

export function MobileNavigationProvider({children}: PropsWithChildren<{}>) {
   // Use your custom hook to provide the context value
   const contextValue = useProvideContext()

   return (
      <MobileNavigationContext.Provider value={contextValue}>
         {children}
      </MobileNavigationContext.Provider>
   )
}

export const useMobileNavigation = () => {
   const context = useContext(MobileNavigationContext)!

   return {...context} satisfies ReturnType<typeof useProvideContext>
}
