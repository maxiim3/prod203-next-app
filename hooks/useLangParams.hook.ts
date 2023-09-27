import {Z_PageI18nParam} from '@/schemas/i18n.page.props.schema'
import {useParams, usePathname} from 'next/navigation'

const useLangParams = () => {
   const pathname = usePathname()
   const params = useParams()
   const safeParams = Z_PageI18nParam.safeParse(params)
   let lang: 'fr' | 'en' = safeParams.success ? safeParams.data.lang : 'fr'
   return {
      lang,
      options: {pathname, params},
   }
}
export default useLangParams
