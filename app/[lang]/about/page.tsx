import SectionActivity from '@/app/[lang]/about/(about-page-components)/section-activity.client'
import SectionFounders from '@/app/[lang]/about/(about-page-components)/section-founders.client'
import SectionRoaster from '@/app/[lang]/about/(about-page-components)/section-roaster.client'
import {SectionTitle} from '@/components/section-title'
import {cn} from '@/lib/utils'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import React, {ComponentPropsWithoutRef} from 'react'

const About = ({params}: I_PageI18nParams) => {
   const {lang} = params
   const staticContent_i18n = {
      en: ['Activity', 'Founders', 'Roasters'],
      fr: ['Activités', 'Fondateurs', 'Compositeurs'],
   }
   /**
    * todo :
    *  - Titre des sections : Utiliser les meme typo que page accueil et reduire la taille
    *  - Fond de chaque sestion plus transparent. + augmenter le border-radius
    *  - texte des contenus plus petits en grand ecrans -> passer le texte en blanc
    *  -
    **/
   const Section = ({id, className, children}: ComponentPropsWithoutRef<'section'>) => (
      <section
         id={id}
         className={cn('flex flex-col items-center gap-12 py-12 text-balance sm:px-12', className)}>
         {children}
      </section>
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
