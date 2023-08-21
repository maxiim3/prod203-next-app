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
}, {
  name: "Showcase",
  path: "/showcase",
},
{
  name: "Contact",
  path: "/contact",
}]


export default ROUTES satisfies RouteType[]
