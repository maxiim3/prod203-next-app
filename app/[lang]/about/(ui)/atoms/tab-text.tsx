import {cn} from '@/lib/utils'
import React, {type ComponentPropsWithoutRef} from 'react'

export const TabText = ({className, children}: ComponentPropsWithoutRef<'p'>) => {
   return <p className={cn(' text-sm font-normal tracking-wide ', className)}>{children}</p>
}
