import {cn} from '@/lib/utils'
import React, {type ComponentPropsWithoutRef} from 'react'

export const SectionTitle = ({children, className}: ComponentPropsWithoutRef<'h2'>) => (
   <h2
      className={cn(
         'text-center font-poppins uppercase tracking-wider text-primary text-balance',
         ' max-w-[25ch]',
         'w-content mx-auto text-center text-4xl font-thin uppercase sm:text-5xl ',
         className
      )}>
      {children}
   </h2>
)
