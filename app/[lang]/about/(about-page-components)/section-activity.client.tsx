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

   function Pictogram({value}: {value: TabType[0]}) {
      return (
         <div
            className={
               'absolute left-5 flex aspect-square w-7 items-center justify-center rounded-full bg-base-200/50'
            }>
            {(() => {
               if (value?.Icon) {
                  const Icon = Icons[value.Icon as keyof typeof Icons]
                  return <Icon className="h-4 w-4 text-primary " />
               }
               return (
                  <Image
                     width={16}
                     height={16}
                     src={value.source!}
                     className={'h-4 w-4 object-contain object-center'}
                     alt="error loading"
                  />
               )
            })()}
         </div>
      )
   }

   return (
      <div
         className={
            'aspect-portrait relative flex w-screen flex-col items-center justify-center overflow-hidden py-4 text-white md:aspect-square lg:aspect-video'
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
               'carousel-center carousel relative w-screen space-x-4 p-4 sm:space-x-6 sm:p-6 md:space-x-8 md:p-8'
            }>
            {Object.entries(tabs).map(([tabKey, tabValue], index) => {
               return (
                  <article
                     id={String(index + 1)}
                     key={index + 1}
                     className="carousel-item rounded-box relative flex aspect-auto h-auto w-[calc(100%-4rem)] max-w-[625px] flex-col gap-4 bg-base-100/50 px-4 py-3 pb-4 text-center text-sm font-medium text-gray-400 shadow-sm shadow-base-100/50 drop-shadow-lg sm:py-6 md:py-7">
                     <header
                        key={`tab-title-${index}-${tabKey}`}
                        className={'relative border-b border-primary/60 pb-2'}>
                        <Pictogram value={tabValue} />
                        <TabTitle
                           className={
                              'prose mx-auto flex w-fit items-center justify-center font-poppins text-white'
                           }>
                           {tabValue.title[lang]}
                        </TabTitle>
                     </header>
                     <main
                        className={
                           '  flex flex-col items-center justify-center gap-2 px-2 md:px-6'
                        }>
                        {tabValue.description[lang].split('. ').map((content, index) => (
                           <TabText
                              className={
                                 'm-0 w-full max-w-[80ch] text-left font-poppins text-xs font-light !text-primary sm:text-sm'
                              }
                              key={`tab-content-${tabKey}-${index}`}>
                              {content}
                              {index !== Object.entries(tabs).length - 1 && '.'}
                           </TabText>
                        ))}
                     </main>
                  </article>
               )
            })}
         </div>
         {/*<footer className="relative flex w-full justify-center gap-2 py-2">*/}
         {/*   {Object.entries(tabs).map(([tabKey, tabValue], index) => {*/}
         {/*      let Icon*/}
         {/*      if (tabValue?.Icon) {*/}
         {/*         Icon = Icons[tabValue.Icon as keyof typeof Icons]*/}
         {/*      }*/}
         {/*      return (*/}
         {/*         <a*/}
         {/*            key={index + 1}*/}
         {/*            href={`#${index + 1}`}*/}
         {/*            className="btn btn-xs">*/}
         {/*            {tabValue.Icon ? (*/}
         {/*               <Icon className="h-4 w-4 text-primary " />*/}
         {/*            ) : (*/}
         {/*               <Image*/}
         {/*                  width={16}*/}
         {/*                  height={16}*/}
         {/*                  src={tabValue.source!}*/}
         {/*                  className={'h-4 w-4 object-contain object-center'}*/}
         {/*                  alt="error loading"*/}
         {/*               />*/}
         {/*            )}*/}
         {/*         </a>*/}
         {/*      )*/}
         {/*   })}*/}
         {/*</footer>*/}
      </div>
   )
}
