import {Zod_AvailableLanguages} from '@/shared/i18n.ts/i18n.global.schema'
import {z} from 'zod'

export const Zod_I18nPageParam = z.object({
   lang: Zod_AvailableLanguages,
})

export type T_I18nPageParam = {
   params: z.infer<typeof Zod_I18nPageParam>
}
