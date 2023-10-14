import {cn} from '@/lib/utils'
import React, {type ComponentPropsWithoutRef} from 'react'

export const Tooltip = ({
   children,
   className,
   message,
}: ComponentPropsWithoutRef<'span'> & {message: string}) => {
   return (
      <span
         data-tip={message}
         className={cn('tooltip', className)}>
         {children}
      </span>
   )
}
