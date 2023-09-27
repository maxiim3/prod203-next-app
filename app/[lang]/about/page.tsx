import SectionActivity from '@/app/[lang]/about/(about-page-components)/section-activity.client'
import SectionFounders from '@/app/[lang]/about/(about-page-components)/section-founders.client'
import SectionRoaster from '@/app/[lang]/about/(about-page-components)/section-roaster.client'
import {cn} from '@/lib/utils'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import React, {ComponentPropsWithoutRef} from 'react'

const About = ({params}: I_PageI18nParams) => {
   const {lang} = params
   const staticContent_i18n = {
      en: ['Activity', 'Founders', 'Roasters'],
      fr: ['Activité', 'Fondateurs', 'Compositeurs'],
   }

   const Section = ({id, className, children}: ComponentPropsWithoutRef<'section'>) => (
      <section
         id={id}
         className={cn('flex flex-col items-center gap-12 py-12 text-balance sm:px-12', className)}>
         {children}
      </section>
   )

   const SectionTitle = ({className, children}: ComponentPropsWithoutRef<'h2'>) => (
      <h2
         className={cn(
            [
               'w-content mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-primary',
               'md:text-5xl',
               'lg:text-6xl',
            ],
            className
         )}>
         {children}
      </h2>
   )
   return (
      <main className={'w-screen py-24'}>
         <h1 className="sr-only">À propos</h1>
         <Section id={'about-section-activity'}>
            <SectionTitle>{staticContent_i18n[lang][0]}</SectionTitle>
            <SectionActivity />
         </Section>
         <hr className={'my-20 h-px w-full border-0 bg-gray-700'} />
         <Section id={'about-section-founders'}>
            <SectionTitle>{staticContent_i18n[lang][1]}</SectionTitle>
            <SectionFounders />
         </Section>
         <hr className={'my-20 h-px w-full border-0 bg-gray-700'} />
         <Section id={'about-section-roasters'}>
            <SectionTitle>{staticContent_i18n[lang][2]}</SectionTitle>
            <SectionRoaster />
         </Section>
      </main>
   )
}

export default About
