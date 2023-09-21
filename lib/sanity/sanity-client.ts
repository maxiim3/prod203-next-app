import {createClient, SanityClient} from '@sanity/client'

export type DATASOURCE_TYPE = 'sanity' | 'mocked'
export const DATA_SOURCE: DATASOURCE_TYPE = 'mocked'

class SingletonSanityClient {
   private static instance: SanityClient

   // Private constructor to prevent instantiation from the outside
   private constructor() {
      // Intentionally empty
   }

   public static getInstance(): SanityClient {
      if (!SingletonSanityClient.instance) {
         SingletonSanityClient.instance = createClient({
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: 'production',
            apiVersion: '2023-09-25',
            useCdn: false, // Update this for instant updates
         })
      }
      return SingletonSanityClient.instance
   }
}

// Usage
const sanityClient = SingletonSanityClient.getInstance()

export default sanityClient
