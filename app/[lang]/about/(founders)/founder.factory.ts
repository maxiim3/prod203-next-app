import content from '@/app/[lang]/about/section-content.json'
import {Abstract_Class_TabContent, Zod_TabsSharedContent} from '@/app/[lang]/about/tabs.models'
import {z} from 'zod'

export class Founder extends Abstract_Class_TabContent {
   constructor({title, description}: z.infer<typeof Zod_TabsSharedContent>) {
      super({title, description})
   }
}

export const Zod_FounderEnum = z.enum(['Jerome', 'Nathan', 'Sam'])
export type T_FounderEnum = z.infer<typeof Zod_FounderEnum>

export const Founders = new Map<T_FounderEnum, Founder>([
   [Zod_FounderEnum.Values.Jerome, new Founder(content.founders.Jerome)],
   [Zod_FounderEnum.Values.Nathan, new Founder(content.founders.Nathan)],
   [Zod_FounderEnum.Values.Sam, new Founder(content.founders.Sam)],
])
