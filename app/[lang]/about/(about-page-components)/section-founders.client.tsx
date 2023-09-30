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
      isActive: boolean
      handleSelection: () => void
   }
   const ImageComponent = ({
      li,
      tabIndex,
      img,
      name,
      figure,
      handleSelection,
      isActive,
   }: ImageComponentProps) => {
      // console.log(tabIndex, activeTab === Object.keys(tabs)[tabIndex])
      return (
         <li
            className={'group hover:cursor-pointer'}
            data-selected={activeTab === Object.keys(tabs)[tabIndex]}
            onClick={handleSelection}
            {...li}>
            <figure // todo Error cn not working
               className={cn('h-full w-full overflow-hidden', figure?.className)}
               {...figure}>
               <Image
                  data-selected={isActive}
                  className={cn(
                     'group:transition-all h-full w-full scale-100 object-cover saturate-50 group-hover:scale-110 motion-safe:duration-700',
                     isActive && 'scale-110 saturate-100',
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
                  tabIndex={0}
                  name={'Jérome'}
                  isActive={activeTab === Object.keys(tabs)[0]}
                  handleSelection={() => setActiveTab(Object.keys(tabs)[0])}
                  img={{src: '/assets/fondateurs/fondateurs-01-min.webp', alt: ''}}
               />
               <ImageComponent
                  isActive={activeTab === Object.keys(tabs)[1]}
                  tabIndex={1}
                  handleSelection={() => setActiveTab(Object.keys(tabs)[1])}
                  name={'Nathan'}
                  img={{src: '/assets/fondateurs/fondateurs-02-min.webp', alt: ''}}
               />
               <ImageComponent
                  tabIndex={2}
                  isActive={activeTab === Object.keys(tabs)[2]}
                  name={'Sam'}
                  handleSelection={() => setActiveTab(Object.keys(tabs)[2])}
                  img={{src: '/assets/fondateurs/fondateurs-03-min.webp', alt: ''}}
               />
            </ul>
            <article
               className={
                  'relative z-50 min-h-fit space-y-4 bg-base-100/90 md:m-0 md:space-y-8  md:rounded-lg md:p-0 '
               }>
               <header
                  className="pt-4 text-center font-poppins text-sm font-medium text-primary
               ">
                  <ul className="flex flex-wrap items-center justify-between border-b border-gray-700 xs:flex-row md:items-end md:justify-center md:gap-1.5 ">
                     {Object.entries(tabs).map(([key, value], index) => (
                        <TabTitle
                           key={`tab-${index}-${key}`}
                           active={key === activeTab}
                           onClick={() => setActiveTab(key)}
                           className={cn(
                              'flex flex-1 items-center justify-center py-1 text-center text-xs xs:text-sm sm:tracking-wide md:py-3 md:text-base',
                              'hover:bg-base-200'
                           )}>
                           <p>{value.title[lang]}</p>
                        </TabTitle>
                     ))}
                  </ul>
               </header>
               <main className={' flex flex-col items-center justify-center gap-2 px-2 md:px-6'}>
                  {tabs[activeTab]?.description[lang].split('. ').map((content, index) => (
                     <TabText
                        className={
                           'prose m-0 w-full max-w-[80ch] font-poppins font-light !text-primary text-balance'
                        }
                        key={`tab-content-${index}`}>
                        {content}
                     </TabText>
                  ))}
               </main>
            </article>
         </section>
      </>
   )
}
