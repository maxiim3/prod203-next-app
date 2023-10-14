'use client'

import type {T_FounderEnum} from '@/app/[lang]/about/(factories)/founder.factory'
import {Founder, Founders, Zod_FounderEnum} from '@/app/[lang]/about/(factories)/founder.factory'
import type {T_FounderStore} from '@/app/[lang]/about/(store)/store.types'
import {useFounderTabsStore} from '@/app/[lang]/about/(store)/use-founder-tabs.store'
import ExternalLink from '@/app/[lang]/about/(ui)/atoms/external-link'
import {TabText} from '@/app/[lang]/about/(ui)/atoms/tab-text'
import {TabTitle} from '@/app/[lang]/about/(ui)/atoms/tab-title'
import {Tooltip} from '@/app/[lang]/about/(ui)/atoms/tooltip'
import FounderImage from '@/app/[lang]/about/(ui)/molecules/founder-image.client'
import useLangParams from '@/app/[lang]/use-lang-params.hook'
import {type T_ClassName} from '@/lib/types'
import {cn} from '@/lib/utils'
import {ExternalLinkIcon} from 'lucide-react'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function SectionFounders({className}: T_ClassName) {
   const founderStore: T_FounderStore = useFounderTabsStore((store: T_FounderStore) => store)
   const {lang} = useLangParams()

   const isActive = (key: T_FounderEnum) => founderStore.activeTab === key

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
            <FounderImage
               founderKey={Zod_FounderEnum.Values.Jerome}
               img={{
                  src: '/assets/fondateurs/fondateurs-01-min.webp',
                  alt: '',
               }}
            />
            <FounderImage
               founderKey={Zod_FounderEnum.Values.Nathan}
               img={{
                  src: '/assets/fondateurs/fondateurs-02-min.webp',
                  alt: '',
               }}
            />
            <FounderImage
               founderKey={Zod_FounderEnum.Values.Sam}
               img={{
                  src: '/assets/fondateurs/fondateurs-03-min.webp',
                  alt: '',
               }}
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
                  <>
                     {[...Founders.entries()].map(([key, founder], index) => {
                        const {title, description}: Founder = founder
                        const founderName = title[lang]!
                        const founderDescription = description[lang]!

                        return (
                           <TabTitle
                              key={`tab-${index}-${key}`}
                              active={key === founderStore.activeTab}
                              onClick={() => founderStore.setActiveTab(key)}
                              className={cn(
                                 'flex flex-1 items-center justify-center py-1 text-center text-xs xs:text-sm sm:tracking-wide md:py-3 md:text-base',
                                 'hover:bg-base-200'
                              )}>
                              <p>{founderName}</p>
                           </TabTitle>
                        )
                     })}
                  </>
               </ul>
            </header>
            <main className={' flex flex-col items-center justify-center gap-2 px-2 md:px-6'}>
               <>
                  {[...Founders.entries()]
                     .filter(([key, _]) => founderStore.activeTab === key)
                     .map(([key, founder], index) => {
                        const {title, description}: Founder = founder
                        const founderName = title[lang]!
                        const founderDescription = description[lang]!

                        return (
                           <TabText
                              className={
                                 'prose m-0 w-full max-w-[80ch] font-poppins font-light !text-primary text-balance'
                              }
                              key={`tab-content-${index}`}>
                              {founderDescription}
                              {/*{founderDescription.length - 1 === index ? '' : '.'}*/}
                           </TabText>
                        )
                     })}
               </>
               <aside className={'w-full'}>
                  <Tooltip
                     className={'tooltip-primary tooltip-bottom font-normal text-primary-content'}
                     message={lang === 'en' ? 'Open in a new tab' : 'Ouvrir dans un nouvel onglet'}>
                     {founderStore.activeTab === Zod_FounderEnum.Values.Jerome && (
                        <TabText
                           className={'flex w-fit items-center justify-start gap-1 text-primary'}>
                           <ExternalLinkIcon />
                           <ExternalLink
                              lang={lang}
                              href={'https://www.jeromekuhn.com'}
                              name={Founders.get(Zod_FounderEnum.Values.Jerome)?.title[lang]!}
                           />
                        </TabText>
                     )}
                     {founderStore.activeTab === Zod_FounderEnum.Values.Nathan && (
                        <TabText
                           className={'flex w-fit items-center justify-start gap-1 text-primary'}>
                           <ExternalLinkIcon />
                           <ExternalLink
                              lang={lang}
                              href={'https://nathanstornetta.com/'}
                              name={Founders.get(Zod_FounderEnum.Values.Nathan)?.title[lang]!}
                           />
                        </TabText>
                     )}
                  </Tooltip>
               </aside>
            </main>
         </article>
      </section>
   )
}
