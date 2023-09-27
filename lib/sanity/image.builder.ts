import sanityClient from '@/lib/sanity/sanity-client'
import imageUrlBuilder from '@sanity/image-url'

export default function ImageBuilder(image: any) {
   const builder = imageUrlBuilder(sanityClient)

   return builder.image(image)
}
