/**
 * @type {T_TabStore}
 * # TabStore Type
 * @description
 *    - This is the type interface for the different tab stores
 *    - Replace EnumType with the type of data you want to store, e.g. T_FounderEnum
 *    - Replace ClassFactory with the class factory you want to use, e.g. Founder (Founder Class Factory)
 *    - This is a generic type, so you can use it for any tab store
 *    @exampe
 *       const useFounderStore = create<T_TabStore<T_FounderEnum, Founder>>(set => ({...}))
 **/
export type T_TabStore<EnumType, ClassFactory> = {
   // getter state
   activeTab: EnumType

   // getter
   getAll: () => Map<EnumType, ClassFactory>
   getById: (key: EnumType) => ClassFactory | undefined | Error
   // setter state
   setActiveTab: (tab: EnumType) => void
}
