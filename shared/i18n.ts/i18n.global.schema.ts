import {z} from 'zod'

export const Zod_AvailableLanguages = z.enum(['fr', 'en'])
export type T_AvailableLanguages = z.infer<typeof Zod_AvailableLanguages>
export const Zod_I18nContent = z.record(Zod_AvailableLanguages, z.string())
export type T_I18nContent = z.infer<typeof Zod_I18nContent>
