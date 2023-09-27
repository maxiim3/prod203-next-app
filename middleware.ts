import {NextRequest} from 'next/server'

// Get the preferred locale, similar to the above or using a library

export function middleware(request: NextRequest) {
   // Check if there is any supported locale in the pathname
   let locale = ['en', 'fr']
   const {pathname} = request.nextUrl
   const pathnameHasLocale = locale.some(
      locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   )

   if (pathnameHasLocale) return

   request.nextUrl.pathname = `/fr/${pathname}`
   // e.g. incoming request is /products
   // The new URL is now /en-US/products
   return Response.redirect(request.nextUrl)
}

export const config = {
   matcher: [
      // Skip all internal paths (_next)
      '/((?!_next).*)',
      // Optional: only run on root (/) URL
      // '/'
   ],
}
