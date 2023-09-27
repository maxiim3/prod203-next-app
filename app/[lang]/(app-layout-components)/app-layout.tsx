import Footer from '@/app/[lang]/(app-layout-components)/Footer'
import MainNavigation from '@/app/[lang]/(app-layout-components)/main-navigation'
import {T_Children} from '@/lib/types'

export default function AppLayout({children}: T_Children) {
   return (
      <>
         <MainNavigation />
         {children}
         <Footer />
      </>
   )
}
