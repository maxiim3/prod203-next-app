import {Zod_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {
   Zod_AvailableLanguages,
   type T_AvailableLanguages,
} from '@/shared/i18n.ts/i18n.global.schema'
import {useParams} from 'next/navigation'

export default function useCurrentLanguage(): T_AvailableLanguages {
   const params = useParams()
   let safeParams = Zod_I18nPageParam.safeParse(params)
   return safeParams.success ? safeParams.data.lang : Zod_AvailableLanguages.Values.fr
}
