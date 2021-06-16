import { connection } from '../connection';

export const getAll = async (): Promise<any> => {
  try {
    const result = await connection('User_Arq').select('*');

    if (!result[0]) {
      throw new Error('Usuários não encontrados');
    }

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
