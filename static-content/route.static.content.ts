import {Zod_I18nContent, type T_I18nContent} from '@/shared/i18n.ts/i18n.global.schema'
import {z, type TypeOf} from 'zod'

export const Zod_RoutesEnum = z.enum(['/', '/projects', '/about', '/contact'])

export const Z_Route = z.object({
   name: Zod_I18nContent,
   path: Zod_RoutesEnum,
})

export class Route {
   private readonly _name: T_I18nContent
   private readonly _path: z.infer<typeof Zod_RoutesEnum>

   private constructor({name, path}: z.infer<typeof Z_Route>) {
      this._name = name
      this._path = path
   }

   get name(): T_I18nContent {
      return this._name
   }

   get path(): TypeOf<typeof Z_Route>['path'] {
      return this._path
   }

   static create({name, path}: z.infer<typeof Z_Route>) {
      return new Route({name, path})
   }
}

const routes: Route[] = [
   Route.create({
      name: {en: 'Home', fr: 'Accueil'},
      path: Zod_RoutesEnum.Values['/'],
   }),
   Route.create({
      name: {en: 'Projects', fr: 'Projets'},
      path: Zod_RoutesEnum.Values['/projects'],
   }),
   Route.create({
      name: {en: 'About', fr: 'À propos'},
      path: Zod_RoutesEnum.Values['/about'],
   }),
   Route.create({
      name: {en: 'Contact', fr: 'Contact'},
      path: Zod_RoutesEnum.Values['/contact'],
   }),
]

export default routes
