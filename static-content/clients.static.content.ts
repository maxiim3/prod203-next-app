// noinspection SpellCheckingInspection

interface I_ClientInterface {
   title: string
   /** @deprecated - not used */
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

export const All_Clients: ClientClassFactory[] = [
   new ClientClassFactory('24h Le Mans', '24h Le Mans', '/assets/clients/24h.webp'),
   new ClientClassFactory('Balenciaga', 'Balenciaga', '/assets/clients/balenciaga.webp'),
   new ClientClassFactory('Credit Agricole', 'Credit Agricole', '/assets/clients/ca.webp'),
   new ClientClassFactory('Canal+', 'Canal+', '/assets/clients/canal.webp'),
   new ClientClassFactory('Chateau Fort Sedan', 'Chateau Fort Sedan', '/assets/clients/cfs.webp'),
   new ClientClassFactory('Warner Music France', 'Warner Music France', '/assets/clients/wmf.webp'),
   new ClientClassFactory('Citroen', 'Citroen', '/assets/clients/citroen.webp'),
   new ClientClassFactory('Coca Cola', 'Coca Cola', '/assets/clients/cocacola.webp'),
   new ClientClassFactory('DisneyLand Paris', 'DisneyLand Paris', '/assets/clients/disney.webp'),
   new ClientClassFactory('FFF', 'FFF', '/assets/clients/fff.webp'),
   new ClientClassFactory('GUM', 'GUM', '/assets/clients/gum.webp'),
   new ClientClassFactory(
      'Nouvel Opéra Fribourg',
      'Nouvel Opéra Fribourg',
      '/assets/clients/nof.webp'
   ),
   new ClientClassFactory('Revolte', 'Revolte', '/assets/clients/revolte.webp'),
   new ClientClassFactory('Warner Classic', 'Warner Classic', '/assets/clients/wc.webp'),
   new ClientClassFactory(
      'Le Puy du Fou',
      'Le parc du Puy du Fou',
      '/assets/clients/puy-du-fou.png'
   ),
   new ClientClassFactory(
      'Musique des Sapeurs Pompiers de Paris',
      'Musique des Sapeurs Pompiers de Paris',
      '/assets/clients/sapeurs-pompiers-de-paris.webp'
   ),
   new ClientClassFactory(
      'Parc animalier de Sainte-Croix',
      'Parc animalier de Sainte-Croix',
      '/assets/clients/sainte-croix.webp'
   ),
   new ClientClassFactory(
      'Institut Musical de Vendée',
      'Institut Musical de Vendée',
      '/assets/clients/IMV.webp'
   ),
   new ClientClassFactory('The Immersers', 'The Immersers', '/assets/clients/the-immersers.webp'),
]

const Half_Index = Math.floor(All_Clients.length / 2)
export const clients = All_Clients.slice(0, Half_Index)
export const clients_02 = All_Clients.slice(Half_Index)

// Object.freeze(All_Clients)
// Object.freeze(clients)
// Object.freeze(clients_02)
