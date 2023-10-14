import {Zod_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {
   Zod_AvailableLanguages,
   type T_AvailableLanguages,
} from '@/shared/i18n.ts/i18n.global.schema'
import type {Pathname} from 'history'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams, usePathname} from 'next/navigation'

type ReturnType = {
   lang: T_AvailableLanguages
   options: {
      pathname: Pathname
      params: Params
   }
}

const useLangParams = (): ReturnType => {
   const params = useParams()

   const safeParams = Zod_I18nPageParam.safeParse(params)

   const defaultLanguage = Zod_AvailableLanguages.Values.fr
   const lang = safeParams.success ? safeParams.data.lang : defaultLanguage

   const pathname: Pathname = usePathname()
   return {
      lang,
      options: {pathname, params},
   }
}
export default useLangParams
