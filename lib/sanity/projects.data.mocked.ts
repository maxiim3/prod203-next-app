// Mocked Projects
import mockedCategories from '@/lib/sanity/categories.data.mocked'
import {ProjectFactory, T_Block, T_Project} from '@/lib/sanity/project'

const mockedProjects = Array.from({length: 12}, (_, i) => {
   const randomCategoryIndex = Math.floor(Math.random() * 6)
   const mockMarkdownElement: T_Block = {
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
      title: {
         fr: `Project-${i}`,
         en: `Project-${i}`,
      },
      description: {
         _key: `desc-key-${i}`,
         _type: 'localizedBlock',
         en: [mockMarkdownElement],
         fr: [mockMarkdownElement],
      },
      thumbnail: {
         _type: 'image',
         asset: {
            _type: 'reference',
            _ref: 'ds',
         },
      },
      awards: [''],
      gallery: [],
      services: [],
      youtubeVideoURL: '',
      slug: {
         _type: 'slug',
         current: `proj-slug-${i}`,
      },
      category: [{_key: '', _ref: mockedCategories[randomCategoryIndex]._id!, _type: 'reference'}],
      client: [`Client-${i}`],
      marque: `Marque-${i}`,
      releaseDate: new Date().toISOString(),
   }
   return ProjectFactory(projectData)
})

export default mockedProjects