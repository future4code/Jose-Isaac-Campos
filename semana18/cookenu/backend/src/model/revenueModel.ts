import connection from '../connection';
import { revenue } from '../types';

const userTableName = 'Cookenu_Revenue';

export const revenueModel = {
  create: async (user: revenue): Promise<any> => {
    return await connection(userTableName).insert(user);
  },
  findById: async (id: string): Promise<any> => {
    return await connection(userTableName).where({ id });
  },
  deleteById: async (id: string): Promise<any> => {
    return await connection(userTableName).delete().where({ id });
  },
};
