import { createUser } from './user/createUser';
import { getAll } from './user/getAll';
import { getUserByEmail } from './user/getUserByEmail';

export const userDatabase = {
  createUser: createUser,
  getUserByEmail: getUserByEmail,
  getAll: getAll,
};
