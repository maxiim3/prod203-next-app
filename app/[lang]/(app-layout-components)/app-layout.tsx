import Footer from '@/app/[lang]/(app-layout-components)/footer.client'
import MainNavigation from '@/app/[lang]/(app-layout-components)/main-navigation'

import {type T_Children} from '@/lib/types'

export default function AppLayout({children}: T_Children) {
   return (
      <>
         <MainNavigation />
         {children}
         <Footer />
      </>
   )
}
