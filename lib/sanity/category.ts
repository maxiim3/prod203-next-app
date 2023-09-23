import {z} from 'zod'

//region Zod Schemas
export const Z_LocalizedString = z.object({
   _type: z
      .string()
      .refine(value => value === 'localizedString', {
         message: 'Category value must be type of `localizedString`',
      })
      .optional(),
   en: z.string(),
   fr: z.string(),
})
// "_createdAt": "2023-08-19T13:45:32Z",
//    "_id": "b5320e13-a492-4cf0-9fcc-0510a82e162d",
//    "_rev": "1qx65hy0sMUEDItIz6u4og",
//    "_type": "category",
//    "_updatedAt": "2023-09-23T12:38:34Z",
//    "name": {
//    "_type": "localizedString",
//       "en": "Executive Production",
//       "fr": "Production Executive"
// },
// "slug": {
//    "_type": "slug",
//       "current": "production-executive"
// }
export const Z_Category = z.object({
   _createdAt: z.string().optional(),
   _id: z.string().optional(),
   _rev: z.string().optional(),
   _type: z
      .string()
      .refine(value => value.toLowerCase() === 'category', {
         message: 'Data type is not type of category',
      })
      .optional(),
   _updatedAt: z.string().optional(),
   name: Z_LocalizedString,
   slug: z.object({
      _type: z
         .string()
         .refine(value => value.toLowerCase() === 'slug', {
            message: 'slug type must be `slug`',
         })
         .optional(),
      current: z.string().optional(),
   }),
})
//endregion

//region TypeScript Types
export type T_Category = z.infer<typeof Z_Category>
//endregion

export const CategoryFactory = (props: T_Category) => {
   const {_id, name, slug} = props
   return {_id, name, slug} as Omit<T_Category, '_rev' & '_createdAt' & '_type' & '_updatedAt'>
}
