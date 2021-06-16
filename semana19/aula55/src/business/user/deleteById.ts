import { userDatabase } from '../../data/userDatabase';
import { getTokenData } from '../../services/authenticator';

export const deleteById = async (input: { id: string; token: string }) => {
  try {
    if (!input.token) {
      throw new Error('Unauthorized');
    }

    const tokenData = getTokenData(input.token);

    if (tokenData.role !== 'ADMIN') {
      throw new Error('Apenas administradores podem deletar usuários!');
    }

    await userDatabase.deleteByID(input.id);
  } catch (error) {
    throw new Error(
      error.message ||
        'Error creating access. Please check your system administrator.'
    );
  }
};
