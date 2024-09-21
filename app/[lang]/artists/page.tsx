'use client'

import content from '@/app/[lang]/artists/artist-content.json'
import type { T_I18nPageParam } from '@/app/[lang]/page-params.schema'
import { SectionTitle } from '@/components/section-title'
import { cn } from '@/lib/utils'
import { useFetchAssets } from './useFetchAssets'
import type { JSON_AssetCategory } from './artists-assets.types'

export default function Home({ params }: T_I18nPageParam) {
   const { lang } = params
   const assets = useFetchAssets()
   const artistData: JSON_AssetCategory[] = content

   // Add shadcn
   // build blocks for layout
   // add content in json
   // add placeholder images
   return (
      <main className={'z-0 py-24 mx-auto w-screen'}>
         <h1 className="sr-only">Artists</h1>
         <div className={'flex justify-center items-center w-screen min-h-48'}>
            <div className={'flex flex-col gap-12 w-screen max-w-[1080px]'}>
               {artistData.map(({ artists, title }, key) => {
                  return (
                     <>
                        <SectionTitle key={`title-${key}`}>{title[lang]}</SectionTitle>
                        {Object.entries(artists).map(([key, value]) => (
                           <div
                              key={key}
                              className={
                                 'flex flex-col gap-8 p-8 w-full border min-h-16 border-white/30 md:flex-row'
                              }>
                              <ArtistImageContainer paths={assets[value.assetdirectory]!}/>
                              <ArtistContent
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

function ArtistContent({ text, name }: { text: string; name?: string }) {
   return (
      <div className='flex h-96 gap-4 flex-col items-center justify-center p-8 flex-[60%] bg-transparent text-white'>
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         <p>{text}</p>
      </div>
   )
}

function ArtistImageContainer({ paths }: { paths: string[] }) {

   return (<div
      className='flex h-96 flex-col items-center justify-center p-8  flex-[40%] bg-slate-400 text-black'>
      {paths.map(p => (<p key={p}>{p}</p>))}
   </div>
   )
}

function Placeholder({ type, text, name }: { type: 'image' | 'text'; text: string; name?: string }) {
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
