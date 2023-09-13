import {z} from 'zod'

//region Zod Schemas
export const Z_MarkdownElement = z.object({
   _key: z.string(),
   _type: z
      .string()
      .refine(value => value === 'block', {message: 'Block element must be of type `block`'}),
   markDefs: z.array(z.any()),
   style: z.string(),
   children: z.array(
      z.object({
         text: z.string(),
         _type: z.string(),
         _key: z.string(),
         marks: z.array(z.any()),
      })
   ),
})

export const Z_ProjectDescription = z.object({
   _key: z.string(),
   _type: z.string(),
   en: z.array(Z_MarkdownElement),
   fr: z.array(Z_MarkdownElement),
})
export const Z_CloudinaryVideo = z.object({
   high: z.string(),
   low: z.string(),
   medium: z.string(),
   veryHigh: z.string(),
})
export const Z_Project = z.object({
   _createdAt: z.string(),
   _id: z.string(),
   _rev: z.string(),
   _type: z
      .string()
      .refine(val => val === 'project', {message: 'Project type must be of type `project`'}),
   category: z.object({
      _ref: z.string(),
      _type: z.string().refine(val => val === 'reference', {
         message: 'Project category must be of type `reference`',
      }),
   }),
   client: z.string(),
   cloudinaryVideo: Z_CloudinaryVideo,
   description: Z_ProjectDescription,
   marque: z.string(),
   releaseDate: z.string(),
   slug: z.object({
      _type: z
         .string()
         .refine(val => val === 'slug', {message: 'Project slug must be of type `slug`'}),
      current: z.string(),
   }),
   thumbnail: z.object({
      _type: z.string().refine(val => val === 'image', {
         message: 'Project Thumbnail type must be of type `image`',
      }),
      asset: z.object({
         _ref: z.string(),
         _type: z.string().refine(val => val === 'reference', {
            message: 'Project Thumbnail reference must be of type `reference`',
         }),
      }),
   }),
   title: z.string(),
   _updatedAt: z.string(),
})
//endregion

//region TypeScript Types
export type T_MarkdownElement = z.infer<typeof Z_MarkdownElement>
export type T_ProjectDescription = z.infer<typeof Z_ProjectDescription>
export type T_CloudinaryVideo = z.infer<typeof Z_CloudinaryVideo>
export type T_Project = z.infer<typeof Z_Project>
//endregion
