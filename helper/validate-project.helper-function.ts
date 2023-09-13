import {ZodObject} from 'zod'

/**
 * @description Using zod to validate if data is conform to Object
 * @param Object : ZodObject Object that validates the data
 * @param data : any data to validate
 */
export default function validateProjectHelperFunction(Object: ZodObject<any>, data: any) {
   const safeResponse = Object.safeParse(data)
   if (!safeResponse.success) return {error: safeResponse.error}
   return {data: safeResponse.success}
}
