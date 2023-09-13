import {T_Category} from '@/schemas/category.sanity.schema'
import {T_I18n} from '@/schemas/i18n.global.schema'

export default class CategoryClassFactory {
   private readonly _title: string
   private readonly _i18nValue: T_I18n
   private readonly _slug: string
   private readonly _id: string

   constructor(props: T_Category) {
      this._title = props.name
      this._i18nValue = {
         fr: props.displayedValue.fr,
         en: props.displayedValue.en,
      }
      this._slug = props.slug.current
      this._id = props._id
   }

   get title(): string {
      return this._title
   }

   get i18nValue(): T_I18n {
      return this._i18nValue
   }

   get slug(): string {
      return this._slug
   }

   /**
    * @description Category.id is referenced by Project.category._ref
    * @see ProjectClassFactory.category
    */
   get id(): string {
      return this._id
   }
}
