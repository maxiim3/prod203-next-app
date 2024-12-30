import content from '@/app/[lang]/artists/artist-content.json'
import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {SectionTitle} from '@/components/section-title'
import {getAllArtists} from '@/lib/sanity/service'
import {cn} from '@/lib/utils'
import {ArtistSanityDataContent, ArtistSanityDataImageContainer} from './artist.sanity.components'
import {ArtistStaticDataContent, ArtistStaticDataImageContainer} from './artist.static.component'
import {
   ArtistStaticDataFactory,
   T_ArtistStaticData,
   T_CategoryArtist,
   Z_CategoryArtist,
} from './artists-assets.types'

export const revalidate = 2

export default async function Home({params}: T_I18nPageParam) {
   const {lang} = params
   const artistStaticData: T_ArtistStaticData = ArtistStaticDataFactory(content) // static content
   const artists = await getAllArtists() // from Sanity.io Admin

   return (
      <main className={'z-0 mx-auto w-screen py-24'}>
         <h1 className="sr-only">Artists</h1>
         <div className={'min-h-48 flex w-screen items-center justify-center'}>
            <div className={'box-border flex w-[calc(100vw-10px)] max-w-[990px] flex-col gap-8'}>
               {artistStaticData.map(({artists, title}, key) => {
                  return (
                     <>
                        <SectionTitle key={`title-${key}`}>{title[lang]}</SectionTitle>
                        {Object.entries(artists).map(([artistKey, artistValue], index) => (
                           <div
                              key={artistKey}
                              className={cn(
                                 'min-h-16 flex w-full flex-col-reverse items-center border border-primary/10 py-8 shadow-md md:flex-row',
                                 {'md:flex-row-reverse': (index + key) % 2 === 0}
                              )}>
                              <ArtistStaticDataContent
                                 name={artistValue.artist}
                                 textNodes={artistValue.textNodes}
                              />
                              <ArtistStaticDataImageContainer
                                 artistName={artistValue.artist}
                                 directory={artistValue.assetdirectory}
                              />
                           </div>
                        ))}
                     </>
                  )
               })}
               {artists.map((artist, key) => (
                  <div
                     key={artist._id + artist._createdAt}
                     className={cn(
                        'min-h-16 flex w-full flex-col-reverse items-center border border-primary/10 py-8 shadow-md md:flex-row',
                        {'md:flex-row-reverse': key % 2 === 0}
                     )}>
                     <ArtistSanityDataContent
                        name={artist.name}
                        description={artist.description}
                        references={artist.references}
                     />
                     <ArtistSanityDataImageContainer
                        artistName={artist.name}
                        image={artist.image}
                     />
                  </div>
               ))}
            </div>
         </div>
      </main>
   )
}
