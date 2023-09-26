'use client'

import {useMounted} from '@/hooks/useMounted'
import {useForm} from 'react-hook-form'

import {create} from 'zustand'

export interface ContactFormStore {
   // getters
   isFormSubmitted: boolean
   isSubmittedWithSuccess: boolean

   // setters
   setIsFormSubmitted: (value: boolean) => void
   setIsSubmittedWithSuccess: (value: boolean) => void
}

const useFormStore = create<ContactFormStore>(set => ({
   isFormSubmitted: false,
   isSubmittedWithSuccess: false,
   setIsFormSubmitted: (value: boolean) => set({isFormSubmitted: value}),
   setIsSubmittedWithSuccess: (value: boolean) => set({isSubmittedWithSuccess: value}),
}))

export default function useContactFormStore() {
   const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
   } = useForm()

   const isMounted = useMounted()

   const formStore = useFormStore(state => state)

   return {
      register,
      handleSubmit,
      errors,
      reset,
      isMounted,
      formStore,
   }
}
