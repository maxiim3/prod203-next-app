import {
   Founder,
   Founders,
   Zod_FounderEnum,
   type T_FounderEnum,
} from '@/app/[lang]/about/(founders)/founder.factory'
import {type T_TabStore} from '@/app/[lang]/about/tab-store.generic.schema'
import {create} from 'zustand'

/**
 * ## useFounderTabsStore
 * @description
 * - This store implements the generic tab store schema
 * - It is used to manage the state of the founder tabs
 * @example
 *    const {getAll, getById, activeTab, setActiveTab} = useFounderTabsStore()
 *
 * @see T_TabStore
 * @requires zustand
 **/
export const useFounderTabsStore = create<T_TabStore<T_FounderEnum, Founder>>(set => ({
   // getter state
   getAll: () => Founders,
   getById: key => {
      const safeKey = Zod_FounderEnum.safeParse(key)

      if (safeKey.success) {
         return Founders.get(safeKey.data)
      }
      throw new Error(`Key not found, ${safeKey.error.message}`)
   },

   activeTab: Zod_FounderEnum.Values.Jerome,

   // setter state
   setActiveTab: founder => set({activeTab: founder}),
}))
