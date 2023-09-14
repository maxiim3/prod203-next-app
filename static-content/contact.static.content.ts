export default class ContactStaticContent {
   private static readonly _email = 'contact@prod203.com'
   private static readonly _domain = 'prod203.com'
   private static readonly _phone = '0778818583'
   private static readonly _adresse = '20 avenue des violettes 34780 Ma-Ville-sur-Seine'

   private constructor() {
      // Private constructor to prevent instantiation from the outside
      // Intentionally empty
   }

   static get email(): string {
      return this._email
   }

   static get domain(): string {
      return this._domain
   }

   static get phone(): string {
      return this._phone
   }

   static get adresse(): string {
      return this._adresse
   }
}
