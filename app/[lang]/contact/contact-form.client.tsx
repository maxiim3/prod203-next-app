'use client'

import {ReloadIcon} from '@radix-ui/react-icons'
import {Button, Flex, Heading, Link as RadixLink, Text, Theme} from '@radix-ui/themes'

import useContactFormStore, {type ContactFormStore} from '@/app/[lang]/contact/contact-form.store'
import useLangParams from '@/hooks/useLangParams.hook'
import ky from 'ky'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function ContactForm() {
   const {
      isMounted,
      handleSubmit,
      errors,
      register,
      formStore,
   }: ReturnType<typeof useContactFormStore> = useContactFormStore()
   const {isFormSubmitted, setIsFormSubmitted, setIsSubmittedWithSuccess}: ContactFormStore =
      formStore

   const {lang} = useLangParams()
   const onSubmit = async (data: any) => {
      const response = await ky.post('/api/contact', {
         json: {data},
      })

      const json = await response.json()

      console.log(response)

      if ([200, 201, 203, 204].includes(response.status)) {
         setIsSubmittedWithSuccess(true)
      }
      if ([400, 401, 402, 404, 500].includes(response.status)) {
         setIsSubmittedWithSuccess(false)
      }

      console.log(data)

      setIsFormSubmitted(true)

      return json
   }

   if (!isMounted) return <Text size={'4'}>Loading Form...</Text>

   if (isFormSubmitted) return <UserFeedback />

   // noinspection SpellCheckingInspection
   return (
      <form
         // @ts-ignore
         onSubmit={handleSubmit(onSubmit)}
         className={
            'prose max-h-[640px] w-full bg-primary px-2 py-12 text-base-100 sm:max-w-[650px] sm:rounded-md sm:px-4 md:px-9'
         }>
         <div className={'mb-3 flex w-full flex-col gap-5'}>
            <section className="form-control flex w-full flex-col">
               <label
                  className={'font-normal hover:cursor-pointer'}
                  htmlFor={'name'}>
                  Nom
               </label>
               <input
                  className={
                     'input border border-base-300/30 bg-primary text-sm shadow-inner focus:border-info focus:ring-2 focus:ring-primary-focus'
                  }
                  id={'name'}
                  autoComplete={'name'}
                  {...register('name', {required: true, maxLength: 80, minLength: 3})}
                  placeholder={'Nom'}
                  aria-invalid={errors.name ? 'true' : 'false'}
               />
               {errors.name && (
                  <label className={twMerge('label ')}>
                     <span className={twMerge('label-text-alt text-error')}>
                        {(() => {
                           if (errors.name?.type === 'required') return 'Name is required'
                           if (errors.name?.type === 'maxLength') return 'Name is too long'
                           if (errors.name?.type === 'minLength') return 'Name is too short'
                        })()}
                     </span>
                  </label>
               )}
            </section>
            <div className="form-control w-full">
               <label
                  className={'font-normal hover:cursor-pointer'}
                  htmlFor={'email'}>
                  Email
               </label>
               <input
                  autoComplete={'email'}
                  className={
                     'input border border-base-300/30 bg-primary text-sm shadow-inner focus:border-info focus:ring-2 focus:ring-primary-focus'
                  }
                  {...register('email', {
                     required: true,
                     maxLength: 80,
                     pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  id={'email'}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-label={'Adresse email'}
                  type={'email'}
                  placeholder={'Adresse email'}
               />
               {errors.email && (
                  <label className={twMerge('label ')}>
                     <span className={twMerge('label-text-alt text-error')}>
                        {(() => {
                           if (errors.email?.type === 'required') return 'Email is required'
                           if (errors.email?.type === 'maxLength') return 'Name is too long'
                           if (errors.email?.type === 'pattern') return 'Email is not valid'
                        })()}
                     </span>
                  </label>
               )}
            </div>
            <div className="form-control w-full">
               <label
                  className={'font-normal hover:cursor-pointer'}
                  htmlFor={'message'}>
                  Message
               </label>

               <textarea
                  {...register('message', {required: true, maxLength: 500})}
                  id={'message'}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className={
                     'textarea textarea-bordered textarea-lg border border-base-300/30 bg-primary text-sm shadow-inner focus:border-info focus:ring-2 focus:ring-primary-focus'
                  }
                  aria-label={lang === 'en' ? 'Write your message' : 'Écrivez votre messsage'}
                  placeholder={lang === 'en' ? 'Write your message' : 'Écrivez votre messsage'}
               />
               {errors.message && (
                  <label className={twMerge('label ')}>
                     <span className={twMerge('label-text-alt text-error')}>
                        {(() => {
                           if (errors.message?.type === 'required') return 'Name is required'
                           if (errors.message?.type === 'maxLength') return 'Name is too long'
                        })()}
                     </span>
                  </label>
               )}
            </div>
            <button
               type={'submit'}
               className={
                  'btn-outlined btn rounded-md hover:shadow-xl focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 focus:ring-offset-primary-focus'
               }
               disabled={false}>
               Submit
            </button>
         </div>
      </form>
   )
}

function UserFeedback() {
   const {reset, formStore}: ReturnType<typeof useContactFormStore> = useContactFormStore()
   const {setIsFormSubmitted, isSubmittedWithSuccess}: ContactFormStore = formStore

   if (!isSubmittedWithSuccess) {
      return (
         <Theme
            appearance={'light'}
            asChild>
            <Flex
               className={
                  'max-h-[640px] w-full rounded-md  bg-clrPrimary-100 px-9 py-12 text-base-100 sm:max-w-[540px]'
               }
               direction={'column'}
               gap={'3'}
               mb={'5'}>
               <Heading className="text-center font-bold">Une erreur est survenue</Heading>
               <Button
                  size={'3'}
                  variant={'soft'}
                  onClick={() => setIsFormSubmitted(false)}>
                  <ReloadIcon
                     className={'text-base-200'}
                     width={24}
                     height={24}
                  />
                  <RadixLink asChild>
                     <Link
                        href={'/contact'}
                        onClick={() => setIsFormSubmitted(false)}>
                        Réessayer
                     </Link>
                  </RadixLink>
               </Button>
            </Flex>
         </Theme>
      )
   }

   return (
      <Theme
         appearance={'light'}
         asChild>
         <Flex
            className={
               'max-h-[640px] w-full rounded-md  bg-clrPrimary-100 px-9 py-12 text-base-100 sm:max-w-[540px]'
            }
            direction={'column'}
            gap={'3'}
            mb={'5'}>
            <Heading className="text-center font-bold">Merci pour votre message</Heading>
            <p className="text-center">Nous vous répondrons dans les plus brefs délais</p>

            <Link
               className={'btn-outlined btn rounded-md'}
               href={'/'}>
               Retour à l{"'"}accueil
            </Link>
            <button
               onClick={() => {
                  reset()
                  setIsFormSubmitted(false)
               }}
               className={'btn btn-primary '}>
               <ReloadIcon
                  className={'text-base-200'}
                  width={24}
                  height={24}
               />
            </button>
         </Flex>
      </Theme>
   )
}

const Label = ({id, label, className}: {label: string; id: string; className?: string}) => (
   <label
      htmlFor={id}
      className={twMerge(
         'font-base label label-text font-normal text-base-100/70 hover:cursor-pointer',
         className
      )}>
      {label}
   </label>
)
