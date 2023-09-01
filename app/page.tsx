import {SectionTemplate} from '@/components/layout/SectionTemplate'
import MarqueeBanner from '@/components/organism/MarqueeBanner'
import Icons from '@/lib/Icons'
import Image from 'next/image'
import React, {PropsWithChildren, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'
import {ScrollButton} from './ScrollButton'
import {VideoBanner} from './VideoBanner'

export default async function Home() {
   return (
      <main className={'relative'}>
         <header>
            {/**
             * ==========================
             *      HERO SECTION
             *       VIDEO BANNER
             * ==========================
             * **/}
            <section
               id={'hero'}
               aria-label={'Video hero banner'}
               className="absolute top-0 h-screen w-screen">
               <VideoBanner />
            </section>
            {/**
             * ==========================
             *      HERO SECTION
             *      CONTENT BANNER
             * ==========================
             * **/}
            <section className="relative h-screen text-center text-neutral-content">
               <article
                  className={
                     'relative mx-auto flex h-full select-none flex-col items-center justify-center text-primary'
                  }>
                  <h1
                     className={twMerge(
                        `font-poppins font-bold uppercase`,
                        'text-xl-fluid',
                        'motion-safe:animate-[scaleAndFade_650ms_ease-out_250ms_both]',
                        'invisible absolute -left-full -top-full'
                     )}>
                     Jamais 203 Productions
                  </h1>
                  {/**
                   * ==========================
                   *      HERO SECTION
                   *        LOGO IMAGE
                   * ==========================
                   * **/}
                  <Image
                     src={'/assets/logo/prod203-white.webp'}
                     alt="Prod203"
                     className={twMerge(
                        'max-h-32 w-full object-contain object-center',
                        'motion-safe:animate-[scaleAndFade_850ms_ease-out_450ms_both]'
                     )}
                     width={1500}
                     height={337}
                  />
                  <p
                     className={
                        'hidden text-lg-fluid motion-safe:animate-[scaleAndFade_800ms_ease-out_1.22s_both]'
                     }>
                     Façonnons l’Art du son
                  </p>
               </article>
               <ScrollButton
                  containerClassName={'opacity-75 animate-scroll'}
                  sectionID={'#services'}
               />
            </section>
         </header>

         <div className="snap-mandat relative snap-y overflow-y-auto">
            {/**
             * ==========================
             *      TOP SECTION 1/3
             *       SERVICES
             * ==========================
             **/}
            <SectionTemplate
               id={'services'}
               ariaLabel={'Services'}
               innerContainerStyles={'mt-16'}
               title={'Services'}>
               <article className="mx-auto my-12 grid w-fit grid-cols-2 place-content-center place-items-center gap-x-3 gap-y-5 xs:grid-cols-3 xs:gap-y-6 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-8 md:grid-cols-5 ">
                  {services.map(service => (
                     <span
                        key={service.title}
                        className={twMerge(
                           'flex flex-col items-center justify-center gap-2 place-self-center',
                           'h-fit w-fit px-0.5 sm:p-1 md:px-2'
                        )}>
                        {service.Icon ? (
                           <service.Icon className="text-2xl text-primary" />
                        ) : (
                           <Image
                              width={64}
                              height={64}
                              src={service.source!}
                              className={'h-8 w-8 object-contain object-center'}
                              alt="error loading"
                           />
                        )}
                        <h3 className="w-32 text-center text-sm font-light tracking-[1.4px] text-primary text-balance">
                           {service.title}
                        </h3>
                        {/*<p className="text-base text-center">{service.content}</p>*/}
                     </span>
                  ))}
               </article>

               {/*<ScrollButton sectionID={'#about'} />*/}
            </SectionTemplate>

            {/**
             * ==========================
             *      MIDDLE SECTION 2/3
             *        ABOUT US
             * ==========================
             * **/}
            <SectionTemplate
               id="about"
               imgClassName={'bg-gray-100/20'}
               sectionTitleStyles="hidden"
               title="">
               <div
                  className={
                     'relative mx-auto flex flex-col gap-4 border-y px-4 py-12 xs:px-8 sm:m-12 md:grid md:grid-cols-2 md:gap-x-12'
                  }>
                  <Text>
                     Fondée en 2021 par Jérôme Kuhn, Nathan Stornetta et Samuel Briand,{' '}
                     <Accent className="uppercase">Jamais 203 Productions</Accent> est spécialisée
                     dans la création de contenus sonores exigeants.
                  </Text>
                  <Text>
                     Nos savoir-faire englobent la <Accent>composition musicale</Accent>, l{"'"}
                     <Accent>enregistrement</Accent>, la <Accent>production</Accent> et le mixage de
                     musiques symphoniques et romantiques; Le <Accent>design sonore</Accent> pour
                     des expériences immersives, la réalisation de <Accent>podcasts</Accent>, la
                     production de <Accent>bandes sonores pour les spectacles</Accent> en direct,
                     ainsi que l{"'"}
                     <Accent>édition musicale</Accent> et la production pour divers supports tels
                     que les <Accent>concerts</Accent> de <Accent>musique classique</Accent>, les{' '}
                     <Accent>cérémonies</Accent>, et bien plus encore.
                  </Text>
               </div>
               {/*<ScrollButton sectionID={'#references'} />*/}
            </SectionTemplate>
            {/**
             * ==========================
             *      BOTTOM SECTION 3/3
             *        CLIENTS
             * ==========================
             * **/}
            <SectionTemplate
               title={'Références'}
               id={'references'}
               innerContainerStyles={'w-screen'}
               ariaLabel={'Nos Clients'}>
               <Suspense fallback={<p>Loading...</p>}>
                  <MarqueeBanner />
               </Suspense>
               <ScrollButton
                  svgUp
                  sectionID={'#'}
                  anchorClassName={'-rotate-180'}
               />
            </SectionTemplate>
         </div>
      </main>
   )
}

// service : Musiques Originales, Production Executive, Édition, Mixage, Mastering, Mixage Immersif Atoms, Design Sonore, Gestion de Projet
const services = [
   {title: 'Musiques Originales', content: 'Musiques Originales', Icon: Icons.Piano},
   {title: 'Production Executive', content: 'Production Executive', Icon: Icons.Music},
   {title: 'Édition', content: 'Édition', source: '/assets/services/note-white.png'},
   {title: 'Enregistrement', content: 'Enregistrement', source: '/assets/services/micro-white.png'},
   {title: 'Mixage', content: 'Mixage', Icon: Icons.Mixing},
   {title: 'Mastering', content: 'Mastering', Icon: Icons.SolidDisc},
   {title: 'Dolby Atmos', content: 'Dolby Atmos', Icon: Icons.Dolby},
   {title: 'Design Sonore', content: 'Design Sonore', Icon: Icons.SoundWave},
   {title: 'Concert', content: 'Concert', source: '/assets/services/piano-white.png'},
   {title: 'Gestion de Projet', content: 'Gestion de Projet', Icon: Icons.Calendar},
]

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,

const Text = ({children, className}: PropsWithChildren<{className?: string}>) => (
   <p
      className={twMerge(
         'max-w-[60ch] font-extralight leading-relaxed tracking-wider text-primary text-balance',
         className
      )}>
      {children}
   </p>
)
const Accent = ({children, className}: PropsWithChildren<{className?: string}>) => (
   <strong className={twMerge('font-semibold', className)}>{children}</strong>
)
