import {TabContentWithIcons, Zod_TabsWithIcon} from '@/app/[lang]/about/(factories)/tabs.models'
import content from '@/app/[lang]/about/section-content.json'
import {z} from 'zod'

export class Activity extends TabContentWithIcons {
   constructor({title, description, source, Icon}: z.infer<typeof Zod_TabsWithIcon>) {
      super({title, description, source, Icon})
   }
}

/**
 @description use Zod_ActivityEnum.Values to get the enum values
 **/
export const Zod_ActivityEnum = z.enum(['edit', 'music', 'production', 'soundDesign', 'live'])
export type T_ActivityEnum = z.infer<typeof Zod_ActivityEnum>

export const Activities = new Map<T_ActivityEnum, Activity>([
   [Zod_ActivityEnum.Values.music, new Activity(content.activity.music)],
   [Zod_ActivityEnum.Values.edit, new Activity(content.activity.edit)],
   [Zod_ActivityEnum.Values.production, new Activity(content.activity.production)],
   [Zod_ActivityEnum.Values.soundDesign, new Activity(content.activity.soundDesign)],
   [Zod_ActivityEnum.Values.live, new Activity(content.activity.live)],
])
