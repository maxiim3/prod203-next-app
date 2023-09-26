import Loading from '@/app/loading'
import {ScrollButton} from '@/components/_archive/(pages)/(home)/scroll-button.client'
import {SectionTemplate} from '@/components/layout/SectionTemplate'
import MarqueeBanner from '@/components/organism/MarqueeBanner'
import {VideoBanner} from '@/components/organism/VideoBanner'
import Icons from '@/lib/icons'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import Image from 'next/image'
import React, {PropsWithChildren, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

export default async function Home({params}: I_PageI18nParams) {
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
               <Suspense fallback={<Loading />}>
                  <VideoBanner />
               </Suspense>
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
                  <h1 className="sr-only">Jamais 203 Productions</h1>
                  {/**
                   * ==========================
                   *      HERO SECTION
                   *        LOGO IMAGE
                   * ==========================
                   * **/}
                  <Image
                     src={'/assets/logo/prod203-white.webp'}
                     alt="Prod203"
                     priority={true}
                     className={twMerge(
                        'max-h-32 w-full object-contain object-center',
                        'motion-safe:animate-[scaleAndFade_850ms_ease-out_450ms_both]'
                     )}
                     width={1500}
                     height={337}
                  />
                  {/* <p
                     className={
                        'hidden text-lg-fluid ' +
                        'font-poppins motion-safe:animate-[scaleAndFade_800ms_ease-out_1.22s_both] sm:block'
                     }>
                     Façonnons l’Art du son
                  </p>*/}
               </article>

               <ScrollButton
                  containerClassName={'opacity-75 animate-scroll'}
                  sectionID={'#services'}
               />
            </section>
         </header>
         <div className="relative flex snap-y snap-mandatory flex-col overflow-y-auto ">
            {/**
             * ==========================
             *      TOP SECTION 1/3
             *       SERVICES
             * ==========================
             **/}
            <SectionTemplate
               id={'services'}
               ariaLabel={'Services'}
               outerContainerStyles={'mt-16'}
               innerContainerStyles={'mt-16'}
               title={'Services'}>
               <article className="mx-auto my-12 grid w-fit grid-cols-2 place-content-center place-items-center gap-x-3 gap-y-5 xs:grid-cols-3 xs:gap-y-6 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-8 md:grid-cols-5 ">
                  {services.map(service => (
                     <span
                        key={service[params.lang]}
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
                           {service[params.lang]}
                        </h3>
                        {/*<p className="text-base text-center">{service.content}</p>*/}
                     </span>
                  ))}
               </article>

               {/*<ScrollButton sectionID={'#about'} />*/}
            </SectionTemplate>
            <SectionTemplate
               id="gallery"
               outerContainerStyles={'mt-32 h-fit '}
               imgClassName={'bg-gray-100/20'}
               sectionTitleStyles="hidden"
               innerContainerStyles={'rounded-lg overflow-hidden min-h-[400px]'}
               title="">
               <div className={'flex w-full items-center justify-center'}>
                  <Image
                     alt={''}
                     src={'/assets/orchestra.webp'}
                     fill={true}
                     placeholder={'empty'}
                     priority={false}
                     quality={90}
                     sizes={
                        '(min-width: 768px) clamp(600px, 80vw, 980px), (min-width: 1200px) 1024px, clamp(200px, 100vw, 600px'
                     }
                     className={
                        'aspect-portrait mask mask-parallelogram w-full object-contain object-center md:aspect-video'
                     }
                  />
               </div>
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
                  {params.lang === 'en' ? (
                     <>
                        <Text>
                           Founded in 2021 by Jérôme Kuhn, Nathan Stornetta, and Samuel Briand,{' '}
                           <Accent className="uppercase">Jamais 203 Productions</Accent> specializes
                           in the creation of high-quality audio content.
                        </Text>
                        <Text>
                           Our expertise includes <Accent>musical composition</Accent>,{' '}
                           <Accent>recording</Accent>, <Accent>production</Accent>, and mixing of
                           symphonic and romantic music; <Accent>Sound design</Accent> for immersive
                           experiences, the making of <Accent>podcasts</Accent>, the production of{' '}
                           <Accent>soundtracks for live shows</Accent>, as well as{' '}
                           <Accent>music publishing</Accent> and production for various formats such
                           as <Accent>classical music concerts</Accent>, <Accent>ceremonies</Accent>
                           , and much more.
                        </Text>
                     </>
                  ) : (
                     <>
                        <Text>
                           Fondée en 2021 par Jérôme Kuhn, Nathan Stornetta et Samuel Briand,{' '}
                           <Accent className="uppercase">Jamais 203 Productions</Accent> est
                           spécialisée dans la création de contenus sonores exigeants.
                        </Text>
                        <Text>
                           Nos savoir-faire englobent la <Accent>composition musicale</Accent>, l
                           {"'"}
                           <Accent>enregistrement</Accent>, la <Accent>production</Accent> et le
                           mixage de musiques symphoniques et romantiques; Le{' '}
                           <Accent>design sonore</Accent> pour des expériences immersives, la
                           réalisation de <Accent>podcasts</Accent>, la production de{' '}
                           <Accent>bandes sonores pour les spectacles</Accent> en direct, ainsi que
                           l{"'"}
                           <Accent>édition musicale</Accent> et la production pour divers supports
                           tels que les <Accent>concerts</Accent> de{' '}
                           <Accent>musique classique</Accent>, les <Accent>cérémonies</Accent>, et
                           bien plus encore.
                        </Text>
                     </>
                  )}
               </div>
               {/*<ScrollButton sectionID={'#references'} />*/}
            </SectionTemplate>

            <SectionTemplate
               id="gallery"
               outerContainerStyles={'h-fit mb-32'}
               imgClassName={'bg-gray-100/20'}
               sectionTitleStyles="hidden"
               innerContainerStyles={'rounded-lg overflow-hidden min-h-[400px]'}
               title="">
               <div className={'flex w-full items-center justify-center'}>
                  <Image
                     alt={''}
                     src={'/assets/recording.webp'}
                     fill={true}
                     placeholder={'empty'}
                     priority={false}
                     quality={90}
                     sizes={
                        '(min-width: 768px) clamp(600px, 80vw, 980px), (min-width: 1200px) 1024px, clamp(200px, 100vw, 600px'
                     }
                     className={
                        'aspect-portrait mask mask-parallelogram-2 w-full object-contain object-center md:aspect-video'
                     }
                  />
               </div>
            </SectionTemplate>
            {/**
             * ==========================
             *      BOTTOM SECTION 3/3
             *        CLIENTS
             * ==========================
             * **/}
            <SectionTemplate
               title={params.lang === 'en' ? 'References' : 'Références'}
               id={'references'}
               outerContainerStyles={'mb-64'}
               innerContainerStyles={'w-screen'}
               ariaLabel={params.lang === 'en' ? 'References' : 'Références'}>
               <Suspense fallback={<p>Loading...</p>}>
                  <MarqueeBanner />
               </Suspense>
            </SectionTemplate>
            <ScrollButton
               svgUp
               sectionID={'#'}
               anchorClassName={'-rotate-180'}
            />
         </div>
      </main>
   )
}

// service : Musiques Originales, Production Executive, Édition, Mixage, Mastering, Mixage Immersif Atoms, Design Sonore, Gestion de Projet

const services = [
   {fr: 'Musiques Originales', en: 'Original Soundtrack', Icon: Icons.Piano},
   {fr: 'Production Executive', en: 'Executive Production', Icon: Icons.Music},
   {fr: 'Édition', en: 'Edition', source: '/assets/services/note-white.png'},
   {fr: 'Enregistrement', en: 'Recording', source: '/assets/services/micro-white.png'},
   {fr: 'Mixage', en: 'Mixing', Icon: Icons.Mixing},
   {fr: 'Mastering', en: 'Mastering', Icon: Icons.SolidDisc},
   {fr: 'Dolby Atmos', en: 'Dolby Atmos', Icon: Icons.Dolby},
   {fr: 'Design Sonore', en: 'Sound Design', Icon: Icons.SoundWave},
   {fr: 'Concert', en: 'Live Events', source: '/assets/services/piano-white.png'},
   {fr: 'Gestion de Projet', en: 'Project Management', Icon: Icons.Calendar},
]

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,

const Text = ({
   children,
   className,
}: PropsWithChildren<{
   className?: string
}>) => (
   <p
      className={twMerge(
         'max-w-[60ch] font-extralight leading-relaxed tracking-wider text-primary text-balance',
         className
      )}>
      {children}
   </p>
)
const Accent = ({
   children,
   className,
}: PropsWithChildren<{
   className?: string
}>) => <strong className={twMerge('font-semibold', className)}>{children}</strong>
