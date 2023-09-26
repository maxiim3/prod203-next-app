'use client'

import {TabItem} from '@/app/(pages)/about/tab-item'
import {TabType, useTabs} from '@/app/(pages)/about/useTabs.hook'
import {T_Children, T_ClassName} from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function SectionFounders({className}: T_ClassName) {
   const {activeTab, setActiveTab} = useTabs(Tabs)
   return (
      <>
         <section
            className={twMerge(
               'relative flex w-full flex-col lg:grid lg:grid-cols-2 lg:gap-2',
               className
            )}>
            <ul
               className={twMerge(
                  'flex aspect-video w-full justify-center',
                  'lg:mt-8 lg:aspect-video lg:max-h-[700px] lg:min-h-[400px] lg:w-full'
               )}>
               <li onClick={() => setActiveTab(Object.keys(Tabs)[0])}>
                  <figure className={'h-full w-full overflow-hidden'}>
                     <Image
                        className={twMerge(
                           'h-full w-full object-cover saturate-50 transition group-hover:scale-110 motion-safe:duration-700',
                           activeTab === Object.keys(Tabs)[0] && 'scale-110 saturate-100'
                        )}
                        width={'187'}
                        height={'404'}
                        src={'/assets/fondateurs/fondateurs-01-min.webp'}
                        alt={''}
                     />
                     <figcaption>Jérome</figcaption>
                  </figure>
               </li>
               <li onClick={() => setActiveTab(Object.keys(Tabs)[1])}>
                  <figure className={'h-full w-full overflow-hidden'}>
                     <Image
                        className={twMerge(
                           'h-full w-full object-cover saturate-50 transition group-hover:scale-110 motion-safe:duration-700',
                           activeTab === Object.keys(Tabs)[1] && 'scale-110 saturate-100'
                        )}
                        width={'187'}
                        height={'404'}
                        src={'/assets/fondateurs/fondateurs-02-min.webp'}
                        alt={''}
                     />
                     <figcaption>Nathan</figcaption>
                  </figure>
               </li>
               <li onClick={() => setActiveTab(Object.keys(Tabs)[2])}>
                  <figure className={'h-full w-full overflow-hidden'}>
                     <Image
                        className={twMerge(
                           'h-full w-full object-cover saturate-50 transition group-hover:scale-110 motion-safe:duration-700',
                           activeTab === Object.keys(Tabs)[2] && 'scale-110 saturate-100'
                        )}
                        width={'187'}
                        height={'404'}
                        src={'/assets/fondateurs/fondateurs-03-min.webp'}
                        alt={''}
                     />
                     <figcaption>Samuel</figcaption>
                  </figure>
               </li>
            </ul>
            <div
               className={
                  'relative z-50 min-h-fit space-y-8 bg-base-100/90 md:m-0  md:rounded-lg md:p-0 '
               }>
               <div className="pb-4 text-center text-sm font-medium text-gray-400 ">
                  <ul className="-mb-px flex flex-wrap items-center justify-between gap-0.5 border-b border-gray-700 xs:flex-row xs:gap-1 md:items-end md:justify-center md:gap-1.5 ">
                     {Object.entries(Tabs).map(([key, value], index) => (
                        <TabItem
                           key={`tab=${index}=${key}`}
                           active={key === activeTab}
                           onClick={() => setActiveTab(key)}
                           className={twMerge(
                              'flex h-8 flex-1 scale-90 flex-col items-center justify-center px-2 text-xs tracking-wide text-balance',
                              'xs:w-20 xs:scale-100 xs:text-sm',
                              'sm:w-24 sm:p-4',
                              'md:aspect-video md:gap-1 md:rounded-t-lg md:border-b-2 md:px-1 md:py-2 md:text-base',
                              'lg:flex-row'
                           )}>
                           <p>{value.title}</p>
                        </TabItem>
                     ))}
                  </ul>
               </div>

               <div>
                  <p className="prose mx-auto mb-3 max-w-[75ch] px-2 pb-4 text-justify leading-relaxed tracking-wide text-gray-400 text-balance sm:px-4 sm:pb-8 md:text-lg">
                     {Tabs[activeTab]?.description}
                  </p>
               </div>
            </div>
         </section>
      </>
   )
}
const Paragraph = ({
   children,
   className,
   withFirstLetter,
}: T_Children & T_ClassName & {withFirstLetter?: boolean}) => (
   <p
      className={twMerge(
         'text-gray-400',
         withFirstLetter &&
            'first-letter:float-left first-letter:mr-3 first-letter:text-7xl  first-letter:font-bold first-letter:text-gray-100',
         className
      )}>
      {children}
   </p>
)
const Tabs: TabType = {
   Jerome: {
      title: 'Jérôme Kuhn',
      description:
         "Jérôme Kuhn est directeur artistique du NOF Nouvel Opéra Fribourg, du Prague Symphonic Ensemble et de l'Ensemble Vocal de Villars-sur-Glâne. Jérôme Kuhn a collaboré en Suisse, en France, en Angleterre, en Allemagne et en République Tchèque avec de nombreux ensembles, comme l'Academy of Ancient Music, l'Orchestre de Chambre fribourgeois, le Nouvel Ensemble Contemporain NEC de la Chaux-de- Fonds et l'Orchestre philharmonique de Prague, l'Estonian Philharmonic Chamber Choir. Actif dans le domaine de l'enregistrement, il collabore pour des productions de Netflix et HBO dans les studios de la Seine Musicale à Paris, AIR Studios à Londres et Smecky Music Studios à Prague. I1 collabore également avec de nombreux artistes de renom comme Mireille Mathieu (Mes Classiques).",
   },
   Nathan: {
      title: 'Nathan Sornetta',
      description:
         'Né en Suisse, Nathan Stornetta est un compositeur, producteur et arrangeur. Il débute sa carrière professionnelle à Londres en travaillant pour Lorne Balfe (Remote Control Productions). Ce dernier l’implique dans le blockbuster “Fast and Furious 6” et la série épique “The Bible”. 2014 et 2015, Nathan vit à Los Angeles, où il travaille comme compositeur additionnel du célèbre Hans Zimmer, collaborant sur des films tels que “Chappie” (Neil Blomkamp), “Premiere Boxing Champions” (NBC) ainsi que “Le Petit Prince” de Mark Osbourne. Une collaboration toujours actuelle puisque Zimmer l’invite à intégrer son groupe de musicien en tant que percussionniste pour partir en tournée avec le “Hans Zimmer Live” (2016-2017) et enregistrer la musique du film “Le Roi Lion” (2019). En 2018, Nathan arrange trois pistes à l’album hommage de Sony Classical “James Horner - The Classics” et participe au projet “Rock the Pops”, mettant en scène Alfie Boe et le Boston Pops Philharmonic. Le court-métrage promotionnel “Éternels” (2019) de Bruno Aveillan, commandé par le Puy du Fou est sa composition la plus récente dans le domaine de la publicité. Depuis 2013, il est le principal compositeur du Puy du Fou, s’exprimant musicalement dans un éventail de genres, travaillant ainsi en étroite collaboration avec les équipes artistiques du Grand Parc. On lui doit notamment la musique des spectacles “Le Dernier Panache”, “Le Ballet des Sapeurs” et “El Sueño de Toledo” (Puy du Fou España), créées depuis son studio de Zurich.\n',
   },
   Sam: {
      title: 'Samuel Briand',
      description:
         'Samuel Briand est ingénieur du son, superviseur musical et réalisateur artistique. Depuis une dizaine d’année, il travaille comme ingénieur du son au Puy du Fou où il réalise les bandes-sonores des spectacles et enregistre les orchestres les plus prestigieux d’Europe. En parallèle, il se forme au mixage de la musique de film auprès d’ingénieurs du son du cinéma, côtoyant des professionnels hollywoodiens tel qu’Alan Meyerson, ingénieur du son de Hans Zimmer (Gladiator, Pirates des Caraïbes, Inception...) et Nick Wollage (Solo: A Star Wars Story, V for Vendetta, Harry Potter...). Plus récemment, il se lance dans le domaine de la publicité et collabore à la production musicale de films publicitaires pour Coca-Cola, Disneyland Paris et, dernièrement, Canal+.',
   },
}
