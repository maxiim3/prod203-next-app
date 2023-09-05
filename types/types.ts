export type PageSlugAndCategoryParams = {
   params: {slug: string}
   searchParams: {category: string}
}
export type International = {
   eng: string
   fr: string
}

export type PageLangParams = {
   params: {lang: 'fr' | 'eng'}
}
