'use client'

import TeamMemberCard from '@/components/_archive/(pages)/about/team-member-card.client'
import {T_Children, T_ClassName} from '@/lib/types'
import React, {useEffect, useRef, useState} from 'react'
import {ClassNameValue, twMerge} from 'tailwind-merge'

export default function SectionFoundersV1() {
   const section1 = useRef<HTMLDivElement>(null)
   const section2 = useRef<HTMLDivElement>(null)
   const section3 = useRef<HTMLDivElement>(null)

   const [selectedSection, setSelectedSection] = useState<HTMLDivElement | null>(null)

   useEffect(() => {
      console.log('selectedSection', selectedSection)
      if (!selectedSection) return

      const sectionTopPos = selectedSection.offsetTop

      if (window.innerWidth < 1024)
         return window.scrollTo({top: sectionTopPos - 200, behavior: 'smooth'})

      const offsetTop = 312 // depends on the section header height
      return window.scrollTo({top: sectionTopPos - offsetTop, behavior: 'smooth'})
   }, [selectedSection])
   const scrollToSection = (section: HTMLDivElement) => {
      setSelectedSection(section)
   }

   const sectionClassName: ClassNameValue = twMerge(
      'flex md:min-h-[600px] w-full flex-col gap-4',
      'p-8 text-balance'
   )

   return (
      <section className={'flex w-screen flex-col lg:flex-row'}>
         <nav
            className={twMerge(
               ' sticky -top-80 h-full w-screen lg:top-80 lg:w-[50vw]',
               'grid grid-cols-3 gap-x-1'
            )}>
            <div onClick={() => scrollToSection(section1.current!)}>
               <TeamMemberCard
                  isSelected={selectedSection?.id === '1'}
                  firstName={'Jérôme'}
                  lastName={'Kuhn'}
                  imageSrc="/assets/fondateurs/fondateurs-01-min.webp"
                  role={['Direction', 'Artistique']}
               />
            </div>
            <div onClick={() => scrollToSection(section2.current!)}>
               <TeamMemberCard
                  isSelected={selectedSection?.id === '2'}
                  firstName={'Nathan'}
                  lastName={'Sornetta'}
                  imageSrc="/assets/fondateurs/fondateurs-02-min.webp"
                  role={['Arrangement', 'Composition']}
               />
            </div>
            <div onClick={() => scrollToSection(section3.current!)}>
               <TeamMemberCard
                  isSelected={selectedSection?.id === '3'}
                  firstName={'Samuel'}
                  lastName={'Briand'}
                  imageSrc="/assets/fondateurs/fondateurs-03-min.webp"
                  role={['Sound Design', 'Post-Production']}
               />{' '}
            </div>
         </nav>
         {/*Bellow s the scrolling area*/}
         <main className={'flex w-full flex-col lg:w-[50vw]'}>
            <section
               id={'1'}
               ref={section1}
               className={sectionClassName}>
               <Paragraph withFirstLetter>
                  J&eacute;r&ocirc;me Kuhn est directeur artistique du NOF Nouvel Op&eacute;ra
                  Fribourg, du Prague Symphonic Ensemble et de l&apos;Ensemble Vocal de Villars-sur-
                  Gl&acirc;ne.
               </Paragraph>
               <Paragraph>
                  J&eacute;r&ocirc;me Kuhn a collabor&eacute; en Suisse, en France, en Angleterre,
                  en Allemagne et en R&eacute;publique Tch&egrave;que avec de nombreux ensembles,
                  comme l&apos;Academy of Ancient Music, l&apos;Orchestre de Chambre fribourgeois,
                  le Nouvel Ensemble Contemporain NEC de la Chaux-de- Fonds et l&apos;Orchestre
                  philharmonique de Prague, l&apos;Estonian Philharmonic Chamber Choir.
               </Paragraph>
               <Paragraph>
                  Actif dans le domaine de l&apos;enregistrement, il collabore pour des productions
                  de Netflix et HBO dans les studios de la Seine Musicale &agrave; Paris, AIR
                  Studios &agrave; Londres et Smecky Music Studios &agrave; Prague. I1 collabore
                  &eacute;galement ave de nombreux artistes de renom comme Mireille Mathieu (Mes
                  Classiques).
               </Paragraph>
            </section>
            <section
               id={'2'}
               ref={section2}
               className={sectionClassName}>
               <Paragraph withFirstLetter>
                  N&eacute; en Suisse, Nathan Stornetta est un compositeur, producteur et arrangeur.
                  Il d&eacute;bute sa carri&egrave;re professionnelle &agrave; Londres en
                  travaillant pour Lorne Balfe (Remote Control Productions). Ce dernier
                  l&rsquo;implique dans le blockbuster &ldquo;Fast and Furious 6&rdquo; et la
                  s&eacute;rie &eacute;pique &ldquo;The Bible&rdquo;.
               </Paragraph>
               <Paragraph>
                  2014 et 2015, Nathan vit &agrave; Los Angeles, o&ugrave; il travaille comme
                  compositeur additionnel du c&eacute;l&egrave;bre Hans Zimmer, collaborant sur des
                  films tels que &ldquo;Chappie&rdquo; (Neil Blomkamp), &ldquo;Premiere Boxing
                  Champions&rdquo; (NBC) ainsi que &ldquo;Le Petit Prince&rdquo; de Mark Osbourne.
                  Une collaboration toujours actuelle puisque Zimmer l&rsquo;invite &agrave;
                  int&eacute;grer son groupe de musicien en tant que percussionniste pour partir en
                  tourn&eacute;e avec le &ldquo;Hans Zimmer Live&rdquo; (2016-2017) et enregistrer
                  la musique du film &ldquo;Le Roi Lion&rdquo; (2019).
               </Paragraph>
               <Paragraph>
                  En 2018, Nathan arrange trois pistes &agrave; l&rsquo;album hommage de Sony
                  Classical &ldquo;James Horner - The Classics&rdquo; et participe au projet
                  &ldquo;Rock the Pops&rdquo;, mettant en sc&egrave;ne Alfie Boe et le Boston Pops
                  Philharmonic.{' '}
               </Paragraph>
               <Paragraph>
                  Le court-m&eacute;trage promotionnel &ldquo;&Eacute;ternels&rdquo; (2019) de Bruno
                  Aveillan, command&eacute; par le Puy du Fou est sa composition la plus
                  r&eacute;cente dans le domaine de la publicit&eacute;. Depuis 2013, il est le
                  principal compositeur du Puy du Fou, s&rsquo;exprimant musicalement dans un
                  &eacute;ventail de genres, travaillant ainsi en &eacute;troite collaboration avec
                  les &eacute;quipes artistiques du Grand Parc. On lui doit notamment la musique des
                  spectacles &ldquo;Le Dernier Panache&rdquo;, &ldquo;Le Ballet des Sapeurs&rdquo;
                  et &ldquo;El Sue&ntilde;o de Toledo&rdquo; (Puy du Fou Espa&ntilde;a),
                  cr&eacute;&eacute;es depuis son studio de Zurich.
               </Paragraph>
            </section>
            <section
               id={'3'}
               ref={section3}
               className={sectionClassName}>
               <Paragraph withFirstLetter>
                  Samuel Briand est ing&eacute;nieur du son, superviseur musical et
                  r&eacute;alisateur artistique.
               </Paragraph>
               <Paragraph>
                  Depuis une dizaine d&rsquo;ann&eacute;e, il travaille comme ing&eacute;nieur du
                  son au Puy du Fou o&ugrave; il r&eacute;alise les bandes-sonores des spectacles et
                  enregistre les orchestres les plus prestigieux d&rsquo;Europe. En
                  parall&egrave;le, il se forme au mixage de la musique de film aupr&egrave;s
                  d&rsquo;ing&eacute;nieurs du son du cin&eacute;ma, c&ocirc;toyant des
                  professionnels hollywoodiens tel qu&rsquo;Alan Meyerson, ing&eacute;nieur du son
                  de Hans Zimmer (Gladiator, Pirates des Cara&iuml;bes, Inception...) et Nick
                  Wollage (Solo: A Star Wars Story, V for Vendetta, Harry Potter...).
               </Paragraph>
               <Paragraph>
                  Plus r&eacute;cemment, il se lance dans le domaine de la publicit&eacute; et
                  collabore &agrave; la production musicale de films publicitaires pour Coca-Cola,
                  Disneyland Paris et, derni&egrave;rement, Canal+
               </Paragraph>
            </section>
         </main>
      </section>
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
