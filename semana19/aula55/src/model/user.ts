export enum USER_ROLES {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

export type userData = {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type user = userData & { id: string };
