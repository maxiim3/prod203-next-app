import {cn} from '@/lib/utils'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import Link from 'next/link'
import React, {ComponentPropsWithoutRef, ComponentPropsWithRef} from 'react'

export default function Legal({params}: I_PageI18nParams) {
   const {lang} = params

   const Text = ({children, className}: ComponentPropsWithoutRef<'p'>) => (
      <p className={cn('m-0 p-0 font-light !text-primary text-balance', className)}>{children}</p>
   )
   const Main = ({className, children}: ComponentPropsWithRef<'main'>) => (
      <main
         className={cn(
            'prose mx-auto mb-12 mt-24 flex min-h-screen w-screen flex-col items-center justify-center gap-12 text-sm sm:text-base',
            className
         )}>
         {children}
      </main>
   )

   const Block = ({children, className}: ComponentPropsWithoutRef<'div'>) => (
      <div className={cn('prose flex max-w-[85ch] flex-col gap-2', className)}>{children}</div>
   )

   if (lang === 'en')
      return (
         <Main>
            <Block>
               <h1>LEGAL MENTIONS</h1>
               <Text>
                  The company NEVER 203 PRODUCTIONS, active since 10/15/2021, with a capital of
                  €3000, registered with the RCS of La Roche-sur-Yon under the number 904 632 320,
                  with the SIRET 90463232000019, whose registered office is located at COURAUX,
                  85700 POUZAUGES.
               </Text>
               <Text>Host: Vercel, address and contact number of Vercel.</Text>
            </Block>
            <Block>
               <h2>PERSONAL DATA</h2>
               <h3>PERSONAL DATA - PRIVACY POLICY</h3>
               <Text>
                  In application of the modified data protection act of January 6, 1978, you have
                  the right to access, modify, and withdraw personal data concerning you. No
                  personal information is collected without your knowledge. No personal information
                  is given to third parties. You can exercise this right by providing your first
                  name, last name, and full address, either:{' '}
                  <Link
                     type={'mail'}
                     href="/contact">
                     By email
                  </Link>
                  . By postal mail at the following address: COURAUX, 85700 POUZAUGES.
               </Text>
               <Text>No cookies or personal data are collected on this site.</Text>
            </Block>
            <Block>
               <h2>INTELLECTUAL PROPERTY</h2>
               <Text>
                  The site and all of its content are subject to French and international copyright
                  and intellectual property laws, and are the exclusive property of NEVER 203
                  PRODUCTIONS and/or its partners. Unless prior and express authorization from NEVER
                  203 PRODUCTIONS, the representation or reproduction of all or part of this site is
                  strictly prohibited.
               </Text>
            </Block>
            <Block>
               <h2>APPLICABLE LAW AND JURISDICTION</h2>
               <Text>
                  These legal notices and privacy policy are governed by French law. In the event of
                  a dispute relating to their validity, interpretation, and/or application, express
                  jurisdiction is granted to the competent courts of POUZAUGES.
               </Text>
            </Block>
         </Main>
      )
   return (
      <Main>
         <Block>
            <h1>MENTIONS LÉGALES</h1>
            <Text>
               La société JAMAIS 203 PRODUCTIONS, en activité depuis le 15/10/2021, au capital de
               3000€, immatriculée au RCS de La Roche-sur-Yon sous le numéro 904 632 320, avec le
               SIRET 90463232000019, dont le siège social est situé à COURAUX, 85700 POUZAUGES.
            </Text>
            <Text>
               Hébergeur: <Link href={'https://vercel.com/home'}>Vercel Inc.</Link> 440 N Barranca
               Ave #4133 Covina, CA 91723
            </Text>
         </Block>
         <Block>
            <h2>DONNÉES PERSONNELLES</h2>
            <h3>DONNEES PERSONNELLES - POLITIQUE DE CONFIDENTIALITÉ</h3>
            <Text>
               En application de la loi informatique et liberté du 6 janvier 1978 modifiée, vous
               disposez d’un droit d’accès, de rectification et de retrait des données personnelles
               vous concernant. Aucune information personnelle n&apos;est collectée à votre insu.
               Aucune information personnelle n&apos;est cédée à des tiers. Vous pouvez exercer ce
               droit en indiquant vos nom, prénom et adresse complète, soit :{' '}
               <Link
                  type={'mail'}
                  href="/contact">
                  Par courriel
               </Link>
               {'. '}Ou par voie postale à l’adresse suivante : COURAUX, 85700 POUZAUGES.
            </Text>
            <Text>Aucun cookie ni données personnelles ne sont collectés sur ce site</Text>
         </Block>
         <Block>
            <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
            <Text>
               Le site et l’ensemble de son contenu relèvent de la législation française et
               internationale sur le droit d’auteur et la propriété intellectuelle, et sont la
               propriété exclusive de JAMAIS 203 PRODUCTIONS et/ou de ses partenaires. Sauf
               autorisation préalable et expresse de JAMAIS 203 PRODUCTIONS, la représentation ou la
               reproduction de tout ou partie de ce site est formellement interdite.
            </Text>
         </Block>
         <Block>
            <h2>LOI APPLICABLE ET COMPÉTENCE JURIDICTIONNELLE</h2>
            <Text>
               Les présentes mentions légales et politique de confidentialité sont régies par la loi
               française. En cas de litige relatif à leur validité, leur interprétation et/ou leur
               application, attribution expresse de juridiction est donnée aux tribunaux compétents
               de POUZAUGES.
            </Text>
         </Block>
      </Main>
   )
}
// # Identification du professionnel :
// Identité de l'entreprise : Nom, prénom, adresse,
// Numéro d'immatriculation
// Mail et numéro de telephone
// Identité de l'hébergeur du site internet -> Vercel (Nom, denomination sociale, numéro de telephone et adresse)
//
