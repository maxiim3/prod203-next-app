interface ClientInterface {
   title: string
   content: string
   source: string
}

export class Client implements ClientInterface {
   readonly content: string
   readonly source: string
   readonly title: string

   constructor(title: string, content: string, source: string) {
      this.title = title
      this.content = content
      this.source = source
   }
}

export const clients: Client[] = [
   new Client('24h Le Mans', '24h Le Mans', '/assets/clients/24h-white.webp'),
   new Client('Balenciaga', 'Balenciaga', '/assets/clients/balenciaga-white.webp'),
   new Client('Credit Agricole', 'Credit Agricole', '/assets/clients/ca-white.webp'),
   new Client('Canal+', 'Canal+', '/assets/clients/canal-white.webp'),
   new Client('Chateau Fort Sedan', 'Chateau Fort Sedan', '/assets/clients/cfs-white.webp'),
   new Client('Warner Music France', 'Warner Music France', '/assets/clients/wmf-white.webp'),
   new Client('Citroen', 'Citroen', '/assets/clients/citroen-white.webp'),
   new Client('Coca Cola', 'Coca Cola', '/assets/clients/cocacola-white.webp'),
   new Client('DisneyLand Paris', 'DisneyLand Paris', '/assets/clients/disney-white.webp'),
   new Client('FFF', 'FFF', '/assets/clients/fff-white.webp'),
   new Client('GUM', 'GUM', '/assets/clients/gum-white.webp'),
   new Client('Nouvel Opéra Fribourg', 'Nouvel Opéra Fribourg', '/assets/clients/nof-white.webp'),
   new Client('Revolte', 'Revolte', '/assets/clients/revolte-white.webp'),
   new Client('Warner Classic', 'Warner Classic', '/assets/clients/wc-white.webp'),
]

export const reversedClients: Client[] = [...clients].reverse()

Object.freeze(clients)
Object.freeze(reversedClients)
