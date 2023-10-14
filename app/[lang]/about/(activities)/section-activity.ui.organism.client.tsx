'use client'

import {
   Activities,
   Activity,
   type T_ActivityEnum,
} from '@/app/[lang]/about/(activities)/activity.factory'
import {Pictogram} from '@/app/[lang]/about/(activities)/pictogram.ui.atom'
import {useActivityTabsStore} from '@/app/[lang]/about/(activities)/use-activity-tabs.store'
import {useCarousel} from '@/app/[lang]/about/(activities)/use-carousel.hook'
import {TabText} from '@/app/[lang]/about/(tabs)/tab-text.ui.atom'
import {TabTitle} from '@/app/[lang]/about/(tabs)/tab-title.ui.molecule'
import type {T_TabStore} from '@/app/[lang]/about/tab-store.generic.schema'
import useLangParams from '@/app/[lang]/use-lang-params.hook'
import {cn} from '@/lib/utils'
import {useInView} from 'framer-motion'
import Image from 'next/image'
import React, {useEffect, useRef, type ComponentPropsWithoutRef} from 'react'

type TypeOfStore = T_TabStore<T_ActivityEnum, Activity>
export default function SectionActivity() {
   const activityStore: TypeOfStore = useActivityTabsStore((store: TypeOfStore) => store)
   const carouselRef = useCarousel()
   const {lang} = useLangParams()

   return (
      <div
         className={
            'relative flex aspect-auto w-screen max-w-[1600px] flex-col items-center justify-center overflow-hidden py-4 text-white xl:rounded-2xl'
         }>
         <Image
            alt={'background-image'}
            tabIndex={-1}
            src={'/assets/section-activity.png'}
            sizes={''}
            fill={true}
            className={'absolute left-0 top-0 object-cover object-center md:object-top'}
         />
         <div
            ref={carouselRef}
            className={
               'carousel carousel-center relative w-screen cursor-grab space-x-4 p-4 active:cursor-grabbing sm:space-x-6 sm:p-6 md:space-x-8 md:p-8 xl:w-full xl:px-24'
            }>
            <>
               {[...Activities.entries()].map(([key, activity], index) => {
                  const {title, description, Icon, source}: Activity = activity
                  const activityTitle = title[lang]!
                  const activityDesc = description[lang]!

                  return (
                     <CarouselItemContainer
                        key={`card-${index}`}
                        tab={key}>
                        <header
                           key={`tab-title-${index}-${key}`}
                           className={'relative border-b border-primary/60 pb-2'}>
                           <Pictogram
                              activityIcon={Icon}
                              source={source}
                           />
                           <TabTitle
                              className={
                                 'prose mx-auto flex w-fit items-center justify-center font-poppins text-white'
                              }>
                              {activityTitle}
                           </TabTitle>
                        </header>
                        <main
                           className={
                              '  flex flex-col items-center justify-center gap-2 px-2 md:px-6'
                           }>
                           {activityDesc.split('. ').map((content, index) => (
                              <TabText
                                 className={
                                    'm-0 w-full max-w-[80ch] text-center font-poppins text-xs font-light !text-primary text-balance sm:text-sm'
                                 }
                                 key={`tab-content-${key}-${index}`}>
                                 {content}
                                 {index !== Object.entries(Activities).length - 1 && '.'}
                              </TabText>
                           ))}
                        </main>
                     </CarouselItemContainer>
                  )
               })}
            </>
         </div>
         <footer className={'absolute bottom-3 flex w-full items-center justify-center'}>
            <div className={' mx-auto flex gap-2 '}>
               <>
                  {[...Activities.entries()].map(([key, activity], index) => (
                     <span
                        key={index}
                        className={cn(
                           'h-4 w-4 rounded-full ',
                           activityStore.activeTab === key ? 'bg-primary' : 'border border-primary'
                        )}
                     />
                  ))}
               </>
            </div>
         </footer>
      </div>
   )
}
const CarouselItemContainer = ({
   children,
   tab,
}: ComponentPropsWithoutRef<'article'> & {tab: T_ActivityEnum}) => {
   const ref = useRef<HTMLDivElement>(null)

   // const {setActiveIndex} = useTabIndex(props => props)
   const {setActiveTab}: TypeOfStore = useActivityTabsStore((store: TypeOfStore) => store)

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
