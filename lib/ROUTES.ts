type RouteType = {
   name: string,
   path: string
}

const ROUTES: RouteType[] = [{
   name: "Accueil",
   path: "/",
},
   {
      name: "A propos",
      path: "/about",
   },
   {
      name: "Contact",
      path: "/contact",
   },
   {
      name: "Showcase",
      path: "/showcase",
   }]

export default ROUTES satisfies RouteType[]
