import {cn} from '@/lib/utils'
import React, {type ComponentPropsWithoutRef} from 'react'

function Skeleton(props: ComponentPropsWithoutRef<'div'>) {
   return (
      <div
         className={cn('animate-pulse rounded-md bg-neutral-400', props.className)}
         {...props}
      />
   )
}

export {Skeleton}
