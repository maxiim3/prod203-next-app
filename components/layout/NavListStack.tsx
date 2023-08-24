import React, {PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

interface NavListStackProps extends PropsWithChildren {
   className?: string
   props?: any
}

export const NavListStack = ({children, className, ...props}: NavListStackProps) => (
   <ul
      className={twMerge('flex w-144 select-none flex-row justify-center gap-4', className)}
      {...props}>
      {children}
   </ul>
)
