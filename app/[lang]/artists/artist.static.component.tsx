'use client'

import Image from 'next/image'
import Link from 'next/link'
import useLangParams from '../use-lang-params.hook'
import type {TextNode} from './node.types'
import {useFetchAssets} from './useFetchAssets'

function buildURL(url: string, endpoint: string) {
   return url.concat(endpoint)
}

function MapTextNodes({node}: {node: TextNode}) {
   const {lang} = useLangParams()

   if (!node) return

   switch (node?.type) {
      case 'link':
         return <Link href={node?.url}>{node?.content[lang]}</Link>
      case 'text-regular':
         return <span className="m-0 p-0">{node?.content[lang]}</span>
      case 'text-bold':
         return <b className="font-semibold">{node?.content[lang]}</b>
      case 'line-break':
         return <br />
   }
}

export function ArtistStaticDataContent({textNodes, name}: {textNodes: TextNode[]; name?: string}) {
   return (
      <div
         className={
            'relative flex h-96 flex-[60%] flex-col items-center justify-center gap-4 bg-transparent p-8 text-white'
         }>
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         <article className="leading-relaxed">
            {textNodes.map((node, key) => (
               <MapTextNodes
                  key={key + node.type}
                  node={node}
               />
            ))}
         </article>
         <footer className={'absolute bottom-2'}>references</footer>
      </div>
   )
}

/**
 * 'oke.png' is the image choosen for the artist portrait from public/assets/artist_foo/oke.png
 */
export function ArtistStaticDataImageContainer({
   artistName,
   directory,
}: {
   artistName: string
   directory: string
}) {
   const assets = useFetchAssets()
   const img = assets[directory]?.[0] // Filtered in Api/artists

   if (!img)
      return (
         <div className="max-h-fill relative mx-auto flex h-96 flex-[40%] flex-wrap items-center justify-center gap-2">
            <div className="relative h-96 w-96 overflow-clip rounded-sm">Loading...</div>
         </div>
      )

   const url = buildURL(`/assets/artists/${directory}/`, img)
   return (
      <div className="max-h-fill relative mx-auto flex h-96 flex-[40%] flex-wrap items-center justify-center gap-2">
         <div className="relative h-96 w-96 overflow-clip rounded-sm">
            <Image
               className={'aspect-square h-full w-full object-cover'}
               width={4 * 96}
               height={4 * 96}
               src={url}
               alt={`Portrait of ${artistName}`}
               loading="lazy"
               quality={20}
            />
         </div>
      </div>
   )
}
