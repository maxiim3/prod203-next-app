import {z} from 'zod'

export const Z_Route = z.object({
   name: z.string(),
   path: z.string(),
})

export type T_Route = z.infer<typeof Z_Route>
