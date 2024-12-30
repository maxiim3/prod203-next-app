export interface NodeContent {
   en: string
   fr: string
}
export type NodeType = 'text-regular' | 'text-bold' | 'link' | 'line-break'
export interface GenericNode<T = NodeType> {
   type: T
   content: NodeContent
}

export interface TextBold extends GenericNode<'text-regular'> {}
export interface TextNormal extends GenericNode<'text-bold'> {}
export interface TextLink extends GenericNode<'link'> {
   url: string
}
export interface LineBreak extends Pick<GenericNode<'line-break'>, 'type'> {}

export type TextNode = TextBold | TextNormal | TextLink | LineBreak
