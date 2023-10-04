import MarqueeBanner from '@/app/[lang]/(home-page-components)/marquee-clients-banner.client'
import MotionContent from '@/app/[lang]/(home-page-components)/motion-content.client'
import ScrollButton from '@/app/[lang]/(home-page-components)/scroll-button.client'
import VideoBanner from '@/app/[lang]/(home-page-components)/video-banner.client'
import Loading from '@/app/[lang]/loading'
import {SectionTitle} from '@/components/section-title'
import Icons from '@/lib/icons'
import {cn} from '@/lib/utils'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import Image from 'next/image'
import React, {ComponentPropsWithoutRef, Suspense} from 'react'

export default async function Home({params}: I_PageI18nParams) {
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
                     className={cn(
                        'max-h-32 w-full object-contain object-center',
                        'motion-safe:animate-[scaleAndFade_850ms_ease-out_450ms_both]'
                     )}
                     width={1500}
                     height={337}
                  />
               </article>

               <ScrollButton
                  container={{className: 'opacity-75 animate-scroll transform'}}
                  anchor={{href: '#services'}}
                  svg={{className: 'rotate-180'}}
               />
            </section>
         </header>
         <div className="relative flex snap-y snap-mandatory flex-col gap-4 overflow-y-auto ">
            <Section
               id={'services'}
               ariaLabel={'Services'}
               className={'mt-4'}>
               <MotionContent className={'mt-16'}>
                  <SectionTitle>Services</SectionTitle>
                  <article className="mx-auto my-8 grid w-fit grid-cols-2 place-content-center place-items-center gap-x-3 gap-y-5 xs:grid-cols-3 xs:gap-y-6 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-8 md:grid-cols-5 ">
                     {services.map(service => (
                        <span
                           key={service[params.lang]}
                           className={cn(
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
            {/*<Section*/}
            {/*   id="gallery-1"*/}
            {/*   ariaLabel={'Gallery'}*/}
            {/*   className={'my-24 h-fit'}>*/}
            {/*   <MotionContent className={'min-h-[400px] overflow-hidden rounded-lg'}>*/}
            {/*      <SectionTitle className={'hidden'} />*/}
            {/*      <div className={'flex w-full items-center justify-center'}>*/}
            {/*         <Image*/}
            {/*            alt={''}*/}
            {/*            src={'/assets/orchestra.webp'}*/}
            {/*            fill={true}*/}
            {/*            placeholder={'empty'}*/}
            {/*            priority={false}*/}
            {/*            quality={90}*/}
            {/*            sizes={*/}
            {/*               '(min-width: 768px) clamp(600px, 80vw, 980px), (min-width: 1200px) 1024px, clamp(200px, 100vw, 600px'*/}
            {/*            }*/}
            {/*            className={*/}
            {/*               'aspect-portrait mask mask-parallelogram w-full object-contain object-center md:aspect-video'*/}
            {/*            }*/}
            {/*         />*/}
            {/*      </div>*/}
            {/*   </MotionContent>*/}
            {/*</Section>*/}
            <Section
               id="about"
               className={'my-12'}
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
                              Founded by Jérôme Kuhn, Nathan Stornetta, and Samuel Briand,{' '}
                              <Accent className="uppercase">Jamais 203 Productions</Accent> is an{' '}
                              <Accent>audiovisual production</Accent> agency.
                           </Text>
                           <Text>
                              Our skill set encompasses <Accent>composition</Accent>,{' '}
                              <Accent>music for visuals</Accent>, <Accent>recording</Accent>,{' '}
                              <Accent>production</Accent>, and <Accent>mixing</Accent> of music;{' '}
                              <Accent>Sound design</Accent> for immersive experiences, the creation
                              of <Accent>custom soundtracks for live shows</Accent>, as well as{' '}
                              <Accent>music publishing</Accent>, catalog management, and hosting of{' '}
                              <Accent>
                                 live events like movie-concerts, ceremonies, fashion shows
                              </Accent>
                              , and much more.
                           </Text>
                        </>
                     ) : (
                        <>
                           <Text>
                              Fondée par Jérôme Kuhn, Nathan Stornetta et Samuel Briand,{' '}
                              <Accent className="uppercase">Jamais 203 Productions</Accent> est une
                              agence de <Accent>production audiovisuelle</Accent>.
                           </Text>
                           <Text>
                              Notre savoir-faire englobe la <Accent>composition</Accent>, la{' '}
                              <Accent>musique à l’image</Accent>, l’
                              <Accent>enregistrement</Accent>, la <Accent>production</Accent> et le
                              <Accent>mixage</Accent> de musique, le <Accent>design sonore</Accent>{' '}
                              pour des expériences immersives, la création de{' '}
                              <Accent>bandes sonores sur mesure pour les spectacles</Accent>{' '}
                              vivants, ainsi que l'
                              <Accent>édition musicale</Accent>, la gestion de catalogue et la
                              réalisation
                              <Accent>
                                 d’évènements en direct tels que ciné-concerts, cérémonies, défilés
                                 de mode
                              </Accent>
                              , et bien plus encore.
                           </Text>
                        </>
                     )}
                  </div>
               </MotionContent>
            </Section>
            {/*<Section*/}
            {/*   id="gallery"*/}
            {/*   className={'my-24 h-fit'}*/}
            {/*   ariaLabel={'Gallery'}>*/}
            {/*   <MotionContent className={'min-h-[400px] overflow-hidden rounded-lg'}>*/}
            {/*      <SectionTitle className={'hidden'} />*/}
            {/*      <div className={'flex w-full items-center justify-center'}>*/}
            {/*         <Image*/}
            {/*            alt={''}*/}
            {/*            src={'/assets/recording.webp'}*/}
            {/*            fill={true}*/}
            {/*            placeholder={'empty'}*/}
            {/*            priority={false}*/}
            {/*            quality={90}*/}
            {/*            sizes={*/}
            {/*               '(min-width: 768px) clamp(600px, 80vw, 980px), (min-width: 1200px) 1024px, clamp(200px, 100vw, 600px'*/}
            {/*            }*/}
            {/*            className={*/}
            {/*               'aspect-portrait mask mask-parallelogram-2 w-full object-contain object-center md:aspect-video'*/}
            {/*            }*/}
            {/*         />*/}
            {/*      </div>*/}
            {/*   </MotionContent>*/}
            {/*</Section>*/}
            <Section
               id={'references'}
               className={'mb-36 md:mb-48'}
               ariaLabel={params.lang === 'en' ? 'References' : 'Références'}>
               <MotionContent className={'w-screen'}>
                  <SectionTitle>{params.lang === 'en' ? 'References' : 'Références'}</SectionTitle>
                  <Suspense fallback={<p>Loading...</p>}>
                     <MarqueeBanner />
                  </Suspense>
               </MotionContent>
            </Section>
            <ScrollButton anchor={{href: '#'}} />
         </div>
      </main>
   )
}

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
