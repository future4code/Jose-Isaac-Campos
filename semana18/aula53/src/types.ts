export type user = {
   id: string
   email: string
   password: string
   role: ENUM_ROLE,
   address_id: string
}

export type Address = {
   id: string
   cep: number,
   number: number,
   complement: string,
   patio: string,
   neighborhood: string,
   city: string,
   state: string
}

export enum ENUM_ROLE {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}