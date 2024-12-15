'use client'

import {Activity} from '@/app/[lang]/about/(factories)/activity.factory'
import {useCarousel} from '@/app/[lang]/about/(hooks)/use-carousel.hook'
import type {T_ActivityStore} from '@/app/[lang]/about/(store)/store.types'
import {useActivityTabsStore} from '@/app/[lang]/about/(store)/use-activity-tabs.store'
import {Pictogram} from '@/app/[lang]/about/(ui)/atoms/pictogram'
import {TabText} from '@/app/[lang]/about/(ui)/atoms/tab-text'
import {TabTitle} from '@/app/[lang]/about/(ui)/atoms/tab-title'
import CarouselItemContainer from '@/app/[lang]/about/(ui)/molecules/carousel-item-container.client'
import useLangParams from '@/app/[lang]/use-lang-params.hook'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function SectionActivity() {
   const activeTab: T_ActivityStore['activeTab'] = useActivityTabsStore(
      (store: T_ActivityStore) => store.activeTab
   )
   const getALlActivities: T_ActivityStore['getAll'] = useActivityTabsStore(
      (store: T_ActivityStore) => store.getAll
   )
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
               {[...getALlActivities().entries()].map(([key, activity], activityIndex) => {
                  const {title, description, Icon, source}: Activity = activity
                  const activityTitle = title[lang]!
                  const activityDesc = description[lang]!

                  return (
                     <CarouselItemContainer
                        key={`card-${activityIndex}`}
                        tab={key}>
                        <header
                           key={`tab-title-${activityIndex}-${key}`}
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
                           {activityDesc.split('. ').map((content, paragraphIndex) => {
                              const maxIndex: number = activityDesc.split('. ').length - 1

                              return (
                                 <TabText
                                    className={
                                       'm-0 w-full max-w-[80ch] text-center font-poppins text-xs font-light !text-primary text-balance sm:text-sm'
                                    }
                                    key={`tab-content-${key}-${paragraphIndex}`}>
                                    {content}
                                    {paragraphIndex !== maxIndex && '.'}
                                 </TabText>
                              )
                           })}
                        </main>
                     </CarouselItemContainer>
                  )
               })}
            </>
         </div>
         <footer className={'absolute bottom-3 flex w-full items-center justify-center'}>
            <div className={' mx-auto flex gap-2 '}>
               <>
                  {[...getALlActivities().entries()].map(([key, activity], index) => (
                     <span
                        key={index}
                        className={cn(
                           'h-4 w-4 rounded-full ',
                           activeTab === key ? 'bg-primary' : 'border border-primary'
                        )}
                     />
                  ))}
               </>
            </div>
         </footer>
      </div>
   )
}
