import {z} from 'zod'

//region Zod Schemas
export const Z_CategoryValue = z.object({
   _key: z.string(),
   _type: z.string().refine(value => value === 'localizedString', {
      message: 'Category value must be type of `localizedString`',
   }),
   en: z.string(),
   fr: z.string(),
})

export const Z_Category = z.object({
   _createdAt: z.string(),
   _id: z.string(),
   _rev: z.string(),
   _type: z.string().refine(value => value.toLowerCase() === 'category', {
      message: 'Data type is not type of category',
   }),
   _updatedAt: z.string(),
   displayedValue: Z_CategoryValue,
   name: z.string(),
   slug: z.object({
      _type: z.string().refine(value => value.toLowerCase() === 'slug', {
         message: 'slug type must be `slug`',
      }),
      current: z.string(),
   }),
})
//endregion

//region TypeScript Types
export type T_CategoryValue = z.infer<typeof Z_CategoryValue>
export type T_Category = z.infer<typeof Z_Category>
//endregion
