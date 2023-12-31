import {
   Zod_AvailableLanguages,
   type T_AvailableLanguages,
} from '@/shared/i18n.ts/i18n.global.schema'
import {NextRequest} from 'next/server'

// Get the preferred locale, similar to the above or using a library

export function middleware(request: NextRequest) {
   const {
      headers,
      nextUrl: {pathname},
   } = request

   /*   const availablePaths = Object.values(routes).map(element => element.path)
   if (!availablePaths.includes(pathname)) {
      console.log('catched error')
      return Response.error()
   }*/

   // Check if there is any supported locale in the pathname
   let availableLanguages: T_AvailableLanguages[] = ['fr', 'en']

   const pathnameHasLocale = availableLanguages.some(
      locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   )

   if (pathnameHasLocale) return

   const defaultLanguage = Zod_AvailableLanguages.Values.fr
   /**
    example :
    response :
    accept-language: 'en-US,en;q=0.9,fr;q=0.8,sr;q=0.7,sh;q=0.6,mk;q=0.5,hr;q=0.4'
    get an array like
    [
    'en-US',
    'en;q=0.9',
    'fr;q=0.8',
    'sr;q=0.7',
    'sh;q=0.6',
    'mk;q=0.5',
    'hr;q=0.4'
    ]
    **/
   const userPreferredLanguages = headers.get('accept-language')?.split(',')

   let selectedLanguage: T_AvailableLanguages = defaultLanguage // match default language variable by default

   if (userPreferredLanguages) {
      const userPrefersFrench = userPreferredLanguages.some(lang =>
         lang.includes(Zod_AvailableLanguages.Values.fr)
      )
      if (userPrefersFrench) {
         selectedLanguage = Zod_AvailableLanguages.Values.fr
      } else {
         // statement won't reach this scope and loop again if user have a French preference in request.header['accept-language']
         const userPrefersEnglish = userPreferredLanguages.some(lang =>
            lang.includes(Zod_AvailableLanguages.Values.en)
         )
         if (userPrefersEnglish) {
            selectedLanguage = Zod_AvailableLanguages.Values.en
         }
         // else : sticks with the defaultLanguage declaration
      }
   }

   request.nextUrl.pathname = `/${selectedLanguage}/${pathname}`
   // e.g. incoming request is /about
   // The new URL is now /en/about
   return Response.redirect(request.nextUrl)
}

export const config = {
   matcher: [
      // Skip all internal paths (_next)
      '/((?!api|_next/static|_next/image|assets|favicon.ico|error|global-error|not-found).*)',
      // Optional: only run on root (/) URL
      // '/'
   ],
}
