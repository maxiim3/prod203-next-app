type RouteType = {
   name: string
   path: string
}

const ROUTES: RouteType[] = [
   {
      name: 'Accueil',
      path: '/',
   },
   {
      name: 'A propos',
      path: '/about',
   },
   {
      name: 'Projects',
      path: '/projects',
   },
   {
      name: 'Contact',
      path: '/contact',
   },
]

export default ROUTES satisfies RouteType[]
