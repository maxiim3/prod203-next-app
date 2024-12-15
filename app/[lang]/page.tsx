import {HeaderBanner} from '@/app/[lang]/(home-page-components)/header-banner.client'
import MarqueeBanner from '@/app/[lang]/(home-page-components)/marquee-clients-banner.client'
import MotionContent from '@/app/[lang]/(home-page-components)/motion-content.client'
import {SectionTitle} from '@/components/section-title'
import Icons from '@/lib/icons'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import React, {Suspense, type ComponentPropsWithoutRef} from 'react'

import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'

export default async function Home({params}: T_I18nPageParam) {
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
         <HeaderBanner />
         <div className="snap-opacity overflow-opacity-auto relative flex snap-mandatory flex-col gap-4 bg-base-100/80  backdrop-blur-xl ">
            <Section
               id={'services'}
               ariaLabel={'Services'}
               className={'mt-4'}>
               <MotionContent className={'mt-16'}>
                  <SectionTitle>Services</SectionTitle>
                  <article className="gap-opacity-5 xs:gap-opacity-6 sm:gap-opacity-8 mx-auto my-8 grid w-fit grid-cols-2 place-content-center place-items-center gap-x-3 xs:grid-cols-3 sm:grid-cols-4 sm:gap-x-8 md:grid-cols-5 ">
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
                        'border-opacity relative mx-auto grid gap-4 px-4 py-12 xs:px-8 sm:m-12 md:grid-cols-2'
                     }>
                     {params.lang === 'en' ? (
                        <>
                           <span
                              className={
                                 'flex flex-col gap-3 md:border-r md:border-primary/20 md:pr-6 '
                              }>
                              <Text className={'row-start-1'}>
                                 Founded by Jérôme Kuhn, Nathan Stornetta and Samuel Briand,{' '}
                                 <Accent className="uppercase">Jamais 203 Productions</Accent> is an
                                 audiovisual production agency.
                              </Text>
                              <Text className={''}>
                                 Our expertise encompasses <Accent>composition</Accent>,
                                 <Accent>music scoring</Accent>, <Accent>recording</Accent>,
                                 <Accent>production</Accent> and <Accent>mixing</Accent> of music,
                                 <Accent>sound design</Accent> for immersive experiences, creation
                                 of
                                 <Accent>soundtracks</Accent> for live performances, as well as
                                 <Accent>music publishing</Accent>, catalog management and the
                                 execution of live events such as
                                 <Accent>cinema-concerts, ceremonies, fashion shows</Accent>, and
                                 much more.
                              </Text>
                           </span>
                           <span className={'flex flex-col gap-3 md:pl-6'}>
                              <Text>
                                 Taking on each challenge with passion, and driven by the enthusiasm
                                 and cohesion of our creative team, our ambition is to bring a
                                 personal and unique touch to each of the projects entrusted to us.
                              </Text>
                           </span>
                        </>
                     ) : (
                        <>
                           <span
                              className={
                                 'flex flex-col gap-3 md:border-r md:border-primary/20 md:pr-6 '
                              }>
                              <Text className={'row-start-1'}>
                                 Fondée par Jérôme Kuhn, Nathan Stornetta et Samuel Briand,{' '}
                                 <Accent className="uppercase">Jamais 203 Productions</Accent> est
                                 une agence de production audiovisuelle.
                              </Text>
                              <Text className={''}>
                                 Notre savoir-faire englobe la <Accent>composition</Accent>, la{' '}
                                 <Accent>musique à l&apos;image</Accent>, l&apos;
                                 <Accent>enregistrement</Accent>, la <Accent>production</Accent> et
                                 le <Accent>mixage</Accent> de musique, le{' '}
                                 <Accent>design sonore</Accent> pour des expériences immersives, la
                                 création de <Accent>bandes sonores</Accent> sur mesure pour les
                                 spectacles vivants, ainsi que l&apos;
                                 <Accent>édition musicale</Accent>, la gestion de catalogue et la
                                 réalisation d&apos;évènements en direct tels que{' '}
                                 <Accent>ciné-concerts, cérémonies, défilés de mode </Accent>, et
                                 bien plus encore.
                              </Text>
                           </span>
                           <span className={'flex flex-col gap-3 md:pl-6'}>
                              <Text>
                                 Relevant chaque défis avec passion, et animés par
                                 l&apos;enthousiasme et la cohésion de notre équipe créative, notre
                                 ambition est d&apos;apporter une touche personnelle et unique à
                                 chacun des projets qui nous sont confiés.
                              </Text>
                           </span>
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
            <a
               href="#"
               className={
                  'btn-base-100  btn mx-auto mb-24 flex h-24 w-12 items-center justify-center rounded-md border-none  p-1 text-xl font-bold uppercase text-primary opacity-70 backdrop-blur-md backdrop:opacity-0 xs:h-16 xs:w-16'
               }>
               <svg
                  width="64"
                  className={cn(
                     'h-8 w-8 text-primary xs:h-12 xs:w-12 sm:h-12 sm:w-12 lg:h-16 lg:w-16'
                  )}
                  height="64"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     fill="currentColor"
                     d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
                  />
               </svg>
            </a>
         </div>
      </main>
   )
}

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,

const Text = ({children, className}: ComponentPropsWithoutRef<'p'>) => (
   <p
      className={cn(
         'max-w-[85ch] text-sm font-light leading-relaxed tracking-wider text-primary text-balance md:text-base',
         className
      )}>
      {children}
   </p>
)
const Accent = ({children, className}: ComponentPropsWithoutRef<'strong'>) => (
   <strong className={cn('font-bold', className)}>{children}</strong>
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
