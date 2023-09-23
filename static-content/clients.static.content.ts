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

export const clients: ClientClassFactory[] = [
   new ClientClassFactory('24h Le Mans', '24h Le Mans', '/assets/clients/24h-white.webp'),
   new ClientClassFactory('Balenciaga', 'Balenciaga', '/assets/clients/balenciaga-white.webp'),
   new ClientClassFactory('Credit Agricole', 'Credit Agricole', '/assets/clients/ca-white.webp'),
   new ClientClassFactory('Canal+', 'Canal+', '/assets/clients/canal-white.webp'),
   new ClientClassFactory(
      'Chateau Fort Sedan',
      'Chateau Fort Sedan',
      '/assets/clients/cfs-white.webp'
   ),
   new ClientClassFactory(
      'Warner Music France',
      'Warner Music France',
      '/assets/clients/wmf-white.webp'
   ),
   new ClientClassFactory('Citroen', 'Citroen', '/assets/clients/citroen-white.webp'),
   new ClientClassFactory('Coca Cola', 'Coca Cola', '/assets/clients/cocacola-white.webp'),
   new ClientClassFactory(
      'DisneyLand Paris',
      'DisneyLand Paris',
      '/assets/clients/disney-white.webp'
   ),
   new ClientClassFactory('FFF', 'FFF', '/assets/clients/fff-white.webp'),
   new ClientClassFactory('GUM', 'GUM', '/assets/clients/gum-white.webp'),
   new ClientClassFactory(
      'Nouvel Opéra Fribourg',
      'Nouvel Opéra Fribourg',
      '/assets/clients/nof-white.webp'
   ),
   new ClientClassFactory('Revolte', 'Revolte', '/assets/clients/revolte-white.webp'),
   new ClientClassFactory('Warner Classic', 'Warner Classic', '/assets/clients/wc-white.webp'),
   // Add new clients here
]
export const reversedClients: ClientClassFactory[] = [...clients].reverse()
Object.freeze(clients)
Object.freeze(reversedClients)
