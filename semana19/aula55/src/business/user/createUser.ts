import { userDatabase } from '../../data/userDatabase';
import { user, userData } from '../../model/user';
import { generateToken } from '../../services/authenticator';
import { hash } from '../../services/hashManager';
import { generateId } from '../../services/idGenerator';

export const createUser = async (userData: userData) => {
  try {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.role
    ) {
      throw new Error('Please fill all the fields');
    }

    if (userData.email.indexOf('@') === -1) {
      throw new Error('Invalid Email');
    }

    if (userData.password.length < 6) {
      throw new Error('Password must have at least 6 characters');
    }

    const newUser: user = {
      ...userData,
      id: generateId(),
      password: await hash(userData.password),
    };

    await userDatabase.createUser(newUser);

    const token = generateToken({ id: newUser.id, role: userData.role });

    return token;
  } catch (error) {
    throw new Error(
      error.message ||
        'Error creating userData. Please check your system administrator.'
    );
  }
};
