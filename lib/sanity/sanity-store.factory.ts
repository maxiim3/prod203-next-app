import {CategoryFactory} from '@/lib/sanity/category'
import {ProjectFactory} from '@/lib/sanity/project'

export type ProjectFactoryType = ReturnType<typeof ProjectFactory>
export type CategoryFactoryType = ReturnType<typeof CategoryFactory>
export type ProjectWithMappedCategory = Omit<ProjectFactoryType, 'category'> & {
   categories: CategoryFactoryType[]
}

export class SanityStoreFactory {
   projects: ProjectWithMappedCategory[]
   categories: CategoryFactoryType[]

   constructor(projects: ProjectFactoryType[], categories: CategoryFactoryType[]) {
      this.categories = categories
      this.projects = projects.map(project => {
         const matchingCategories: CategoryFactoryType[] = []

         if (!project.category)
            return {
               ...project,
               categories: matchingCategories,
            }

         for (const catRef of project.category) {
            const category = this.categories.find(c => c._id === catRef._ref)
            if (category) {
               matchingCategories.push(category)
            }
         }

         const mappedProject: ProjectWithMappedCategory = {
            ...project,
            categories: matchingCategories,
         }
         return mappedProject
      })
   }
}
