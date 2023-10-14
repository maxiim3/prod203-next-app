import {Activity, type T_ActivityEnum} from '@/app/[lang]/about/(factories)/activity.factory'
import {Founder, type T_FounderEnum} from '@/app/[lang]/about/(factories)/founder.factory'

/**
 * @type {T_GenericStore}
 * # TabStore Type
 * @description
 *    - This is the type interface for the different tab stores
 *    - Replace EnumType with the type of data you want to store, e.g. T_FounderEnum
 *    - Replace ClassFactory with the class factory you want to use, e.g. Founder (Founder Class Factory)
 *    - This is a generic type, so you can use it for any tab store
 *    @exampe
 *       const useFounderStore = create<T_GenericStore<T_FounderEnum, Founder>>(set => ({...}))
 **/
export type T_GenericStore<EnumType, ClassFactory> = {
   // getter state
   activeTab: EnumType

   // getter
   getAll: () => Map<EnumType, ClassFactory>
   getById: (key: EnumType) => ClassFactory | undefined | Error
   // setter state
   setActiveTab: (tab: EnumType) => void
}
export type T_FounderStore = T_GenericStore<T_FounderEnum, Founder>
export type T_ActivityStore = T_GenericStore<T_ActivityEnum, Activity>
