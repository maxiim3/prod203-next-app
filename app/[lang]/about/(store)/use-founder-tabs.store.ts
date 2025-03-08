import {
   Founder,
   Founders,
   Zod_FounderEnum,
   type T_FounderEnum,
} from '@/app/[lang]/about/(factories)/founder.factory'
import type {T_GenericStore} from '@/app/[lang]/about/(store)/store.types'
import {create} from 'zustand'

/**
 * ## useFounderTabsStore
 * @description
 * - This store implements the generic tab store schema
 * - It is used to manage the state of the founder tabs
 * @example
 *    const {getAll, getById, activeTab, setActiveTab} = useFounderTabsStore()
 *
 * @see T_GenericStore
 * @requires zustand
 **/
export const useFounderTabsStore = create<T_GenericStore<T_FounderEnum, Founder>>(set => ({
   // getter state
   getAll: () => Founders,
   getById: key => {
      const safeKey = Zod_FounderEnum.safeParse(key)

      if (safeKey.success) {
         return Founders.get(safeKey.data)
      }
      throw new Error(`Key not found in UseFounderStore, ${safeKey}`)
   },

   activeTab: Zod_FounderEnum.Values.Jerome,

   // setter state
   setActiveTab: founder => set({activeTab: founder}),
}))
