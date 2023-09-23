import {ZodObject} from 'zod'

/**
 * @description Using zod to validate if store is conform to Object
 * @param Object : ZodObject Object that validates the store
 * @param data : any store to validate
 */
export default function validateProjectHelperFunction(Object: ZodObject<any>, data: any) {
   const safeResponse = Object.safeParse(data)
   if (!safeResponse.success) return {error: safeResponse.error}
   return {data: safeResponse.success}
}
