import {classed} from '@tw-classed/react'
import React from 'react'

const About = () => {
   return (
      <main className={'w-screen py-24'}>
         <StyledHeading
            as={'h1'}
            className={'sr-only'}>
            À propos
         </StyledHeading>
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-12 py-12 text-balance sm:px-12'}>
            <StyledHeading className={'text-center'}>Activit&eacute;</StyledHeading>
            {/*<SectionActivity />*/}
         </section>
         <hr className={'my-20 h-px w-full border-0 bg-gray-700'} />
         {/*
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-12 px-12 py-12 text-balance'}>
            <StyledHeading className={'text-center'}>Fondateurs</StyledHeading>
            <SectionFounders />
         </section>{' '}
         <hr className={'my-20 h-px w-full border-0 bg-gray-700'} />
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-12 px-12 py-12 text-balance'}>
            <StyledHeading className={'text-center'}>Fondateurs</StyledHeading>
            <SectionFounders />
         </section>
*/}
      </main>
   )
}

const StyledHeading = classed(
   'h2',
   'mb-4 w-content text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl',
   'uppercase text-balance'
)

export default About
