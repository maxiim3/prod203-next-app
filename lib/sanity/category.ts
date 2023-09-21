import {z} from 'zod'

//region Zod Schemas
export const Z_CategoryValue = z.object({
   _key: z.string().optional(),
   _type: z
      .string()
      .refine(value => value === 'localizedString', {
         message: 'Category value must be type of `localizedString`',
      })
      .optional(),
   en: z.string().optional(),
   fr: z.string().optional(),
})

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
   displayedValue: Z_CategoryValue.optional(), // 👈 add this
   name: z.string().optional(),
   slug: z
      .object({
         _type: z
            .string()
            .refine(value => value.toLowerCase() === 'slug', {
               message: 'slug type must be `slug`',
            })
            .optional(),
         current: z.string().optional(),
      })
      .optional(), // 👈 add this
})
//endregion

//region TypeScript Types
export type T_CategoryValue = z.infer<typeof Z_CategoryValue>
export type T_Category = z.infer<typeof Z_Category>
//endregion

export const CategoryFactory = (props: T_Category) => {
   const {_id, displayedValue, name, slug} = props
   return {_id, displayedValue, name, slug} as Omit<
      T_Category,
      '_rev' & '_createdAt' & '_type' & '_updatedAt'
   >
}
