import {T_CloudinaryVideo, T_MarkdownElement, T_Project} from '@/schemas/project.sanity.schema'

export default class ProjectClassFactory {
   private readonly _title: string
   private readonly _i18nDescription: {fr: T_MarkdownElement[]; en: T_MarkdownElement[]}
   private readonly _slug: string
   private readonly _id: string
   private readonly _cloudinaryVideoSources: T_CloudinaryVideo
   private readonly _category: T_Project['category']
   private readonly _client: string
   private readonly _marque: string
   private readonly _releaseDate: string
   private readonly _thumbnail: T_Project['thumbnail']['asset']

   constructor(props: T_Project) {
      this._title = props.title
      this._i18nDescription = {
         fr: props.description.fr,
         en: props.description.en,
      }
      this._slug = props.slug.current
      this._id = props._id
      this._cloudinaryVideoSources = props.cloudinaryVideo
      this._category = props.category
      this._client = props.client
      this._marque = props.marque
      this._releaseDate = props.releaseDate
      this._thumbnail = props.thumbnail.asset
   }

   get title(): string {
      return this._title
   }

   get i18nDescription(): {fr: T_MarkdownElement[]; en: T_MarkdownElement[]} {
      return this._i18nDescription
   }

   get slug(): string {
      return this._slug
   }

   get id(): string {
      return this._id
   }

   get cloudinaryVideoSources(): T_CloudinaryVideo {
      return this._cloudinaryVideoSources
   }

   /**
    * @description category._ref is referencing Category.id
    * @see CategoryClassFactory.id
    */
   get category(): T_Project['category'] {
      return this._category
   }

   get client(): string {
      return this._client
   }

   get marque(): string {
      return this._marque
   }

   get releaseDate(): string {
      return this._releaseDate
   }

   /**
    * @description thumbnail.asset is being passed in the Sanity Client helper function to retrieve image source
    */
   get thumbnail(): T_Project['thumbnail']['asset'] {
      return this._thumbnail
   }
}
