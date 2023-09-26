import {T_Route} from '@/schemas/route.schema'

const routes: T_Route[] = [
   {
      name: {en: 'Home', fr: 'Accueil'},
      path: '/',
   },
   {
      name: {en: 'Projects', fr: 'Projets'},
      path: '/projects',
   },
   {
      name: {en: 'About', fr: 'À propos'},
      path: '/about',
   },
   {
      name: {en: 'Contact', fr: 'Contact'},
      path: '/contact',
   },
]

Object.freeze(routes)
export default routes
