import {z} from 'zod'

export const Z_PageI18nParam = z.object({
   lang: z.enum(['fr', 'en']),
})

export interface I_PageI18nParams {
   params: z.infer<typeof Z_PageI18nParam>
}
