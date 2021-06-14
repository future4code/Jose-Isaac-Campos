import { authenticate } from './user/authenticate';
import { createUser } from './user/createUser';
import { getAll } from './user/getAll';

export const userBusiness = {
  createUser: createUser,
  login: authenticate,
  getAll: getAll,
};
