import React, {type PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

interface NavItemProps extends PropsWithChildren {
   className?: string
   active?: boolean
   props?: any
}

export const NavigationItem = ({children, active, className, ...props}: NavItemProps) => (
   <li
      className={twMerge(
         'relative font-poppins text-xl font-extralight uppercase tracking-wide text-primary',
         // 'before:content[""] before:absolute before:-bottom-2 before:w-full before:origin-left before:scale-0 before:border before:border-primary/40',
         'hover:text-primary/40',
         'delay-[0.025s] duration-200 before:duration-700 motion-safe:transition-all ',
         // 'before:delay-75 hover:before:scale-100 motion-safe:before:transition-all',
         active && 'select-none font-bold text-opacity-80 ',
         className
      )}
      {...props}>
      {children}
   </li>
)

interface NavListStackProps extends PropsWithChildren {
   className?: string
   props?: any
}

export const NavigationList = ({children, className, ...props}: NavListStackProps) => (
   <ul
      className={twMerge('max-w-144 flex select-none flex-row justify-center gap-4', className)}
      {...props}>
      {children}
   </ul>
)
