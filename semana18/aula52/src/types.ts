export type user = {
   id: string
   email: string
   password: string
   role: ENUM_ROLE
}

export enum ENUM_ROLE {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}