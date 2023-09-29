'use client'

import {TabText, TabTitle} from '@/app/[lang]/about/(about-page-components)/tabs.ui'
import {TabType, useTabs} from '@/app/[lang]/about/useTabs.hook'
import useLangParams from '@/hooks/useLangParams.hook'
import {T_ClassName} from '@/lib/types'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import React, {ComponentPropsWithoutRef} from 'react'
import {twMerge} from 'tailwind-merge'
import sectionContent from './section-content.json'

export default function SectionFounders({className}: T_ClassName) {
   const tabs: TabType = sectionContent.founders
   const {activeTab, setActiveTab} = useTabs(tabs)
   const {lang} = useLangParams()

   type ImageComponentProps = {
      li?: ComponentPropsWithoutRef<'li'>
      figure?: ComponentPropsWithoutRef<'figure'>
      img: ComponentPropsWithoutRef<'img'>
      name: string
      tabIndex: number
   }
   const ImageComponent = ({li, tabIndex, img, name, figure}: ImageComponentProps) => {
      console.log(tabIndex, activeTab === Object.keys(tabs)[tabIndex])
      return (
         <li
            data-selected={activeTab === Object.keys(tabs)[tabIndex]}
            onClick={() => setActiveTab(Object.keys(tabs)[tabIndex])}
            {...li}>
            <figure // todo Errot cn not working
               className={cn('h-full w-full overflow-hidden', figure?.className)}
               {...figure}>
               <Image
                  className={cn(
                     'h-full w-full object-cover saturate-50 transition group-hover:scale-110 motion-safe:duration-700',
                     // activeTab === Object.keys(tabs)[tabIndex] && 'scale-110 saturate-100',
                     'data-[selected=true]:scale-110 data-[selected=true]:saturate-100',
                     {'scale-120': activeTab === Object.keys(tabs)[tabIndex]},
                     img.className
                  )}
                  width={'187'}
                  height={'404'}
                  src={img.src!}
                  alt={img.alt!}
               />
               <figcaption>{name}</figcaption>
            </figure>
         </li>
      )
   }

   return (
      <>
         <section
            className={twMerge(
               'relative flex w-full flex-col lg:grid lg:grid-cols-2 lg:gap-2',
               className
            )}>
            <ul
               className={twMerge(
                  'flex aspect-video w-full justify-center',
                  'lg:mt-8 lg:aspect-video lg:max-h-[700px] lg:min-h-[400px] lg:w-full'
               )}>
               <ImageComponent
                  name={'Jérome'}
                  img={{src: '/assets/fondateurs/fondateurs-01-min.webp', alt: ''}}
                  tabIndex={0}
               />
               <ImageComponent
                  tabIndex={1}
                  name={'Nathan'}
                  img={{src: '/assets/fondateurs/fondateurs-02-min.webp', alt: ''}}
               />
               <ImageComponent
                  tabIndex={2}
                  name={'Sam'}
                  img={{src: '/assets/fondateurs/fondateurs-03-min.webp', alt: ''}}
               />
            </ul>
            <div
               className={
                  'relative z-50 min-h-fit space-y-8 bg-base-100/90 md:m-0  md:rounded-lg md:p-0 '
               }>
               <div className="pb-4 text-center text-sm font-medium text-gray-400 ">
                  <ul className="-mb-px flex flex-wrap items-center justify-between gap-0.5 border-b border-gray-700 xs:flex-row xs:gap-1 md:items-end md:justify-center md:gap-1.5 ">
                     {Object.entries(tabs).map(([key, value], index) => (
                        <TabTitle
                           key={`tab=${index}=${key}`}
                           active={key === activeTab}
                           onClick={() => setActiveTab(key)}
                           className={cn(
                              'flex h-8 flex-1 scale-90 flex-col items-center justify-center px-2 text-xs tracking-wide text-balance',
                              'xs:w-20 xs:scale-100 xs:text-sm',
                              'sm:w-24 sm:p-4',
                              'md:aspect-video md:gap-1 md:rounded-t-lg md:border-b-2 md:px-1 md:py-2 md:text-base',
                              'lg:flex-row'
                           )}>
                           <p>{value.title[lang]}</p>
                        </TabTitle>
                     ))}
                  </ul>
               </div>

               <div>
                  <TabText>{tabs[activeTab]?.description[lang]}</TabText>
               </div>
            </div>
         </section>
      </>
   )
}
