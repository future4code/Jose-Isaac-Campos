import { userDatabase } from '../../data/userDatabase';
import { user, userAccessData } from '../../model/user';
import { generateToken, getTokenData } from '../../services/authenticator';
import { compare } from '../../services/hashManager';

export const getAll = async (token: string) => {
  try {
    if (!token) {
      throw new Error('Unauthorized');
    }

    getTokenData(token);

    const users = await userDatabase.getAll();

    return users;
  } catch (error) {
    throw new Error(
      error.message ||
        'Error creating access. Please check your system administrator.'
    );
  }
};
