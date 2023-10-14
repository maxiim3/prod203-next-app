import {
   Activities,
   Activity,
   Zod_ActivityEnum,
   type T_ActivityEnum,
} from '@/app/[lang]/about/(activities)/activity.factory'
import type {T_TabStore} from '@/app/[lang]/about/tab-store.generic.schema'
import {create} from 'zustand'

/**
 * ## useActivityTabsStore
 * @description
 * - This store implements the generic tab store schema
 * - It is used to manage the state of the activity tabs
 * @example
 *    const {getAll, getById, activeTab, setActiveTab} = useActivityTabsStore()
 *
 * @see T_TabStore
 * @requires zustand
 **/
export const useActivityTabsStore = create<T_TabStore<T_ActivityEnum, Activity>>(set => ({
   // getter state
   getAll: () => Activities,
   getById: key => {
      const safeKey = Zod_ActivityEnum.safeParse(key)

      if (safeKey.success) {
         return Activities.get(safeKey.data)
      }
      throw new Error(`Key not found, ${safeKey.error.message}`)
   },

   activeTab: Zod_ActivityEnum.Values.edit,

   // setter state
   setActiveTab: founder => set({activeTab: founder}),
}))
