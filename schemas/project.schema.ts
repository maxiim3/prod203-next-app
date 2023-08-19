import Brand from "@/schemas/brand.schema"

export default interface Project {
   title: string
   slug: {current: string; _type: "slug"}
   thumbnail: {_type: "image"; asset: {_ref: string; _type: "reference"}}
   releaseDate: Date
   description: ProjectDescription[]
   preview: {_type: "file"; asset: {_ref: string; _type: "reference"}}
   client: {_ref: string; _type: "reference"}
   _createdAt: Date
   _updatedAt: Date
   _id: string
   _rev: string
   _type: string
   category: {
      _ref: string
      _type: "reference"
   }
}

export type ProjectDescription = {
   _type: "block"
   style: string
   _key: string
   markDefs: any[]
   children: ProjectDescriptionChild[]
}

export type ProjectDescriptionChild = {
   _key: string
   _type: "span"
   marks: any[]
   text: string
}
