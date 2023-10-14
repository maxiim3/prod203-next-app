'use client'

import {TabText, TabTitle, Tooltip} from '@/app/[lang]/about/(about-page-components)/tabs.ui'
import {useTabs, type TabType} from '@/app/[lang]/about/useTabs.hook'
import useLangParams from '@/hooks/useLangParams.hook'
import {type T_ClassName} from '@/lib/types'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, {type ComponentPropsWithoutRef} from 'react'
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
      <section
         className={twMerge(
            'relative flex w-full max-w-[1600px] flex-col lg:grid lg:grid-cols-2 lg:gap-2',
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
                     {tabs[activeTab]?.description[lang].length - 1 === index ? '' : '.'}
                  </TabText>
               ))}
               <aside className={'w-full'}>
                  <Tooltip
                     className={'tooltip-primary tooltip-bottom font-normal text-primary-content'}
                     message={lang === 'en' ? 'Open in a new tab' : 'Ouvrir dans un nouvel onglet'}>
                     {activeTab === 'Jerome' && (
                        <TabText
                           className={'flex w-fit items-center justify-start gap-1 text-primary'}>
                           <span>
                              <svg
                                 width="15"
                                 height="15"
                                 viewBox="0 0 15 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                                    fill="currentColor"></path>
                              </svg>
                           </span>
                           <Link
                              title={
                                 lang === 'en'
                                    ? 'Open in a new tab'
                                    : 'Ouvrir dans un nouvel onglet'
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              type={'external'}
                              className={
                                 'prose m-0 w-full font-poppins text-sm font-normal tracking-wide !text-primary text-balance visited:opacity-70 visited:hover:opacity-100'
                              }
                              href={'https://www.jeromekuhn.com/fr/medias/'}>
                              {lang === 'en'
                                 ? "Jérôme Khun's Official website"
                                 : 'Site officiel de Jérôme Khun'}
                           </Link>
                        </TabText>
                     )}
                     {activeTab === 'Nathan' && (
                        <TabText
                           className={'flex w-fit items-center justify-start gap-1 text-primary'}>
                           <span>
                              <svg
                                 width="15"
                                 height="15"
                                 viewBox="0 0 15 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                                    fill="currentColor"></path>
                              </svg>
                           </span>
                           <Link
                              title={
                                 lang === 'en'
                                    ? 'Open in a new tab'
                                    : 'Ouvrir dans un nouvel onglet'
                              }
                              className={
                                 'prose m-0 w-full font-poppins text-sm font-normal tracking-wide !text-primary text-balance visited:opacity-70 visited:hover:opacity-100'
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              type={'external'}
                              href={'https://nathanstornetta.com/'}>
                              {lang === 'en'
                                 ? "Nathan Stornetta's Official website"
                                 : 'Site officiel de Nathan Stornetta'}
                           </Link>
                        </TabText>
                     )}
                  </Tooltip>
               </aside>
            </main>
         </article>
      </section>
   )
}
