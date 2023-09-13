import {T_Route} from '@/schemas/route.schema'

const routes: T_Route[] = [
   {
      name: 'Accueil',
      path: '/',
   },
   {
      name: 'Projects',
      path: '/projects',
   },
   {
      name: 'A propos',
      path: '/about',
   },
   {
      name: 'Contact',
      path: '/contact',
   },
]

Object.freeze(routes)
export default routes
