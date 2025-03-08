'use client'

import type {Artist} from '@/lib/sanity/artist'
import ImageBuilder from '@/lib/sanity/image.builder'
import {Pi} from 'lucide-react'
import Image from 'next/image'
import {twMerge} from 'tailwind-merge'
import useLangParamsHook from '../use-lang-params.hook'

export function ArtistSanityDataContent({
   name,
   description,
   references,
}: {
   name: string
   description: Artist.Artist['description']
   references?: Artist.Artist['references']
}) {
   const {lang} = useLangParamsHook()
   return (
      <div
         className={
            'relative flex flex-[60%] flex-col items-center justify-center gap-4 bg-transparent p-8 text-white'
         }>
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         <article className="leading-relaxed">
            {description &&
               description.map(d => {
                  return (
                     d[lang] &&
                     d[lang].map((node: Artist.En) => (
                        <MapText
                           key={node._key}
                           nodeText={node}
                        />
                     ))
                  )
               })}
            {/* {description &&
               description?.[lang] &&
               description[lang].map((block, index) => {
                  const content = block?.children[0]?.text
                  if (!content) return null

                  return (
                     <p
                        className={twMerge(
                           'font-regular hidden font-poppins text-xs sm:block',
                           'line-clamp-2 text-balance',
                           `transition-all duration-300 motion-safe:sm:-translate-y-[50px] motion-safe:sm:opacity-75 motion-safe:sm:group-hover/card:sm:translate-y-0 motion-safe:sm:group-hover/card:sm:opacity-100`
                        )}
                        key={index + block._key}>
                        {content}
                     </p>
                  )
               })} */}
         </article>
         {references && (
            <footer className={'bottom-2'}>
               {references.map(reference => {
                  const builder = ImageBuilder(reference?.image)?.url()

                  if (!builder)
                     return (
                        <div
                           key={reference._key + 'loading'}
                           className="max-h-fill relative mx-auto flex  flex-wrap items-center justify-center gap-2">
                           <div className="relative h-96 w-96 overflow-clip rounded-sm">
                              Loading...
                           </div>
                        </div>
                     )

                  return (
                     <>
                        {/*
                        *********************************8
                                TODO 🚨
                          Add a thumbnail of reference
                          or add a preview on over
                        *********************************8
                        */}
                        <div
                           key={reference._key + reference.image.asset}
                           className="max-h-fill tooltip relative mx-auto flex  flex-[40%] flex-col flex-wrap items-center justify-center gap-2">
                           <div className="group relative h-20 w-20 rounded-sm">
                              <p
                                 className={twMerge(
                                    'invisible absolute -top-2 group-hover:visible'
                                 )}>
                                 {reference.name}
                              </p>
                              <Image
                                 className={'aspect-square h-full w-full object-contain'}
                                 width={4 * 96}
                                 height={4 * 96}
                                 src={builder}
                                 alt={reference.name}
                                 loading="lazy"
                                 quality={20}
                              />
                           </div>
                        </div>
                     </>
                  )
               })}
            </footer>
         )}
      </div>
   )
}

export function MapText({nodeText}: {nodeText: Artist.En}) {
   return nodeText.children.map(child => (
      <p
         className={'w-full'}
         key={child._key}>
         {child.text}
      </p>
   ))
}

export function ArtistSanityDataImageContainer({
   artistName,
   image,
}: {
   artistName: string
   image: Artist.Image
}) {
   const builder = ImageBuilder(image)?.url()
   if (!builder)
      return (
         <div className="max-h-fill relative mx-auto flex h-96 flex-[40%] flex-wrap items-center justify-center gap-2">
            <div className="relative h-96 w-96 overflow-clip rounded-sm">Loading...</div>
         </div>
      )

   return (
      <div className="max-h-fill relative mx-auto flex h-96 flex-[40%] flex-wrap items-center justify-center gap-2">
         <div className="relative h-96 w-96 overflow-clip rounded-sm">
            <Image
               className={'aspect-square h-full w-full object-cover'}
               width={4 * 96}
               height={4 * 96}
               src={builder}
               alt={`Portrait of ${artistName}`}
               loading="lazy"
               quality={20}
            />
         </div>
      </div>
   )
}
