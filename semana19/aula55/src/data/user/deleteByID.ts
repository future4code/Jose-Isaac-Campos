import { connection } from '../connection';

export const deleteByID = async (id: string): Promise<any> => {
  try {
    const result = await connection('User_Arq').delete().where({ id });

    if (!result) {
      throw new Error('Usuário não encontrado');
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
