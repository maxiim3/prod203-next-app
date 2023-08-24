import {AnimatedClientBanner} from '@/components/atom/AnimatedClientBanner'
import {TitleH2} from '@/components/atom/SectionH2'
import StaticClientBanner from '@/components/atom/StaticClientBanner'
import Icons from '@/lib/Icons'
import React, {PropsWithChildren, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

/* NOTE about animation
 * Animation is done within TailwindCSS - IN LINE -> animate-[keyframe...custom] - for the element of this page : Header apparition, title and subtitle apparition
 * The Button is animated in tailwind.config.js -> animate-revealFromBottom
 * I do not use framer motion here to keep the ability to use SSR
 * */
export default function Home() {
   return (
      <main>
         <section
            id={'hero'}
            aria-label={'Video hero banner'}
            className="hero h-screen w-screen">
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

            <main className="hero-overlay relative bg-opacity-20"></main>
            <article className="hero-content text-center text-neutral-content">
               <article className={'mx-auto select-none text-primary '}>
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

               <a
                  href={'/#services'}
                  className={twMerge(
                     'btn btn-primary absolute bottom-4',
                     'border-none bg-base-100/50 backdrop-blur-sm',
                     'motion-safe:animate-revealFromBottom',
                     'hover:bg-base-100',
                     'group'
                  )}>
                  <Icons.Arrow
                     className={
                        'animate-bounce text-2xl text-primary/75 group-hover:scale-105 group-hover:animate-none'
                     }
                  />
               </a>
            </article>
         </section>
         <SectionTemplate
            id={'services'}
            ariaLabel={'Nos Services'}
            className={''}
            title={'Nos Services'}>
            <article className="grid w-full grid-cols-2 place-content-center place-items-center gap-2 sm:grid-cols-4 md:gap-6">
               {services.map((service, index) => (
                  <span
                     key={service.title}
                     className={twMerge(
                        'flex w-full flex-col items-center justify-center place-self-center p-2 sm:w-1/2 ',
                        index < services.length - 2 ? 'grid-col-auto' : 'grid-col-span-2'
                     )}>
                     <service.Icon className="text-4xl text-primary sm:text-5xl md:text-6xl" />
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
            ariaLabel={'Nos Clients'}
            className={'w-screen bg-primary/80 text-base-100 [&>*]:text-base-100'}>
            <Suspense fallback={<p>Loading...</p>}>
               <AnimatedClientBanner />
               <StaticClientBanner />
            </Suspense>
         </SectionTemplate>
      </main>
   )
}

interface SectionTemplateProps extends PropsWithChildren {
   title: string
   id: string
   className?: string
   ariaLabel?: string
}

const SectionTemplate = ({children, className, ariaLabel, title, id}: SectionTemplateProps) => (
   <section
      className={twMerge(
         'min-h-lg my-40 flex w-screen flex-col items-center justify-center gap-12 bg-base-200 px-8 py-20',
         className
      )}
      aria-label={ariaLabel}
      id={id}>
      <TitleH2 className={'font-semibold'}>{title}</TitleH2>
      {children}
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
      Icon: Icons.Cut,
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
]

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,
