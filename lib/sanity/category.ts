import {z} from 'zod'

export const Z_LocalizedString = z.object({
   _type: z
      .string()
      .refine(value => value === 'localizedString', {
         message: 'Category activity must be type of `localizedString`',
      })
      .optional(),
   en: z.string(),
   fr: z.string(),
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
   name: Z_LocalizedString.optional(),
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

export type T_Category = z.infer<typeof Z_Category>

export const CategoryFactory = (props: T_Category) => {
   const {_id, name, slug} = props
   return {_id, name, slug} as Omit<T_Category, '_rev' & '_createdAt' & '_type' & '_updatedAt'>
}
