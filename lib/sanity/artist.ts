import {describe} from 'node:test'

export namespace Artist {
   export type Artist = {
      _id: string
      _type: string
      _createdAt: Date
      description: Description[]
      image: Image
      name: string
      references: Reference[]
      slug: Slug
      _rev: string
      _updatedAt: Date
   }

   export interface UiModel {
      description: Description[]
      image: Image
      name: string
      references: Reference[]
      slug: Slug
   }

   export type Description = {
      _key: string
      _type: string
      en: En[]
      fr: En[]
   }

   export type En = {
      _key: string
      _type: string
      children: Child[]
      markDefs: any[]
      style: string
   }

   export type Child = {
      _key: string
      _type: string
      marks: any[]
      text: string
   }

   export type Image = {
      _type: string
      asset: Asset
   }

   export type Asset = {
      _ref: string
      _type: string
   }

   export type Reference = {
      _key: string
      _type: string
      image: Image
      name: string
      year: string
   }

   export type Slug = {
      _type: string
      current: string
   }

   export const ArtistFactory = (artist: Artist.Artist): Artist.UiModel => {
      return {
         name: artist.name,
         slug: artist.slug,
         description: artist.description,
         image: artist.image,
         references: artist.references,
      }
   }
}
