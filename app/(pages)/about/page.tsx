import SectionActivity from '@/app/(pages)/about/section-activity.client'
import SectionFounders from '@/app/(pages)/about/section-founders.client'
import SectionRoaster from '@/app/(pages)/about/section-roaster.client'
import {classed} from '@tw-classed/react'
import React from 'react'

const About = () => {
   return (
      <main className={'w-screen py-24'}>
         <$Heading className="sr-only">À propos</$Heading>
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-12 py-12 text-balance sm:px-12'}>
            <$Heading as={'h2'}>Activit&eacute;s</$Heading>
            <SectionActivity />
         </section>
         <hr className={'my-20 h-px w-full border-0 bg-gray-700'} />
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-12 py-12 text-balance sm:px-12'}>
            <$Heading
               as="h2"
               className={'text-center'}>
               Fondateurs
            </$Heading>
            <SectionFounders />
         </section>
         <hr className={'my-20 h-px w-full border-0 bg-gray-700'} />
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-12 py-12 text-balance sm:px-12'}>
            <$Heading
               as={'h2'}
               className={'text-center'}>
               Roasters
            </$Heading>
            <SectionRoaster />
         </section>
      </main>
   )
}

const $Heading = classed(
   'h1',
   'w-content mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-primary',
   'md:text-5xl',
   'lg:text-6xl'
)
export default About
