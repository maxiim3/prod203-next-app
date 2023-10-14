import {Zod_I18nContent} from '@/shared/i18n.ts/i18n.global.schema'
import {z} from 'zod'

export const Zod_TabsSharedContent = z.object({
   title: Zod_I18nContent,
   description: Zod_I18nContent,
})

export abstract class Abstract_Class_TabContent {
   title: z.infer<typeof Zod_I18nContent>
   description: z.infer<typeof Zod_I18nContent>

   protected constructor({title, description}: z.infer<typeof Zod_TabsSharedContent>) {
      this.title = title
      this.description = description
   }
}

export const Zod_TabsWithIcon = Zod_TabsSharedContent.extend({
   Icon: z.any().optional(),
   source: z.string().optional(),
})

export abstract class TabContentWithIcons extends Abstract_Class_TabContent {
   Icon?: any | string
   source?: string

   protected constructor({title, description, Icon, source}: z.infer<typeof Zod_TabsWithIcon>) {
      super({title, description})
      this.Icon = Icon
      this.source = source
   }
}
