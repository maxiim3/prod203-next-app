'use client'

import {TabText, TabTitle} from '@/app/[lang]/about/(about-page-components)/tabs.ui'
import {TabType, useTabs} from '@/app/[lang]/about/useTabs.hook'
import useLangParams from '@/hooks/useLangParams.hook'
import Icons from '@/lib/icons'
import Image from 'next/image'
import React from 'react'
import sectionContent from './section-content.json'

export default function SectionActivity() {
   const tabs: TabType = sectionContent.activity
   const {activeTab, setActiveTab} = useTabs(tabs)
   const {lang} = useLangParams()

   return (
      <div
         className={
            'aspect-portrait rounded-box relative w-screen overflow-hidden border-4 border-red-400/40 py-3 text-white md:aspect-square lg:aspect-video'
         }>
         <Image
            alt={''}
            src={'/assets/section-activity.png'}
            sizes={''}
            fill={true}
            className={'absolute left-0 top-0 object-cover object-center'}
         />
         <div
            className={
               'carousel-center prose carousel rounded-box relative mx-auto w-screen space-x-6  border-8 border-blue-500'
            }>
            {Object.entries(tabs).map(([tabKey, tabValue], index) => {
               let Icon
               if (tabValue?.Icon) {
                  Icon = Icons[tabValue.Icon as keyof typeof Icons]
               }

               return (
                  <article
                     id={String(index + 1)}
                     key={index + 1}
                     className="carousel-item rounded-box  flex w-full flex-col gap-4 bg-base-100/70 px-4 py-3 pb-4 text-center text-sm font-medium text-gray-400 ">
                     <header key={`tab-title-${index}-${tabKey}`}>
                        <TabTitle
                           className={
                              'prose mx-auto flex w-fit items-center justify-center font-poppins text-white'
                           }>
                           {tabValue.Icon ? (
                              <Icon className="h-4 w-4 text-primary " />
                           ) : (
                              <Image
                                 width={16}
                                 height={16}
                                 src={tabValue.source!}
                                 className={'h-4 w-4 object-contain object-center'}
                                 alt="error loading"
                              />
                           )}
                           {tabValue.title[lang]}
                        </TabTitle>
                     </header>
                     <main
                        className={
                           'prose flex flex-col items-start  justify-start gap-1 overflow-x-auto overflow-y-scroll text-left text-balance'
                        }>
                        {tabValue.description[lang].split('. ').map((content, index) => (
                           <TabText
                              className={'my-0 w-full bg-neutral/30 font-poppins text-white'}
                              key={`tab-content-${tabKey}-${index}`}>
                              {content}
                           </TabText>
                        ))}
                     </main>
                  </article>
               )
            })}
         </div>
         <div className="relative flex w-full justify-center gap-2 py-2">
            {Object.entries(tabs).map(([tabKey, tabValue], index) => {
               let Icon
               if (tabValue?.Icon) {
                  Icon = Icons[tabValue.Icon as keyof typeof Icons]
               }
               return (
                  <a
                     key={index + 1}
                     href={`#${index + 1}`}
                     className="btn btn-xs">
                     {tabValue.Icon ? (
                        <Icon className="h-4 w-4 text-primary " />
                     ) : (
                        <Image
                           width={16}
                           height={16}
                           src={tabValue.source!}
                           className={'h-4 w-4 object-contain object-center'}
                           alt="error loading"
                        />
                     )}
                  </a>
               )
            })}
         </div>
      </div>
   )
}
