'use client'

import {type T_ActivityEnum} from '@/app/[lang]/about/(factories)/activity.factory'
import {type T_ActivityStore} from '@/app/[lang]/about/(store)/store.types'
import {useActivityTabsStore} from '@/app/[lang]/about/(store)/use-activity-tabs.store'
import {useInView} from 'framer-motion'
import React, {useEffect, useRef, type ComponentPropsWithoutRef} from 'react'

export default function CarouselItemContainer({
   children,
   tab,
}: ComponentPropsWithoutRef<'article'> & {tab: T_ActivityEnum}) {
   const ref = useRef<HTMLDivElement>(null)

   // const {setActiveIndex} = useTabIndex(props => props)
   const {setActiveTab}: T_ActivityStore = useActivityTabsStore((store: T_ActivityStore) => store)

   const isInView = useInView(ref, {
      amount: 'all',
      margin: '200px',
   })

   useEffect(() => {
      if (isInView) {
         setActiveTab(tab)
      }
   }, [tab, isInView, setActiveTab])

   return (
      <article
         ref={ref}
         data-visible={isInView}
         id={String(tab)}
         key={tab}
         className="carousel-item rounded-box relative flex aspect-auto h-auto w-[calc(100%-4rem)] max-w-[625px] flex-col gap-4 bg-base-100/70 px-4 py-3 pb-4 text-center text-sm font-medium text-gray-400 shadow-sm shadow-base-100/50 drop-shadow-xl sm:py-6 md:py-7">
         {children}
      </article>
   )
}
