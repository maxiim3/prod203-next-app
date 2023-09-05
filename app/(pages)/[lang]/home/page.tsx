import {BuildingPage} from '@/components/ui/BuildingPage'
import React from 'react'

const Page = ({params}: {params: {lang: 'fr' | 'eng'}}) => {
   return (
      <main className={'flex h-screen w-screen items-center justify-center'}>
         <div className={'mx-auto flex w-96 flex-col gap-12'}>
            <h1>
               {pageContent.title[params.lang]} {params.lang}{' '}
            </h1>
            <p>{pageContent.content[params.lang]}</p>
         </div>
      </main>
   )
}

const pageContent = {
   title: {
      eng: 'This page is in : ',
      fr: 'Cette Page est en : ',
   } satisfies International,
   content: {
      eng: 'Life is a journey full of twists and turns, so embrace the unknown and never stop learning.',
      fr: "La vie est un voyage plein de rebondissements, alors accueillez l'inconnu et ne cessez jamais d'apprendre.",
   } satisfies International,
}

export default Page
