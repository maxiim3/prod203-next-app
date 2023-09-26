import SinglePageLayoutTemplate from '@/components/ui/single-page-layout.template'

export default function Legal() {
   return (
      <SinglePageLayoutTemplate
         className={
            'text-poppins prose mx-auto flex h-auto w-screen flex-col items-center justify-center px-2 py-32 text-balance md:px-12'
         }>
         <h1>MENTIONS LÉGALES</h1>
         <p>
            La société JAMAIS 203 PRODUCTIONS, en activité depuis le 15/10/2021, au capital de
            $CAPITAL$, immatriculée au RCS avec le SIRET 90463232000019, dont le siège social est
            situé à COURAUX, 85700 POUZAUGES.
         </p>
         <p>Hébergeur: Vercel, adresse et numéro de contact de Vercel.</p>
         <h2>DONNÉES PERSONNELLES</h2>
         <h3>DONNEES PERSONNELLES - POLITIQUE DE CONFIDENTIALITÉ</h3>
         <p>
            En application de la loi informatique et liberté du 6 janvier 1978 modifiée, vous
            disposez d’un droit d’accès, de rectification et de retrait des données personnelles
            vous concernant. Aucune information personnelle n&apos;est collectée à votre insu.
            Aucune information personnelle n&apos;est cédée à des tiers. Vous pouvez exercer ce
            droit en indiquant vos nom, prénom et adresse complète, soit : Par courrier électronique
            à l’adresse : [Votre adresse e-mail] Par voie postale à l’adresse suivante : [Votre
            adresse postale]
         </p>
         Aucun cookie ni données
         <p>personnelles ne sont collectés sur ce site</p>
         <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
         <p>
            Le site et l’ensemble de son contenu relèvent de la législation française et
            internationale sur le droit d’auteur et la propriété intellectuelle, et sont la
            propriété exclusive de JAMAIS 203 PRODUCTIONS et/ou de ses partenaires. Sauf
            autorisation préalable et expresse de JAMAIS 203 PRODUCTIONS, la représentation ou la
            reproduction de tout ou partie de ce site est formellement interdite.
         </p>
         <h2>LOI APPLICABLE ET COMPÉTENCE JURIDICTIONNELLE</h2>
         <p>
            Les présentes mentions légales et politique de confidentialité sont régies par la loi
            française. En cas de litige relatif à leur validité, leur interprétation et/ou leur
            application, attribution expresse de juridiction est donnée aux tribunaux compétents de
            [Votre juridiction, souvent la ville où est situé le siège social].
         </p>
         {/* Section légale - Fin */}
      </SinglePageLayoutTemplate>
   )
}
// # Identification du professionnel :
// Identité de l'entreprise : Nom, prénom, adresse,
// Numéro d'immatriculation
// Mail et numéro de telephone
// Identité de l'hébergeur du site internet -> Vercel (Nom, denomination sociale, numéro de telephone et adresse)
//
