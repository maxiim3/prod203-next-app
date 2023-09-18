'use client'

import {T_Children, T_ClassName} from '@/lib/types'
import React, {useState} from 'react'
import {twMerge} from 'tailwind-merge'

export function AboutTabsSection() {
   const defaultTab = Tabs[Object.keys(Tabs)[0]].title // first tab

   const [activeTab, setActiveTab] = useState<string>(defaultTab)

   return (
      <>
         <div className="border-b border-gray-700 text-center text-sm font-medium text-gray-400 ">
            <ul className="-mb-px flex flex-col justify-start xs:flex-row xs:justify-center md:gap-2 ">
               {Object.entries(Tabs).map(([key, value], index) => (
                  <TabItem
                     key={`tab=${index}=${key}`}
                     active={key === activeTab}
                     onClick={() => setActiveTab(key)}
                     className={'w-full lg:w-auto'}>
                     {value.title}
                  </TabItem>
               ))}
            </ul>
         </div>

         <div>
            <p className="mb-3 max-w-[75ch] text-center leading-relaxed tracking-wide text-gray-400 text-balance">
               {Tabs[activeTab].description}
            </p>
         </div>
      </>
   )
}

type T_TabItemProps = {
   active?: boolean
   disabled?: boolean
   onClick?: () => void
} & T_ClassName &
   T_Children

const TabItem = ({className, children, active, disabled, onClick}: T_TabItemProps) => {
   return (
      <li
         aria-current={active ? 'page' : undefined}
         onClick={disabled ? undefined : onClick}
         tabIndex={0}
         onKeyDown={e => {
            if (e.key === 'Enter' && !disabled) onClick?.()
         }}
         className={twMerge(
            'inline-block w-40 rounded-t-lg border-b-2 p-2 text-xs xs:w-full sm:p-4 md:text-sm',
            active
               ? 'active border-gray-50 p-4 text-gray-50 '
               : 'border-transparent hover:cursor-pointer hover:text-gray-600',
            disabled && 'cursor-not-allowed text-gray-400 ',
            className
         )}>
         <h2>{children}</h2>
      </li>
   )
}

type TabType = {
   title: string
   description: string
}
const Tabs: Record<string, TabType> = {
   music: {
      title: 'Musiques originales',
      description:
         "Jamais 203 Productions se démarque en offrant des compositions musicales sur mesure qui éveillent les émotions, racontent des histoires et renforcent l'impact de vos projets. Que vous soyez réalisateur de films, créateur de contenu, professionnel du marketing ou tout simplement à la recherche de la bande-son parfaite pour votre événement, nous sommes là pour répondre à vos besoins musicaux uniques. Nos compositeurs sont spécialisés dans une variété de genres musicaux, de l'orchestration épique, en passant par les ambiances acoustiques et bien plus encore. Chaque composition est créée en fonction de vos exigences spécifiques, garantissant ainsi une expérience sonore exceptionnelle qui correspond parfaitement à vote vision. Nous sommes dévoués à la qualité et à la créativité.", // 👈 modified
   },
   production: {
      title: 'Production',
      description:
         "La musique, c'est l'émotion transformée en son. Nos compositeurs internes excellent à convertir votre vision créative en une œuvre musicale. Des partitions orchestrales envoutantes aux tubes pop dynamiques, nous couvrons un large éventail de genres et de styles. Chaque composition est adaptée aux besoins de votre projet, conçue pour soutenir votre histoire et captiver votre audience. Transformez votre œuvre créative avec de la musique qui en dit long et résonne longtemps après la dernière note.", // 👈 modified
   },
   edit: {
      title: 'Édition',
      description:
         "Apporter la magie de la musique et du son à un public en direct est une forme d'art en soi. Notre expertise dans les événements en direct va de l'ingénierie du son à la mise en place de la scène jusqu'au mixage en temps réel. Avec des équipements de premier ordre et des professionnels expérimentés, nous nous assurons que votre événement se déroule sans accroc, laissant à votre public une expérience inoubliable. Que ce soit pour un concert, un événement d'entreprise ou une réunion intime, nous proposons des solutions sur mesure qui font de vos événements en direct quelque chose de remarquable.", // 👈 modified
   },
   soundDesign: {
      title: 'Design Sonore',
      description:
         "La touche finale d'un chef-d'œuvre audio, le mastering est l'étape où nous assurons que votre projet sonne de manière optimale sur toutes les plateformes et enceintes. Nos ingénieurs expérimentés utilisent des technologies de pointe pour équilibrer les fréquences, améliorer la dynamique et élever votre audio aux normes professionnelles. Que vous cherchiez à distribuer votre musique sur des plateformes de streaming ou à la préparer pour une diffusion, nos services de mastering ajoutent cette dernière couche de vernis qui fait briller votre projet.", // 👈 modified
   },
   live: {
      title: 'Concert',
      description:
         "La touche finale d'un chef-d'œuvre audio, le mastering est l'étape où nous assurons que votre projet sonne de manière optimale sur toutes les plateformes et enceintes. Nos ingénieurs expérimentés utilisent des technologies de pointe pour équilibrer les fréquences, améliorer la dynamique et élever votre audio aux normes professionnelles. Que vous cherchiez à distribuer votre musique sur des plateformes de streaming ou à la préparer pour une diffusion, nos services de mastering ajoutent cette dernière couche de vernis qui fait briller votre projet.", // 👈 modified
   },
}

Object.freeze(Tabs)
