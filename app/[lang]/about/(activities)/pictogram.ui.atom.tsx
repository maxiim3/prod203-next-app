import type {Activity} from '@/app/[lang]/about/(activities)/activity.factory'
import Icons from '@/lib/icons'
import Image from 'next/image'
import React from 'react'

export function Pictogram({
   activityIcon,
   source,
}: {
   activityIcon?: (typeof Activity.prototype)['Icon']
   source?: (typeof Activity.prototype)['source']
}) {
   return (
      <div
         className={
            'absolute left-5 flex aspect-square w-7 items-center justify-center rounded-full bg-base-200/50'
         }>
         {(() => {
            if (activityIcon) {
               const Icon = Icons[activityIcon as keyof typeof Icons]
               return <Icon className="h-4 w-4 text-primary " />
            }
            return (
               <Image
                  width={16}
                  height={16}
                  src={source!}
                  className={'h-4 w-4 object-contain object-center'}
                  alt="error loading"
               />
            )
         })()}
      </div>
   )
}
