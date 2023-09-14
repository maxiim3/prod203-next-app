'use client'

import {ReloadIcon} from '@radix-ui/react-icons'
import {
   Button,
   Flex,
   Heading,
   Link as RadixLink,
   Text,
   TextArea,
   TextField,
   Theme,
} from '@radix-ui/themes'

import {Label} from '@/app/(pages)/contact/form-label.atom'
import {useReactHookForm} from '@/app/(pages)/contact/use-react-hook.form'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function ContactForm() {
   const {isMounted, formState, errors, reset, onSubmit, register} = useReactHookForm()

   if (!isMounted) return <Text size={'4'}>Loading Form...</Text>

   if (formState.isFormSubmitted && formState.isSubmittedWithSuccess)
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
               <Button
                  highContrast
                  size={'3'}
                  variant={'outline'}
                  className={'bg-base-200'}>
                  <RadixLink
                     asChild
                     className={'font-poppins text-primary'}>
                     <Link href={'/'}>Retour à l{"'"}accueil</Link>
                  </RadixLink>
               </Button>
               <Button
                  size={'3'}
                  onClick={() => {
                     reset()
                     formState.setIsFormSubmitted(false)
                  }}
                  variant={'outline'}
                  className={'border-base-100 bg-primary'}>
                  <ReloadIcon
                     className={'text-base-200'}
                     width={24}
                     height={24}
                  />
               </Button>
            </Flex>
         </Theme>
      )
   if (formState.isFormSubmitted && !formState.isSubmittedWithSuccess)
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
                  onClick={() => formState.setIsFormSubmitted(false)}>
                  <ReloadIcon
                     className={'text-base-200'}
                     width={24}
                     height={24}
                  />
                  <RadixLink asChild>
                     <Link
                        href={'/contact'}
                        onClick={() => formState.setIsFormSubmitted(false)}>
                        Réessayer
                     </Link>
                  </RadixLink>
               </Button>
            </Flex>
         </Theme>
      )

   return (
      <Theme
         appearance={'light'}
         asChild>
         <form
            onSubmit={onSubmit()}
            className={
               'max-h-[640px] w-full rounded-md  bg-clrPrimary-100 px-9 py-12 text-base-100 sm:max-w-[540px]'
            }>
            <Flex
               direction={'column'}
               gap={'3'}
               mb={'5'}>
               <Flex
                  direction={'column'}
                  className="form-control w-full">
                  <Label
                     id={'name'}
                     label={'Nom'}
                  />
                  <TextField.Input
                     id={'name'}
                     {...register('name', {required: true, maxLength: 80, minLength: 3})}
                     size={'3'}
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
               </Flex>
               <div className="form-control w-full">
                  <Label
                     id={'email'}
                     label={'Addresse Mail'}
                  />
                  <TextField.Input
                     {...register('email', {
                        required: true,
                        maxLength: 80,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                     })}
                     size={'3'}
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
                  <Label
                     id={'message'}
                     label={'Entrez votre message'}
                  />

                  <TextArea
                     {...register('message', {required: true, maxLength: 500})}
                     id={'message'}
                     aria-invalid={errors.message ? 'true' : 'false'}
                     rows={4}
                     variant={'classic'}
                     aria-label={'Entrez votre message'}
                     placeholder={'Entrez votre message'}
                     size={'3'}
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
               <Button
                  highContrast
                  size={'3'}
                  type={'submit'}
                  color={'gray'}
                  disabled={false}>
                  <Text className={'font-poppins'}>Submit</Text>
               </Button>
            </Flex>
         </form>
      </Theme>
   )
}
