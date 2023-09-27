import {cn} from '@/lib/utils'
import React, {ComponentPropsWithoutRef} from 'react'

type T_TabItemProps = {
   active?: boolean
   disabled?: boolean
   onClick?: () => void
} & ComponentPropsWithoutRef<'li'>
export const TabItem = ({className, children, active, disabled, onClick}: T_TabItemProps) => {
   return (
      <li
         aria-current={active ? 'page' : undefined}
         onClick={disabled ? undefined : onClick}
         tabIndex={0}
         onKeyDown={e => {
            if (e.key === 'Enter' && !disabled) onClick?.()
         }}
         className={cn(
            {
               'active rounded-lg border-gray-50 bg-primary/20 text-gray-50 md:rounded-none md:bg-transparent ':
                  active,
               'border-transparent hover:cursor-pointer hover:opacity-75': !active,
               'cursor-not-allowed text-gray-400 ': disabled,
            },
            className
         )}>
         {children}
      </li>
   )
}
