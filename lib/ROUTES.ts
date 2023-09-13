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

export default ROUTES satisfies RouteType[]
