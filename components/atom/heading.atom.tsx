import {T_Children, T_ClassName} from '@/lib/types'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export function Heading({className, children}: T_ClassName & T_Children) {
   return (
      <h1
         className={twMerge(
            'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl',
            'text-balance',
            className
         )}>
         {children}
      </h1>
   )
}
