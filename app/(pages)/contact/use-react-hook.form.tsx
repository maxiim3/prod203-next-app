import {useMounted} from '@/hooks/useMounted'
import ky from 'ky'
import {useCallback, useState} from 'react'
import {useForm} from 'react-hook-form'

export const useReactHookForm = () => {
   const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
   } = useForm()

   const [isFormSubmitted, setIsFormSubmitted] = useState(false)
   const [isSubmittedWithSuccess, setIsSubmittedWithSuccess] = useState(false)
   const isMounted = useMounted()

   const onSubmit = useCallback(
      () =>
         handleSubmit(async data => {
            const response = await ky.post('/api/contact', {
               json: {data},
            })

            const json = await response.json()

            console.log(json)

            if ([200, 201, 203, 204].includes(response.status)) {
               setIsSubmittedWithSuccess(true)
            }
            if ([400, 401, 402, 404, 500].includes(response.status)) {
               setIsSubmittedWithSuccess(false)
            }
            setIsFormSubmitted(true)
         }),
      [handleSubmit]
   )

   return {
      register,
      errors,
      reset,
      formState: {
         isFormSubmitted,
         isSubmittedWithSuccess,
         setIsFormSubmitted: useCallback((value: boolean) => setIsFormSubmitted(value), []),
         setIsSubmittedWithSuccess: useCallback(
            (value: boolean) => setIsSubmittedWithSuccess(value),
            []
         ),
      },
      isMounted,
      onSubmit,
   }
}
