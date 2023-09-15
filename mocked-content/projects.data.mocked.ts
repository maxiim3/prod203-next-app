// Mocked Projects
import ProjectClassFactory from '@/design-pattern/project.class-factory'
import mockedCategories from '@/mocked-content/categories.data.mocked'
import {T_MarkdownElement, T_Project} from '@/schemas/project.sanity.schema'

const mockedProjects = Array.from({length: 12}, (_, i) => {
   const randomCategoryIndex = Math.floor(Math.random() * 6)
   const mockMarkdownElement: T_MarkdownElement = {
      _key: `key-${i}`,
      _type: 'block',
      markDefs: [], // populate as needed
      style: 'normal',
      children: [
         {
            text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
            _type: 'span',
            _key: `child-key-${i}`,
            marks: [], // populate as needed
         },
      ],
   }
   const projectData: T_Project = {
      _id: `proj-id-${i}`,
      _createdAt: new Date().toISOString(),
      _rev: `rev-${i}`,
      _type: 'project',
      _updatedAt: new Date().toISOString(),
      title: `Project-${i}`,
      description: {
         _key: `desc-key-${i}`,
         _type: 'localizedBlock',
         en: [mockMarkdownElement],
         fr: [mockMarkdownElement],
      },
      slug: {
         _type: 'slug',
         current: `proj-slug-${i}`,
      },
      cloudinaryVideo: {
         // 👈 add this
         high: `high-url-${i}`,
         low: `low-url-${i}`,
         medium: `medium-url-${i}`,
         veryHigh: `veryHigh-url-${i}`,
      },
      category: {
         _ref: mockedCategories[randomCategoryIndex].id,
         _type: 'reference',
      },
      client: `Client-${i}`,
      marque: `Marque-${i}`,
      releaseDate: new Date().toISOString(),
      thumbnail: {
         _type: 'image', // 👈 add this
         asset: {
            _ref: `asset-ref-${i}`,
            _type: 'reference', // 👈 add this
         },
      },
   }
   return new ProjectClassFactory(projectData)
})

export default mockedProjects
