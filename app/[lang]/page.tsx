import MotionContent from '@/app/[lang]/(home-page-components)/motion-content.client'
import {ScrollButton} from '@/app/[lang]/(home-page-components)/scroll-button.client'
import Loading from '@/app/[lang]/loading'
import {TitleH2} from '@/components/atom/SectionH2'
import MarqueeBanner from '@/components/organism/MarqueeBanner'
import {VideoBanner} from '@/components/organism/VideoBanner'
import Icons from '@/lib/icons'
import {cn} from '@/lib/utils'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import Image from 'next/image'
import React, {ComponentPropsWithoutRef, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

export default async function Home({params}: I_PageI18nParams) {
   return (
      <main className={'relative'}>
         <header>
            <section
               id={'hero'}
               aria-label={'Video hero banner'}
               className="absolute top-0 h-screen w-screen">
               <Suspense fallback={<Loading />}>
                  <VideoBanner />
               </Suspense>
            </section>
            <section className="relative h-screen text-center text-neutral-content">
               <article
                  className={
                     'relative mx-auto flex h-full select-none flex-col items-center justify-center text-primary'
                  }>
                  <h1 className="sr-only">Jamais 203 Productions</h1>
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
               </article>

               <ScrollButton
                  container={{className: 'opacity-75 animate-scroll'}}
                  anchor={{href: '#services'}}
               />
            </section>
         </header>
         <div className="relative flex snap-y snap-mandatory flex-col overflow-y-auto ">
            <Section
               id={'services'}
               ariaLabel={'Services'}
               className={'mt-16'}>
               <MotionContent className={'mt-16'}>
                  <SectionTitle>Services</SectionTitle>
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
                        </span>
                     ))}
                  </article>
               </MotionContent>
            </Section>
            <Section
               id="gallery-1"
               ariaLabel={'Gallery'}
               className={'mt-32 h-fit'}>
               <MotionContent className={'min-h-[400px] overflow-hidden rounded-lg'}>
                  <SectionTitle className={'hidden'} />
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
               </MotionContent>
            </Section>
            <Section
               id="about"
               ariaLabel={'About'}>
               <MotionContent title="">
                  <SectionTitle className={'hidden'} />
                  <div
                     className={
                        'relative mx-auto flex flex-col gap-4 border-y px-4 py-12 xs:px-8 sm:m-12 md:grid md:grid-cols-2 md:gap-x-12'
                     }>
                     {params.lang === 'en' ? (
                        <>
                           <Text>
                              Founded in 2021 by Jérôme Kuhn, Nathan Stornetta, and Samuel Briand,{' '}
                              <Accent className="uppercase">Jamais 203 Productions</Accent>{' '}
                              specializes in the creation of high-quality audio content.
                           </Text>
                           <Text>
                              Our expertise includes <Accent>musical composition</Accent>,{' '}
                              <Accent>recording</Accent>, <Accent>production</Accent>, and mixing of
                              symphonic and romantic music; <Accent>Sound design</Accent> for
                              immersive experiences, the making of <Accent>podcasts</Accent>, the
                              production of <Accent>soundtracks for live shows</Accent>, as well as{' '}
                              <Accent>music publishing</Accent> and production for various formats
                              such as <Accent>classical music concerts</Accent>,{' '}
                              <Accent>ceremonies</Accent>, and much more.
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
                              Nos savoir-faire englobent la <Accent>composition musicale</Accent>,
                              l&apos;
                              <Accent>enregistrement</Accent>, la <Accent>production</Accent> et le
                              mixage de musiques symphoniques et romantiques; Le{' '}
                              <Accent>design sonore</Accent> pour des expériences immersives, la
                              réalisation de <Accent>podcasts</Accent>, la production de{' '}
                              <Accent>bandes sonores pour les spectacles</Accent> en direct, ainsi
                              que l&apos;
                              <Accent>édition musicale</Accent> et la production pour divers
                              supports tels que les <Accent>concerts</Accent> de{' '}
                              <Accent>musique classique</Accent>, les <Accent>cérémonies</Accent>,
                              et bien plus encore.
                           </Text>
                        </>
                     )}
                  </div>
               </MotionContent>
            </Section>
            <Section
               id="gallery"
               className={'mb-32 h-fit'}
               ariaLabel={'Gallery'}>
               <MotionContent className={'min-h-[400px] overflow-hidden rounded-lg'}>
                  <SectionTitle className={'hidden'} />
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
               </MotionContent>
            </Section>
            <Section
               id={'references'}
               className={'mb-64'}
               ariaLabel={params.lang === 'en' ? 'References' : 'Références'}>
               <MotionContent className={'w-screen'}>
                  <SectionTitle>{params.lang === 'en' ? 'References' : 'Références'}</SectionTitle>
                  <Suspense fallback={<p>Loading...</p>}>
                     <MarqueeBanner />
                  </Suspense>
               </MotionContent>
            </Section>
            <ScrollButton
               svg={{className: 'rotate-180 transform'}}
               anchor={{href: '#', className: '-rotate-180'}}
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

const Text = ({children, className}: ComponentPropsWithoutRef<'p'>) => (
   <p
      className={cn(
         'max-w-[60ch] font-extralight leading-relaxed tracking-wider text-primary text-balance',
         className
      )}>
      {children}
   </p>
)
const Accent = ({children, className}: ComponentPropsWithoutRef<'strong'>) => (
   <strong className={cn('font-semibold', className)}>{children}</strong>
)

const Section = ({
   children,
   className,
   id,
   ariaLabel,
}: ComponentPropsWithoutRef<'section'> & {
   ariaLabel?: string
}) => (
   <section
      aria-label={ariaLabel}
      id={id}
      className={cn(
         ' relative mx-auto flex h-full w-screen max-w-[980px] snap-start items-center py-2 ',
         className
      )}>
      {children}
   </section>
)
const SectionTitle = ({children, className}: ComponentPropsWithoutRef<'h2'>) => (
   <TitleH2
      className={cn(
         'w-content mx-auto text-center text-4xl font-thin uppercase sm:text-5xl ',
         className
      )}>
      {children}
   </TitleH2>
)
