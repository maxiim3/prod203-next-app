import fs from 'fs'
import {NextResponse} from 'next/server'
import path from 'path'

// Cache data
// export const dynamic = 'force-static'

export interface ArtistAPI {
   [key: string]: string[]
}
/**
 * Returns all images from directory /public/assets/artists/[[artist_name]]/**.*
 */
export async function GET() {
   const artistsDir = path.join(process.cwd(), 'public', 'assets', 'artists')
   // Filter the file system like `.DS_Store`
   const artist = fs.readdirSync(artistsDir).filter(p => !p.startsWith('.'))
   let images: ArtistAPI = {}

   for (let artistPath of artist) {
      const artistsDir = path.join(process.cwd(), 'public', 'assets', 'artists', artistPath)
      const artist = fs.readdirSync(artistsDir)

      // Filter the file system like `.DS_Store`
      images[artistPath] = artist.filter(p => !p.startsWith('.'))
   }

   for (let artist in images ) {
     images[artist] = images[artist].filter(img => img.startsWith('ok') && img.endsWith('png'))
   }

   return NextResponse.json(images)
}
