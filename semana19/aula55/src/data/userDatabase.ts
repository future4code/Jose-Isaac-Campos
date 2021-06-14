import { createUser } from './user/createUser';
import { getUserByEmail } from './user/getUserByEmail';

export const userDatabase = {
  createUser: createUser,
  getUserByEmail: getUserByEmail,
};
