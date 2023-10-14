import {cn} from '@/lib/utils'
import React, {type ComponentPropsWithoutRef} from 'react'

export default function Container({id, className, children}: ComponentPropsWithoutRef<'section'>) {
   return (
      <section
         id={id}
         className={cn('z-0 flex flex-col items-center gap-12 py-8 text-balance ', className)}>
         {children}
      </section>
   )
}
