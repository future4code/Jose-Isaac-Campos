import { userDatabase } from '../../data/userDatabase';
import { user, userAccessData } from '../../model/user';
import { generateToken } from '../../services/authenticator';
import { compare } from '../../services/hashManager';

export const authenticate = async (access: userAccessData) => {
  try {
    if (!access.email || !access.password) {
      throw new Error('Please fill all the fields');
    }

    if (access.email.indexOf('@') === -1) {
      throw new Error('Invalid Email');
    }

    if (access.password.length < 6) {
      throw new Error('Password must have at least 6 characters');
    }

    const userFromDatabase: user = await userDatabase.getUserByEmail(
      access.email
    );

    const hashCompare = await compare(
      access.password,
      userFromDatabase.password
    );

    if (!hashCompare) {
      throw new Error('Invalid password!');
    }

    const token = generateToken({
      id: userFromDatabase.id,
      role: userFromDatabase.role,
    });

    return token;
  } catch (error) {
    throw new Error(
      error.message ||
        'Error creating access. Please check your system administrator.'
    );
  }
};
