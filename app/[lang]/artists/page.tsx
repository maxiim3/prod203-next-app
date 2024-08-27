'use client'

import content from '@/app/[lang]/artists/artist-content.json'
import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {SectionTitle} from '@/components/section-title'
import {cn} from '@/lib/utils'

export default async function Home({params}: T_I18nPageParam) {
   const {lang} = params

   // Add shadcn
   // build blocks for layout
   // add content in json
   // add placeholder images
   return (
      <main className={'z-0 mx-auto w-screen py-24'}>
         <h1 className="sr-only">Artists</h1>
         <div className={'min-h-48 flex w-screen items-center justify-center'}>
            <div className={'flex w-screen max-w-[1080px] flex-col gap-12'}>
               {content.map(({artists, title}, key) => {
                  return (
                     <>
                        <SectionTitle key={`title-${key}`}>{title[lang]}</SectionTitle>
                        {Object.entries(artists).map(([key, value]) => (
                           <div
                              key={key}
                              className={
                                 'min-h-16 flex w-full flex-col  gap-8 border border-white/30 p-8 md:flex-row'
                              }>
                              <Placeholder
                                 type={'image'}
                                 text={value.artist}
                              />
                              <Placeholder
                                 type={'text'}
                                 name={value.artist}
                                 text={value[lang]}
                              />
                           </div>
                        ))}
                     </>
                  )
               })}
            </div>
         </div>
      </main>
   )
}

function Placeholder({type, text, name}: {type: 'image' | 'text'; text: string; name?: string}) {
   return (
      <div
         className={cn(
            `flex h-96 flex-col items-center justify-center p-8 `,
            type === 'image'
               ? 'flex-[40%] bg-slate-400 text-black'
               : 'flex-[60%] bg-transparent text-white',
            name && 'gap-4'
         )}>
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         {text}
      </div>
   )
}
