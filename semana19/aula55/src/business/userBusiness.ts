import { authenticate } from './user/authenticate';
import { createUser } from './user/createUser';

export const userBusiness = {
  createUser: createUser,
  login: authenticate,
};
