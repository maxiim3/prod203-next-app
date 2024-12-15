import {cn} from '@/lib/utils'
import React, {type ComponentPropsWithoutRef} from 'react'

type T_TabItemProps = {
   active?: boolean
   disabled?: boolean
   onClick?: () => void
} & ComponentPropsWithoutRef<'li'>
export const TabTitle = ({className, children, active, disabled, onClick}: T_TabItemProps) => {
   return (
      <li
         aria-current={active ? 'page' : undefined}
         onClick={disabled ? undefined : onClick}
         tabIndex={0}
         onKeyDown={e => {
            if (e.key === 'Enter' && !disabled) onClick?.()
         }}
         className={cn(
            'border-b border-transparent text-primary hover:cursor-pointer hover:opacity-75',
            active ? 'active border-primary/80 font-semibold text-white' : 'font-normal',
            disabled && 'cursor-not-allowed opacity-75',
            className
         )}>
         {children}
      </li>
   )
}
