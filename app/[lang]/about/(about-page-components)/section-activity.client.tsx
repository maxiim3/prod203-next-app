'use client'

import {TabItem} from '@/app/[lang]/about/(about-page-components)/tab-item'
import {TabType, useTabs} from '@/app/[lang]/about/useTabs.hook'
import useLangParams from '@/hooks/useLangParams.hook'
import Image from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'
import sectionContent from './section-content.json'

export default function SectionActivity() {
   const tabs: TabType = sectionContent.activity
   const {activeTab, setActiveTab} = useTabs(tabs)
   const {lang} = useLangParams()

   return (
      <section className={'relative w-full'}>
         <Image
            alt={''}
            src={'/assets/section-activity.png'}
            sizes={''}
            fill={true}
            className={'absolute left-0 top-0 object-cover object-center'}
         />
         <div
            className={
               'relative z-50 max-h-[700px] min-h-fit space-y-8 bg-base-100/90 md:m-12 md:h-[65vh] md:rounded-lg md:p-8 '
            }>
            <div className="pb-4 text-center text-sm font-medium text-gray-400   ">
               <ul className="-mb-px flex flex-wrap items-center justify-between gap-0.5 border-b border-gray-700 xs:flex-row xs:gap-1 md:items-end md:justify-center md:gap-1.5 ">
                  {Object.entries(tabs).map(([tabKey, tabValue], index) => (
                     <TabItem
                        key={`tab=${index}=${tabKey}`}
                        active={tabKey === activeTab}
                        onClick={() => setActiveTab(tabKey)}
                        className={twMerge(
                           'flex flex-1 scale-90 flex-col items-center justify-center px-2 text-xs tracking-wide text-balance',
                           'xs:w-20 xs:scale-100 xs:text-sm',
                           'sm:w-24 sm:p-4',
                           'md:aspect-video md:gap-1 md:rounded-t-lg md:border-b-2 md:px-1 md:pb-1 md:pt-3',
                           'lg:flex-row'
                        )}>
                        {tabValue.Icon ? (
                           <tabValue.Icon className="h-4 w-4 text-primary " />
                        ) : (
                           <Image
                              width={16}
                              height={16}
                              src={tabValue.source!}
                              className={'h-4 w-4 object-contain object-center '}
                              alt="error loading"
                           />
                        )}
                        <p>{tabValue.title[lang]}</p>
                     </TabItem>
                  ))}
               </ul>
            </div>

            <div>
               <p className="mx-auto mb-3 max-w-[75ch] px-2 pb-4 text-justify leading-relaxed tracking-wide text-gray-400 text-balance sm:px-4 sm:pb-8 md:text-lg">
                  {tabs[activeTab]?.description[lang]}
               </p>
            </div>
         </div>
      </section>
   )
}
