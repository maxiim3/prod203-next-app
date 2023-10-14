import SectionActivity from '@/app/[lang]/about/(activities)/section-activity.ui.organism.client'
import SectionFounders from '@/app/[lang]/about/(founders)/section-founders.ui.organism.client'
import AboutPageLoader from '@/app/[lang]/about/loading'
import {SectionTitle} from '@/components/section-title'
import {cn} from '@/lib/utils'
import React, {Suspense, type ComponentPropsWithoutRef} from 'react'

import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'

const About = ({params}: T_I18nPageParam) => {
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
   const Container = ({id, className, children}: ComponentPropsWithoutRef<'section'>) => (
      <section
         id={id}
         className={cn('z-0 flex flex-col items-center gap-12 py-8 text-balance ', className)}>
         {children}
      </section>
   )

   return (
      <Suspense fallback={<AboutPageLoader />}>
         <main className={'z-0 w-screen py-24'}>
            <h1 className="sr-only">À propos</h1>
            <Container id={'about-section-activity'}>
               <SectionTitle>{staticContent_i18n[lang][0]}</SectionTitle>
               <SectionActivity />
            </Container>

            {/*<hr className={'my-20 h-px w-full border-0 bg-gray-700'} />*/}
            <Container id={'about-section-founders'}>
               <SectionTitle>{staticContent_i18n[lang][1]}</SectionTitle>
               <SectionFounders />
            </Container>
            {/*<hr className={'my-20 h-px w-full border-0 bg-gray-700'} />*/}
            {/*<Container id={'about-section-roasters'}>*/}
            {/*   <SectionTitle>{staticContent_i18n[lang][2]}</SectionTitle>*/}
            {/*   <SectionRoaster />*/}
            {/*</Container>*/}
         </main>
      </Suspense>
   )
}

export default About
