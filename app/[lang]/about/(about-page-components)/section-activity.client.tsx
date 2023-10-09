'use client'

import {TabText, TabTitle} from '@/app/[lang]/about/(about-page-components)/tabs.ui'
import {TabType} from '@/app/[lang]/about/useTabs.hook'
import useLangParams from '@/hooks/useLangParams.hook'
import Icons from '@/lib/icons'
import {cn} from '@/lib/utils'
import {useInView} from 'framer-motion'
import Image from 'next/image'
import React, {ComponentPropsWithoutRef, useEffect, useRef} from 'react'
import {twMerge} from 'tailwind-merge'
import {create} from 'zustand'
import sectionContent from './section-content.json'

type IndexType = {activeIndex: number; setActiveIndex: (index: number) => void}
export const useTabIndex = create<IndexType>(set => ({
   // GETTER
   activeIndex: 0,

   // SETTER
   setActiveIndex: (index: number) => set({activeIndex: index}),
}))
const useDragToScroll = () => {
   const carouselRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const slider = carouselRef.current
      let isDown = false
      let startX: number
      let scrollLeft: number

      const handleMouseDown = (e: MouseEvent) => {
         isDown = true
         startX = e.pageX - (slider?.offsetLeft || 0)
         scrollLeft = slider?.scrollLeft || 0
      }

      const handleMouseLeave = () => {
         isDown = false
      }

      const handleMouseUp = () => {
         isDown = false
      }

      const handleMouseMove = (e: MouseEvent) => {
         if (!isDown) return
         console.log(window.devicePixelRatio)
         e.preventDefault()
         requestAnimationFrame(() => {
            const x = e.clientX - (slider?.offsetLeft || 0) // 👈 changed to clientX
            const walk = (x - startX) * 2 // scroll-fast
            console.log(x, walk)
            if (slider) {
               slider.scrollLeft = scrollLeft - walk
            }
         })
      }

      if (slider) {
         slider.addEventListener('mousedown', handleMouseDown)
         slider.addEventListener('mouseleave', handleMouseLeave)
         slider.addEventListener('mouseup', handleMouseUp)
         slider.addEventListener('mousemove', handleMouseMove)
      }

      return () => {
         if (slider) {
            slider.removeEventListener('mousedown', handleMouseDown)
            slider.removeEventListener('mouseleave', handleMouseLeave)
            slider.removeEventListener('mouseup', handleMouseUp)
            slider.removeEventListener('mousemove', handleMouseMove)
         }
      }
   }, [])

   return carouselRef
}

export default function SectionActivity() {
   const carouselRef = useDragToScroll()
   const tabs: TabType = sectionContent.activity
   const {activeIndex} = useTabIndex(props => props)
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
         className={twMerge(
            'relative flex aspect-auto w-screen max-w-[1600px] flex-col items-center justify-center overflow-hidden py-4 text-white xl:rounded-2xl'
         )}>
         <Image
            alt={''}
            src={'/assets/section-activity.png'}
            sizes={''}
            fill={true}
            className={'absolute left-0 top-0 object-cover object-center'}
         />
         {/* <div
            className={
               'absolute -right-6 top-0 z-40 hidden h-full w-[10vw] max-w-[180px] bg-gradient-to-l from-base-100 from-20% to-80% xl:block'
            }
         />
         <div
            className={
               'absolute -left-8 top-0 z-50 hidden h-full w-[10vw] max-w-[180px] bg-gradient-to-r from-base-100 from-20% to-80% xl:block'
            }
         />*/}
         <div
            ref={carouselRef}
            className={
               'carousel-center carousel relative w-screen cursor-grab space-x-4 p-4 active:cursor-grabbing sm:space-x-6 sm:p-6 md:space-x-8 md:p-8 xl:w-full xl:px-24'
            }>
            {Object.entries(tabs).map(([tabKey, tabValue], index) => {
               return (
                  <Card
                     key={`card-${index}`}
                     index={index}>
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
                                 'm-0 w-full max-w-[80ch] text-center font-poppins text-xs font-light !text-primary text-balance sm:text-sm'
                              }
                              key={`tab-content-${tabKey}-${index}`}>
                              {content}
                              {index !== Object.entries(tabs).length - 1 && '.'}
                           </TabText>
                        ))}
                     </main>
                  </Card>
               )
            })}
         </div>
         <footer className={'absolute bottom-3 flex w-full items-center justify-center'}>
            <div className={' mx-auto flex gap-2 '}>
               {Object.entries(tabs).map((_, index) => (
                  <span
                     key={index}
                     className={cn(
                        'h-4 w-4 rounded-full ',
                        activeIndex === index ? 'bg-primary' : 'border border-primary'
                     )}
                  />
               ))}
            </div>
         </footer>
      </div>
   )
}
const Card = ({children, index}: ComponentPropsWithoutRef<'article'> & {index: number}) => {
   const ref = useRef<HTMLDivElement>(null)

   const {setActiveIndex} = useTabIndex(props => props)

   const isInView = useInView(ref, {
      amount: 'all',
      margin: '200px',
   })

   useEffect(() => {
      if (isInView) {
         setActiveIndex(index)
      }
   }, [index, isInView, setActiveIndex])

   return (
      <article
         ref={ref}
         data-visible={isInView}
         id={String(index + 1)}
         key={index + 1}
         className="carousel-item rounded-box relative flex aspect-auto h-auto w-[calc(100%-4rem)] max-w-[625px] flex-col gap-4 bg-base-100/70 px-4 py-3 pb-4 text-center text-sm font-medium text-gray-400 shadow-sm shadow-base-100/50 drop-shadow-xl sm:py-6 md:py-7">
         {children}
      </article>
   )
}
