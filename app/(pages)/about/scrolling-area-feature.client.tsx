'use client'

import TeamMemberCard from '@/app/(pages)/about/team-member-card.client'
import {Flex, Section} from '@radix-ui/themes'
import React, {useEffect, useRef, useState} from 'react'
import {twMerge} from 'tailwind-merge'

export default function ScrollingAreaFeature() {
   const section1 = useRef<HTMLDivElement>(null)
   const section2 = useRef<HTMLDivElement>(null)
   const section3 = useRef<HTMLDivElement>(null)

   const [selectedSection, setSelectedSection] = useState<HTMLDivElement | null>(null)

   useEffect(() => {
      if (!selectedSection) return

      const sectionTopPos = selectedSection.offsetTop

      if (window.innerWidth < 1024)
         return window.scrollTo({top: sectionTopPos - 200, behavior: 'smooth'})

      const offsetTop = 312 // depends on the section header height
      return window.scrollTo({top: sectionTopPos - offsetTop, behavior: 'smooth'})
   }, [selectedSection])
   const scrollToSection = (section: HTMLDivElement) => {
      setSelectedSection(section)
   }

   return (
      <section className={'flex w-screen flex-col bg-gray-100/40 lg:flex-row'}>
         <div
            className={twMerge(
               ' sticky -top-80 h-full w-screen lg:top-80 lg:w-[50vw]',
               'grid grid-cols-3 gap-x-1',
               'border-4 border-dashed border-pink-400'
            )}>
            <div onClick={() => scrollToSection(section1.current!)}>
               <TeamMemberCard
                  isSelected={selectedSection?.id === '1'}
                  firstName={'Jérôme'}
                  lastName={'Kuhn'}
                  imageSrc="/buddy-placeholder-vertical.jpg"
                  role={['Direction', 'Artistique']}
               />
            </div>
            <div onClick={() => scrollToSection(section2.current!)}>
               <TeamMemberCard
                  isSelected={selectedSection?.id === '2'}
                  firstName={'Nathan'}
                  lastName={'Sornetta'}
                  imageSrc="/buddy-placeholder-vertical.jpg"
                  role={['Arrangement', 'Composition']}
               />
            </div>
            <div onClick={() => scrollToSection(section3.current!)}>
               <TeamMemberCard
                  isSelected={selectedSection?.id === '3'}
                  firstName={'Samuel'}
                  lastName={'Briand'}
                  imageSrc="/buddy-placeholder-vertical.jpg"
                  role={['Sound Design', 'Post-Production']}
               />{' '}
            </div>
         </div>
         {/*Bellow s the scrolling area*/}
         <Flex
            direction={'column'}
            className={'w-full bg-blue-600/40 lg:w-[50vw]'}>
            <Section
               id={'1'}
               ref={section1}
               className={'h-[600px] w-full border-8 border-dashed  border-blue-400'}
            />
            <Section
               id="2"
               ref={section2}
               className={'h-[600px] w-full border-8 border-dashed  border-blue-400'}
            />
            <Section
               id={'3'}
               ref={section3}
               className={'h-[600px] w-full border-8 border-dashed  border-blue-400'}
            />
         </Flex>
      </section>
   )
}
