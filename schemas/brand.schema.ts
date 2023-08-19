export default interface Brand {
   name: string
   email?: string
   phone?: string
   website?: string
   slug: {current: string; _type: "slug"}
   image: {_type: "image"; asset: {_ref: string; _type: "reference"}}
   _createdAt: Date
   _updatedAt: Date
   _id: string
   _rev: string
   _type: string
}
