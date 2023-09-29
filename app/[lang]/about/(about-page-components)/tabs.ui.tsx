import {cn} from '@/lib/utils'
import React, {ComponentPropsWithoutRef} from 'react'

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
            {
               'active rounded-lg border-white/40 bg-primary/20 text-gray-50 md:rounded-none md:bg-transparent ':
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

export const TabText = ({className, children}: ComponentPropsWithoutRef<'p'>) => {
   return (
      <p
         className={cn(
            'prose mx-auto mb-3 max-w-[80ch] px-2 pb-4 text-sm font-normal leading-loose tracking-wide  text-white text-balance sm:px-4 sm:pb-8 md:text-base',
            className
         )}>
         {children}
      </p>
   )
}
