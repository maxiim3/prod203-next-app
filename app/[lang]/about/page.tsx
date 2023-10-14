import AboutPageLoader from '@/app/[lang]/about/loading'
import {SectionTitle} from '@/components/section-title'
import React, {Suspense} from 'react'

import Container from '@/app/[lang]/about/(ui)/layouts/section-layout'
import SectionActivity from '@/app/[lang]/about/(ui)/organisms/section-activity.client'
import SectionFounders from '@/app/[lang]/about/(ui)/organisms/section-founders.client'
import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {z} from 'zod'

const About = ({params}: T_I18nPageParam) => {
   const {lang} = params
   const Zod_englishTitlesEnum = z.enum(['Activity', 'Founders', 'Roasters'])
   const Zod_frenchTitlesEnum = z.enum(['Activites', 'Fondateurs', 'Compositeurs'])

   return (
      <Suspense fallback={<AboutPageLoader />}>
         <main className={'z-0 w-screen py-24'}>
            <h1 className="sr-only">À propos</h1>
            <Container id={'about-section-activity'}>
               <SectionTitle>
                  {lang === 'en'
                     ? Zod_englishTitlesEnum.Values.Activity
                     : Zod_frenchTitlesEnum.Values.Activites}
               </SectionTitle>
               <SectionActivity />
            </Container>

            {/*<hr className={'my-20 h-px w-full border-0 bg-gray-700'} />*/}
            <Container id={'about-section-founders'}>
               <SectionTitle>
                  {lang === 'en'
                     ? Zod_englishTitlesEnum.Values.Founders
                     : Zod_frenchTitlesEnum.Values.Fondateurs}
               </SectionTitle>
               <SectionFounders />
            </Container>
            {/*<hr className={'my-20 h-px w-full border-0 bg-gray-700'} />*/}
            {/*<Container id={'about-section-roasters'}>*/}
            {/*   <SectionTitle>{sectionTitles[lang][2]}</SectionTitle>*/}
            {/*   <SectionRoaster />*/}
            {/*</Container>*/}
         </main>
      </Suspense>
   )
}

export default About
