'use client'

import {useMounted} from '@/hooks/useMounted'
import Link from 'next/link'
import React, {
   PropsWithChildren,
   createContext,
   useCallback,
   useContext,
   useEffect,
   useReducer,
   useState,
} from 'react'
import {twMerge} from 'tailwind-merge'

//region Organisms
export default function ContactFormComponent() {
   const [isFormSubmitted, setIsFormSubmitted] = useState(false)
   const {state} = useFormContext()

   const isMounted = useMounted()

   const handleSubmit = useCallback(() => {
      const inputAreNotValid = Object.values(state).some(value => value === '')

      console.log('inputAreNotValid', inputAreNotValid)
      if (inputAreNotValid) return

      // is valid
      setIsFormSubmitted(true)
   }, [state])

   if (!isMounted) return <p>Loading Form...</p>

   if (isFormSubmitted)
      return (
         <div className="flex max-h-[640px] w-full flex-col gap-4 bg-clrPrimary-100 px-9  py-12 text-base-100 sm:max-w-[540px] sm:rounded-lg">
            <h1 className="text-center text-2xl font-bold">Merci pour votre message</h1>
            <p className="text-center">Nous vous répondrons dans les plus brefs délais</p>
            <Link
               href={'/'}
               className={'btn btn-primary'}>
               Retour à l{"'"}accueil
            </Link>
         </div>
      )
   return (
      <form
         className={
            'flex max-h-[640px] w-full flex-col gap-3 bg-clrPrimary-100 px-9  py-12 text-base-100 sm:max-w-[540px] sm:rounded-lg'
         }>
         <NameField /> {/*This has been correctly extracted*/}
         <EmailField /> {/* Inplement this component*/}
         <MessageField /> {/* Inplement this component*/}
         <EmailACopyField /> {/* Inplement this component*/}
         <SubmitButton onSubmit={handleSubmit} />
      </form>
   )
}
//endregion

//region Molecules
const useLocalState = (key: 'name' | 'email' | 'message') => {
   const [hasBeenFocused, setHasBeenFocused] = useState(false)
   const context = useFormContext() // we consume the context here
   const [isValidInput, setIsValidInput] = useState<'init' | 'valid' | 'invalid'>('init') // 👈 Local state for validation status
   const [feedbackMessage, setFeedbackMessage] = useState<null | string>(null) // 👈 Local state for feedback message
   const [localState, setLocalState] = useState(() => {
      if (hasBeenFocused) return context.state[key]
      return ''
   }) // 👈 Local state for validation status
   const updateInputNameContext = useCallback(() => {
      if (!hasBeenFocused) return

      let isValid = false
      let feedbackLength = ''
      let feedbackContent = ''

      if (localState.length < 3 || localState.length > 45) {
         isValid = false
         feedbackLength = 'must be between 3 and 45 characters'
      } else if (/[^a-zA-Z\s]/.test(localState)) {
         isValid = false
         feedbackContent = 'should not contain numbers or special characters'
      }

      setIsValidInput(isValid ? 'valid' : 'invalid') // 👈 Update local state
      const handleFeedbackMessage = () => {
         if (feedbackLength && feedbackContent) return `${feedbackLength} and ${feedbackContent}`
         if (feedbackLength) return feedbackLength
         if (feedbackContent) return feedbackContent
         return ''
      }
      setFeedbackMessage(`Name : ${handleFeedbackMessage()}`) // 👈 Update feedback message

      if (!isValid) return

      context.setName(localState) // 👈 Update global state
   }, [])

   const updateInputEmailContext = useCallback(() => {
      if (!hasBeenFocused) return

      let isValid = false
      let feedback = ''

      const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (localState.match(mailRegex)) {
         isValid = false
         feedback = 'Email must be valid'
      }

      setIsValidInput(isValid ? 'valid' : 'invalid') // 👈 Update local state
      setFeedbackMessage(feedback) // 👈 Update feedback message

      if (!isValid) return

      context.setEmail(localState) // 👈 Update global state
   }, [])

   const updateInputMessageContext = useCallback(() => {
      if (!hasBeenFocused) return

      let isValid = false
      let feedback = ''

      if (localState.length < 3 || localState.length > 300) {
         isValid = false
         feedback = 'Message must be between 3 and 300 characters'
      }

      setIsValidInput(isValid ? 'valid' : 'invalid') // 👈 Update local state
      setFeedbackMessage(feedback) // 👈 Update feedback message

      if (!isValid) return

      context.setMessage(localState) // 👈 Update global state
   }, [])

   const updateLocalState = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         setLocalState(e.target.value)
         setHasBeenFocused(true)
      },
      []
   )

   const updateInputHasFocus = useCallback(() => {
      setHasBeenFocused(true)
   }, [])

   useEffect(() => {
      if (key === 'name') {
         updateInputNameContext()
      } else if (key === 'email') {
         updateInputEmailContext()
      } else if (key === 'message') {
         updateInputMessageContext()
      }

      // log all states
      console.log('key', key)
      console.log('localState', localState)
      console.log('isValidInput', isValidInput)
      console.log('feedbackMessage', feedbackMessage)
      console.log('hasBeenFocused', hasBeenFocused)
   }, [localState])

   return {
      localState,
      updateLocalState,
      isValidInput,
      feedbackMessage,
      updateInputHasFocus,
   }
}
const NameField = () => {
   const {isValidInput, updateInputHasFocus, feedbackMessage, updateLocalState, localState} =
      useLocalState('name')

   return (
      <div className="form-control w-full">
         {/* 👈 add this for Tailwind styling */}
         <Label
            id={'name'}
            label={'Nom'}
         />
         <input
            onFocus={updateInputHasFocus}
            id={'name'}
            minLength={3}
            aria-label={'Nom'}
            type={'text'}
            placeholder={'Nom'}
            value={localState} // 👈 change this to state.name
            onChange={updateLocalState} // 👈 change this to use setName from context
            className="input input-bordered w-full bg-primary/70 font-normal tracking-wide text-base-100/70" // 👈 add this for Tailwind styling
         />
         <UserFeedBack
            valid={isValidInput} // 👈 change this to isNameValid
            feedbackMsg={feedbackMessage} // 👈 change this to nameFeedback
         />
      </div>
   )
}
const EmailField = () => {
   const {isValidInput, feedbackMessage, updateLocalState, localState} = useLocalState('email')

   return (
      <div className="form-control w-full">
         <Label
            id={'email'}
            label={'Addresse Mail'}
         />
         <input
            id={'email'}
            minLength={3}
            aria-label={'Addresse Mail'}
            type={'email'}
            placeholder={'Addresse Mail'}
            value={localState} // use global state
            onChange={updateLocalState} // 👈 change this to use setName from context
            className="input input-bordered w-full bg-primary/70 font-normal tracking-wide text-base-100/70"
         />
         <UserFeedBack
            valid={isValidInput} // 👈 change this to isNameValid
            feedbackMsg={feedbackMessage} // 👈 change this to nameFeedback
         />
      </div>
   )
}
const MessageField = () => {
   const {isValidInput, feedbackMessage, updateLocalState, localState} = useLocalState('message')

   return (
      <div className="form-control w-full">
         <Label
            id={'message'}
            label={'Entrez votre message'}
         />
         <textarea
            id={'message'}
            rows={4}
            value={localState} // use global state
            onChange={updateLocalState} // 👈 change this to use setName from context
            aria-label={'Entrez votre message'}
            className="textarea textarea-bordered h-24 bg-primary/70 text-base font-normal leading-loose tracking-wide text-base-100/70"
            placeholder={'Entrez votre message'}
         />
         <UserFeedBack
            valid={isValidInput} // 👈 change this to isNameValid
            feedbackMsg={feedbackMessage} // 👈 change this to nameFeedback
         />
      </div>
   )
}
const EmailACopyField = () => {
   const {state, setEmailACopy} = useFormContext() // Consume context

   return (
      <div className="form-contrl flex w-fit items-center justify-center gap-8">
         <input
            id={'checkbox'}
            onChange={() => setEmailACopy(!state.emailACopy)} // use setEmailACopy from context
            type="checkbox"
            checked={state.emailACopy} // use global state
            className="checkbox-md accent-info"
         />
         <Label
            id={'checkbox'}
            label={'Envoyer une copie à mon adresse mail'}
         />
      </div>
   )
}
const SubmitButton = ({onSubmit}: {onSubmit: () => void}) => {
   const {state} = useFormContext() // Consume context
   const isFormValid = false /* your logic to check if the form is valid based on state */

   const handleSubmit = (e: any) => {
      e.preventDefault()
      onSubmit()
      if (isFormValid) {
         console.log('Form submitted', state)
      }
   }

   return (
      <button
         type={'submit'}
         onClick={handleSubmit}
         disabled={false}
         className="btn btn-md">
         Submit
      </button>
   )
}
//endregion

//region Atoms
const Label = ({id, label, className}: {label: string; id: string; className?: string}) => (
   <label
      htmlFor={id}
      className={twMerge('font-base label label-text font-normal text-base-100/70', className)}>
      {label}
   </label>
)
const UserFeedBack = (props: {
   valid?: 'init' | 'invalid' | 'valid'
   feedbackMsg?: string | null
}) => (
   <label className={twMerge('label', props.valid && 'invisible')}>
      <span className={twMerge('label-text-alt', props.valid ? 'text-success' : 'text-error')}>
         {props.feedbackMsg}
      </span>
   </label>
)
//endregion
//region Context
// Define Context and Provider
// Reducer Function
type FormState = {
   name: string
   email: string
   message: string
   emailACopy: boolean
}
type FormReducerAction =
   | {
        type: 'SET_NAME' | 'SET_EMAIL' | 'SET_MESSAGE'
        payload: string
     }
   | {
        type: 'SET_EMAIL_A_COPY'
        payload: boolean
     }
const formReducer = (state: FormState, action: FormReducerAction) => {
   switch (action.type) {
      case 'SET_NAME':
         return {...state, name: action.payload}
      case 'SET_EMAIL':
         return {...state, email: action.payload}
      case 'SET_MESSAGE':
         return {...state, message: action.payload}
      case 'SET_EMAIL_A_COPY':
         return {...state, emailACopy: action.payload}
      default:
         return state
   }
}
const initialState: FormState = {
   emailACopy: false,
   name: '',
   email: '',
   message: '',
}

const useProvideContext = () => {
   // Reducer
   const [state, dispatch] = useReducer(formReducer, initialState)
   // Dispatch Handlers with useCallback and e.target.value
   const setName = useCallback((e: string) => dispatch({type: 'SET_NAME', payload: e}), [])
   const setEmail = useCallback((e: string) => dispatch({type: 'SET_EMAIL', payload: e}), [])
   const setMessage = useCallback((e: string) => dispatch({type: 'SET_MESSAGE', payload: e}), [])
   const setEmailACopy = useCallback(
      (e: boolean) => dispatch({type: 'SET_EMAIL_A_COPY', payload: e}),
      []
   )
   // Return State and Dispatch Handlers
   return {
      state,
      setName,
      setEmail,
      setMessage,
      setEmailACopy,
   }
}
type FormContextType = ReturnType<typeof useProvideContext>
export const ContactFormContext = createContext<FormContextType | null>(null)

// Custom Hook
export const useFormContext = () => {
   const context = useContext(ContactFormContext)!
   if (!context) {
      throw new Error('useFormState must be used within a ContactFormProvider')
   }
   return context
}

// Provider Wrapper
export const ContactFormProvider = ({children}: PropsWithChildren) => {
   const context = useProvideContext()
   return <ContactFormContext.Provider value={context}>{children}</ContactFormContext.Provider>
}
//endregion
