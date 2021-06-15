export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInputDTO = {
	name: any,
   nickname: any,
   email: any,
   password: any,
	role: any
}

export type user = userData & { id: string }