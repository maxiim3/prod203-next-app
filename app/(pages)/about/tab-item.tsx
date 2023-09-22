import {T_Children, T_ClassName} from '@/lib/types'
import React from 'react'
import {twMerge} from 'tailwind-merge'

type T_TabItemProps = {
   active?: boolean
   disabled?: boolean
   onClick?: () => void
} & T_ClassName &
   T_Children
export const TabItem = ({className, children, active, disabled, onClick}: T_TabItemProps) => {
   return (
      <li
         aria-current={active ? 'page' : undefined}
         onClick={disabled ? undefined : onClick}
         tabIndex={0}
         onKeyDown={e => {
            if (e.key === 'Enter' && !disabled) onClick?.()
         }}
         className={twMerge(
            active
               ? 'active rounded-lg border-gray-50 bg-primary/20 text-gray-50 md:rounded-none md:bg-transparent '
               : 'border-transparent hover:cursor-pointer hover:opacity-75',
            disabled && 'cursor-not-allowed text-gray-400 ',
            className
         )}>
         {children}
      </li>
   )
}
