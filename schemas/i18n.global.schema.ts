import {z} from 'zod'

export const Z_I18n = z.object({
   en: z.string(),
   fr: z.string(),
})

export const Z_AvailableLanguages = z.enum(['fr', 'en'])

export type T_AvailableLanguages = z.infer<typeof Z_AvailableLanguages>
export type T_I18n = z.infer<typeof Z_I18n>
