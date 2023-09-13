interface I_ClientInterface {
   title: string
   content: string
   source: string
}

export class ClientClassFactory implements I_ClientInterface {
   readonly content: string
   readonly source: string
   readonly title: string

   constructor(title: string, content: string, source: string) {
      this.title = title
      this.content = content
      this.source = source
   }
}
