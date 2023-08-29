import React, {PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

interface NavListStackProps extends PropsWithChildren {
   className?: string
   props?: any
}

export const NavUL = ({children, className, ...props}: NavListStackProps) => (
   <ul
      className={twMerge('max-w-144 flex select-none flex-row justify-center gap-4', className)}
      {...props}>
      {children}
   </ul>
)
