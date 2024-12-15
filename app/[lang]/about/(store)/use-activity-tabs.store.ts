import {
   Activities,
   Activity,
   Zod_ActivityEnum,
   type T_ActivityEnum,
} from '@/app/[lang]/about/(factories)/activity.factory'
import type {T_GenericStore} from '@/app/[lang]/about/(store)/store.types'
import {create} from 'zustand'

/**
 * ## useActivityTabsStore
 * @description
 * - This store implements the generic tab store schema
 * - It is used to manage the state of the activity tabs
 * @example
 *    const {getAll, getById, activeTab, setActiveTab} = useActivityTabsStore()
 *
 * @see T_GenericStore
 * @requires zustand
 **/
export const useActivityTabsStore = create<T_GenericStore<T_ActivityEnum, Activity>>(set => ({
   // getter state
   getAll: () => Activities,
   getById: key => {
      const safeKey = Zod_ActivityEnum.safeParse(key)

      if (!safeKey.success) {
         throw new Error("Key not found")
      }
      return Activities.get(safeKey.data)
   },

   activeTab: Zod_ActivityEnum.Values.edit,

   // setter state
   setActiveTab: founder => set({activeTab: founder}),
}))
