import {AnimatedClientBanner} from '@/components/atom/AnimatedClientBanner'
import {TitleH2} from '@/components/atom/SectionH2'
import StaticClientBanner from '@/components/atom/StaticClientBanner'
import Icons from '@/lib/Icons'
import React, {PropsWithChildren, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

export default function Home() {
   return (
      <main className={'relative'}>
         <ScrollButton />
         <header>
            <LandingVideo />
            <section className="h-screen text-center text-neutral-content">
               <article
                  className={
                     'mx-auto flex h-full select-none flex-col items-center justify-center text-primary'
                  }>
                  <h1
                     className={twMerge(
                        `font-poppins font-bold uppercase`,
                        'text-xl-fluid',
                        'motion-safe:animate-[scaleAndFade_800ms_ease-out_1.11s_both]'
                     )}>
                     Jamais 203 Productions
                  </h1>
                  <p
                     className={
                        'text-lg-fluid motion-safe:animate-[scaleAndFade_800ms_ease-out_1.22s_both]'
                     }>
                     Façonnons l’Art du son
                  </p>
               </article>
            </section>
         </header>

         <div className="relative snap-y snap-mandatory">
            <SectionTemplate
               id={'services'}
               ariaLabel={'Services'}
               overrideTitleClass={'mb-12'}
               title={'Services'}>
               <article className="mx-auto grid w-full max-w-4xl grid-cols-2 place-content-center place-items-center gap-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 md:gap-6">
                  {services.map((service, index) => (
                     <span
                        key={service.title}
                        className={twMerge(
                           'flex w-full flex-col items-center justify-center place-self-center p-2 sm:w-1/2 ',
                           index < services.length - 2 ? 'grid-col-auto' : 'grid-col-span-2'
                        )}>
                        {service.Icon ? (
                           <service.Icon className="text-4xl text-primary sm:text-5xl md:text-6xl" />
                        ) : (
                           <img
                              src={service.source}
                              className={
                                 'h-16 w-16 object-contain object-center sm:h-20 sm:w-20 md:h-24 md:w-24'
                              }
                              alt="error loading"
                           />
                        )}
                        <h3 className="text-center text-base text-primary text-balance md:text-lg">
                           {service.title}
                        </h3>
                        {/*<p className="text-base text-center">{service.content}</p>*/}
                     </span>
                  ))}
               </article>
            </SectionTemplate>

            <SectionTemplate
               title={'Clients'}
               id={'clients'}
               overrideTitleClass={'mb-2'}
               ariaLabel={'Nos Clients'}
               className={'w-screen bg-primary/80 text-base-100 [&>*]:text-base-100'}>
               <Suspense fallback={<p>Loading...</p>}>
                  <AnimatedClientBanner />
                  <StaticClientBanner />
               </Suspense>
            </SectionTemplate>
         </div>
      </main>
   )
}

function ScrollButton() {
   return (
      <a
         href={'/#services'}
         className={twMerge(
            ' fixed bottom-4 left-1/2 rounded-xl p-3',
            'border-none bg-base-100/20 backdrop-blur-sm',
            'motion-safe:animate-revealFromBottom',
            'hover:bg-base-100',
            'group z-50'
         )}>
         <Icons.Arrow
            className={
               'animate-bounce text-4xl text-primary/75 group-hover:scale-105 group-hover:animate-none'
            }
         />
      </a>
   )
}

function LandingVideo() {
   return (
      <section
         id={'hero'}
         aria-label={'Video hero banner'}
         className="absolute top-0 h-screen w-screen">
         <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className={twMerge(
               'h-[100vh] w-[100%] object-cover object-center',
               'motion-safe:animate-[scaleAndFade_50ms_ease-out_both]'
            )}>
            <source
               src="/assets/video/pexels-c-technical-7095057%20(540p).mp4"
               type="video/mp4"
            />
            <source
               src="/assets/video/pexels-c-technical-7095057%20(720p).mp4"
               type="video/mp4"
               media="(min-width: 680px) and (max-width: 1080px)"
            />
            <source
               src="/assets/video/pexels-c-technical-7095057%20(1080p).mp4"
               type="video/mp4"
               media="(min-width: 1080px) and (max-width: 1439px)"
            />
            <source
               src="/assets/video/pexels-c-technical-7095057%20(2160p).mp4"
               type="video/mp4"
               media="(min-width: 1440px)"
            />
         </video>
      </section>
   )
}

interface SectionTemplateProps extends PropsWithChildren {
   title: string
   id: string
   className?: string
   ariaLabel?: string
   overrideTitleClass?: string
}

const SectionTemplate = ({
   children,
   className,
   overrideTitleClass,
   ariaLabel,
   title,
   id,
}: SectionTemplateProps) => (
   <section
      className={twMerge(' flex min-h-screen w-screen snap-center items-center')}
      aria-label={ariaLabel}
      id={id}>
      <main
         className={twMerge(
            'min-h-xl my-32 w-full flex-col items-center justify-center gap-12 overflow-hidden bg-base-200 py-32',
            className
         )}>
         <TitleH2
            className={twMerge('w-content mx-auto text-center font-semibold', overrideTitleClass)}>
            {title}
         </TitleH2>
         {children}
      </main>
   </section>
)

// service : Musiques Originales, Production Executive, Édition, Mixage, Mastering, Mixage Immersif Atoms, Design Sonore, Gestion de Projet
const services = [
   {
      title: 'Musiques Originales',
      content: 'Musiques Originales',
      Icon: Icons.Piano,
   },
   {
      title: 'Production Executive',
      content: 'Production Executive',
      Icon: Icons.Music,
   },
   {
      title: 'Édition',
      content: 'Édition',
      // Icon: Icons.Cut,
      source: '/assets/services/note-white.png',
   },
   {
      title: 'Mixage',
      content: 'Mixage',
      Icon: Icons.Mixing,
   },
   {
      title: 'Mastering',
      content: 'Mastering',
      Icon: Icons.SolidDisc,
   },
   {
      title: 'Mixage Immersif Atoms',
      content: 'Mixage Immersif Atoms',
      Icon: Icons.Dolby,
   },
   {
      title: 'Design Sonore',
      content: 'Design Sonore',
      Icon: Icons.SoundWave,
   },
   {
      title: 'Gestion de Projet',
      content: 'Gestion de Projet',
      Icon: Icons.Calendar,
   },
   {
      title: 'Concert',
      content: 'Concert',
      // Icon: Icons.Music,
      source: '/assets/services/piano-white.png',
   },
   {
      title: 'Enregistrement',
      content: 'Enregistrement',
      // Icon: Icons.Mixing,
      source: '/assets/services/micro-white.png',
   },
]

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,
