import SinglePageLayoutTemplate from '@/components/ui/single-page-layout.template'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'

export default function Legal({params}: I_PageI18nParams) {
   const {lang} = params

   return (
      <SinglePageLayoutTemplate
         className={
            'text-poppins prose mx-auto flex h-auto w-screen flex-col items-center justify-center px-2 py-32 text-balance md:px-12'
         }>
         {lang === 'en' ? (
            <>
               <h1>LEGAL NOTICE</h1>
               <p>
                  The company NEVER 203 PRODUCTIONS, active since 10/15/2021, with a capital of
                  $CAPITAL$, registered with the RCS with the SIRET 90463232000019, whose head
                  office is located at COURAUX, 85700 POUZAUGES.
               </p>
               <p>Hosting: Vercel, address and contact number of Vercel.</p>
               <h2>PERSONAL DATA</h2>
               <h3>PERSONAL DATA - PRIVACY POLICY</h3>
               <p>
                  In accordance with the amended Data Protection Act of January 6, 1978, you have
                  the right to access, modify, and delete personal data concerning you. No personal
                  information is collected without your knowledge. No personal information is given
                  to third parties. You can exercise this right by specifying your first name, last
                  name, and complete address, either: By email to the address: [Your email address]
                  By mail to the following address: [Your postal address]
               </p>
               <p>No cookies or personal data are collected on this site.</p>
               <h2>INTELLECTUAL PROPERTY</h2>
               <p>
                  The site and all of its content are subject to French and international copyright
                  and intellectual property laws and are the exclusive property of NEVER 203
                  PRODUCTIONS and/or its partners. Unless prior and explicit authorization from
                  NEVER 203 PRODUCTIONS, the representation or reproduction of all or part of this
                  site is strictly prohibited.
               </p>
               <h2>APPLICABLE LAW AND JURISDICTION</h2>
               <p>
                  These legal notices and privacy policy are governed by French law. In case of
                  dispute concerning their validity, interpretation, and/or application, express
                  jurisdiction is granted to the competent courts of [Your jurisdiction, often the
                  city where the head office is located].
               </p>
            </>
         ) : (
            <>
               <h1>MENTIONS LÉGALES</h1>
               <p>
                  La société JAMAIS 203 PRODUCTIONS, en activité depuis le 15/10/2021, au capital de
                  $CAPITAL$, immatriculée au RCS avec le SIRET 90463232000019, dont le siège social
                  est situé à COURAUX, 85700 POUZAUGES.
               </p>
               <p>Hébergeur: Vercel, adresse et numéro de contact de Vercel.</p>
               <h2>DONNÉES PERSONNELLES</h2>
               <h3>DONNEES PERSONNELLES - POLITIQUE DE CONFIDENTIALITÉ</h3>
               <p>
                  En application de la loi informatique et liberté du 6 janvier 1978 modifiée, vous
                  disposez d’un droit d’accès, de rectification et de retrait des données
                  personnelles vous concernant. Aucune information personnelle n&apos;est collectée
                  à votre insu. Aucune information personnelle n&apos;est cédée à des tiers. Vous
                  pouvez exercer ce droit en indiquant vos nom, prénom et adresse complète, soit :
                  Par courrier électronique à l’adresse : [Votre adresse e-mail] Par voie postale à
                  l’adresse suivante : [Votre adresse postale]
               </p>
               Aucun cookie ni données
               <p>personnelles ne sont collectés sur ce site</p>
               <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
               <p>
                  Le site et l’ensemble de son contenu relèvent de la législation française et
                  internationale sur le droit d’auteur et la propriété intellectuelle, et sont la
                  propriété exclusive de JAMAIS 203 PRODUCTIONS et/ou de ses partenaires. Sauf
                  autorisation préalable et expresse de JAMAIS 203 PRODUCTIONS, la représentation ou
                  la reproduction de tout ou partie de ce site est formellement interdite.
               </p>
               <h2>LOI APPLICABLE ET COMPÉTENCE JURIDICTIONNELLE</h2>
               <p>
                  Les présentes mentions légales et politique de confidentialité sont régies par la
                  loi française. En cas de litige relatif à leur validité, leur interprétation et/ou
                  leur application, attribution expresse de juridiction est donnée aux tribunaux
                  compétents de [Votre juridiction, souvent la ville où est situé le siège social].
               </p>
            </>
         )}
      </SinglePageLayoutTemplate>
   )
}
// # Identification du professionnel :
// Identité de l'entreprise : Nom, prénom, adresse,
// Numéro d'immatriculation
// Mail et numéro de telephone
// Identité de l'hébergeur du site internet -> Vercel (Nom, denomination sociale, numéro de telephone et adresse)
//
