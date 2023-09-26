'use client'

import {TabItem} from '@/components/_archive/(pages)/about/tab-item'
import {TabType, useTabs} from '@/components/_archive/(pages)/about/useTabs.hook'
import Icons from '@/lib/icons'
import Image from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function SectionActivity() {
   const {activeTab, setActiveTab} = useTabs(Tabs)

   /*todo Fix Nav on mobile view -> Add a drawer !!*/
   return (
      <section className={'relative w-full'}>
         <Image
            alt={''}
            src={'/assets/section-activity.png'}
            sizes={''}
            fill={true}
            className={'absolute left-0 top-0 object-cover object-center'}
         />
         <div
            className={
               'relative z-50 max-h-[700px] min-h-fit space-y-8 bg-base-100/90 md:m-12 md:h-[65vh] md:rounded-lg md:p-8 '
            }>
            <div className="pb-4 text-center text-sm font-medium text-gray-400   ">
               <ul className="-mb-px flex flex-wrap items-center justify-between gap-0.5 border-b border-gray-700 xs:flex-row xs:gap-1 md:items-end md:justify-center md:gap-1.5 ">
                  {Object.entries(Tabs).map(([key, value], index) => (
                     <TabItem
                        key={`tab=${index}=${key}`}
                        active={key === activeTab}
                        onClick={() => setActiveTab(key)}
                        className={twMerge(
                           'flex flex-1 scale-90 flex-col items-center justify-center px-2 text-xs tracking-wide text-balance',
                           'xs:w-20 xs:scale-100 xs:text-sm',
                           'sm:w-24 sm:p-4',
                           'md:aspect-video md:gap-1 md:rounded-t-lg md:border-b-2 md:px-1 md:pb-1 md:pt-3',
                           'lg:flex-row'
                        )}>
                        {value.Icon ? (
                           <value.Icon className="h-4 w-4 text-primary " />
                        ) : (
                           <Image
                              width={16}
                              height={16}
                              src={value.source!}
                              className={'h-4 w-4 object-contain object-center '}
                              alt="error loading"
                           />
                        )}
                        <p>{value.title}</p>
                     </TabItem>
                  ))}
               </ul>
            </div>

            <div>
               <p className="mx-auto mb-3 max-w-[75ch] px-2 pb-4 text-justify leading-relaxed tracking-wide text-gray-400 text-balance sm:px-4 sm:pb-8 md:text-lg">
                  {Tabs[activeTab]?.description}
               </p>
            </div>
         </div>
      </section>
   )
}

const Tabs: TabType = {
   music: {
      Icon: Icons.Piano,
      title: 'Musiques originales',
      description:
         "Jamais 203 Productions se démarque en offrant des compositions musicales sur mesure qui éveillent les émotions, racontent des histoires et renforcent l'impact de vos projets. Que vous soyez réalisateur de films, créateur de contenu, professionnel du marketing ou tout simplement à la recherche de la bande-son parfaite pour votre événement, nous sommes là pour répondre à vos besoins musicaux uniques. Nos compositeurs sont spécialisés dans une variété de genres musicaux, de l'orchestration épique, en passant par les ambiances acoustiques et bien plus encore. Chaque composition est créée en fonction de vos exigences spécifiques, garantissant ainsi une expérience sonore exceptionnelle qui correspond parfaitement à vote vision. Nous sommes dévoués à la qualité et à la créativité.", // 👈 modified
   },
   production: {
      Icon: Icons.Music,
      title: 'Production',
      description:
         "La musique, c'est l'émotion transformée en son. Nos compositeurs internes excellent à convertir votre vision créative en une œuvre musicale. Des partitions orchestrales envoutantes aux tubes pop dynamiques, nous couvrons un large éventail de genres et de styles. Chaque composition est adaptée aux besoins de votre projet, conçue pour soutenir votre histoire et captiver votre audience. Transformez votre œuvre créative avec de la musique qui en dit long et résonne longtemps après la dernière note.", // 👈 modified
   },
   edit: {
      source: '/assets/services/piano-white.png',
      title: 'Édition',
      description:
         "Apporter la magie de la musique et du son à un public en direct est une forme d'art en soi. Notre expertise dans les événements en direct va de l'ingénierie du son à la mise en place de la scène jusqu'au mixage en temps réel. Avec des équipements de premier ordre et des professionnels expérimentés, nous nous assurons que votre événement se déroule sans accroc, laissant à votre public une expérience inoubliable. Que ce soit pour un concert, un événement d'entreprise ou une réunion intime, nous proposons des solutions sur mesure qui font de vos événements en direct quelque chose de remarquable.", // 👈 modified
   },
   soundDesign: {
      Icon: Icons.SoundWave,
      title: 'Design Sonore',
      description:
         "La touche finale d'un chef-d'œuvre audio, le mastering est l'étape où nous assurons que votre projet sonne de manière optimale sur toutes les plateformes et enceintes. Nos ingénieurs expérimentés utilisent des technologies de pointe pour équilibrer les fréquences, améliorer la dynamique et élever votre audio aux normes professionnelles. Que vous cherchiez à distribuer votre musique sur des plateformes de streaming ou à la préparer pour une diffusion, nos services de mastering ajoutent cette dernière couche de vernis qui fait briller votre projet.", // 👈 modified
   },
   live: {
      source: '/assets/services/micro-white.png',
      title: 'Concert',
      description:
         "La touche finale d'un chef-d'œuvre audio, le mastering est l'étape où nous assurons que votre projet sonne de manière optimale sur toutes les plateformes et enceintes. Nos ingénieurs expérimentés utilisent des technologies de pointe pour équilibrer les fréquences, améliorer la dynamique et élever votre audio aux normes professionnelles. Que vous cherchiez à distribuer votre musique sur des plateformes de streaming ou à la préparer pour une diffusion, nos services de mastering ajoutent cette dernière couche de vernis qui fait briller votre projet.", // 👈 modified
   },
}

Object.freeze(Tabs)
