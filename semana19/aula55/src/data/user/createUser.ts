import { user } from '../../model/user';
import { connection } from '../connection';

export const createUser = async (user: user): Promise<void> => {
  try {
    await connection('User_Arq').insert({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role,
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
