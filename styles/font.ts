import {Cormorant_SC, Manrope, Poppins} from 'next/font/google'

const poppins = Poppins({
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   subsets: ['latin-ext'],
   variable: '--font-poppins',
})

const cormorant = Cormorant_SC({
   weight: ['300', '400', '500', '600', '700'],
   subsets: ['latin-ext'],
   variable: '--font-cormorant',
})

const manrope = Manrope({
   weight: ['300', '400', '500', '600', '700', '800'],
   subsets: ['latin-ext'],
   variable: '--font-manrope',
})

export {cormorant, manrope, poppins}
