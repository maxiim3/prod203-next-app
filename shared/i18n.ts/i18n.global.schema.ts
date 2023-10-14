import {z} from 'zod'

export const Zod_AvailableLanguages = z.enum(['fr', 'en'])
export const Zod_I18nContent = z.record(Zod_AvailableLanguages, z.string())

export type T_AvailableLanguages = z.infer<typeof Zod_AvailableLanguages>
export type T_I18n = z.infer<typeof Zod_I18nContent>
