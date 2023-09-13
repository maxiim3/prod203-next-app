import {z} from 'zod'

export type PageSlugAndCategoryParams = {
   params: {slug: string}
   searchParams: {category: string}
}

export const PageSlugParam = z.object({
   slug: z.string(),
})
export const PageCategorySearchParams = z.object({
   category: z.string(),
})

export interface ProjectPage {
   params: z.infer<typeof PageSlugParam>
   searchParams: z.infer<typeof PageCategorySearchParams>
}
