import {cn} from '@/lib/utils'
import {ComponentPropsWithRef} from 'react'

export default function SinglePageLayoutTemplate({
   children,
   className,
}: ComponentPropsWithRef<'main'>) {
   return (
      <main
         className={cn(
            'flex h-screen w-screen flex-col items-center justify-start bg-base-100 py-24',
            className
         )}>
         {children}
      </main>
   )
}
