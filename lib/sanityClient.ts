import {createClient} from "next-sanity"

export const client = createClient({
   projectId: "lo6ab3qt",
   dataset: "production",
   useCdn: false,
   apiVersion: "2023-08-19",
})
