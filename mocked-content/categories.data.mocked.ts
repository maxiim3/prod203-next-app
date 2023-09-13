// Mocked Categories
import CategoryClassFactory from '@/design-pattern/category.class-factory'
import {T_Category} from '@/schemas/category.sanity.schema'

const mockedCategories = Array.from({length: 6}, (_, i) => {
   const categoryId = `id-${i}`
   const categoryData: T_Category = {
      _id: categoryId,
      _createdAt: new Date().toISOString(),
      _rev: 'rev-' + categoryId,
      _type: 'category',
      _updatedAt: new Date().toISOString(),
      name: `Category-${i}`,
      displayedValue: {
         _key: `key-${i}`,
         _type: 'localizedString', // 👈 add this
         en: `English Name ${i}`,
         fr: `French Name ${i}`,
      },
      slug: {
         _type: 'slug', // 👈 add this
         current: `slug-${i}`,
      },
   }
   return new CategoryClassFactory(categoryData)
})

export default mockedCategories
