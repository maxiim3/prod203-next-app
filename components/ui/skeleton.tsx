import {cn} from '@/lib/utils'
import React, {ComponentPropsWithoutRef} from 'react'

function Skeleton(props: ComponentPropsWithoutRef<'div'>) {
   return (
      <div
         className={cn(
            'animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800',
            props.className
         )}
         {...props}
      />
   )
}

export {Skeleton}
