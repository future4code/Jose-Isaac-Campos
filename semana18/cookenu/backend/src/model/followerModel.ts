import connection from '../connection';
import { follower, revenue } from '../types';

const userTableName = 'Follower_User';

export const followerModel = {
  follow: async (follower: follower): Promise<any> => {
    return await connection(userTableName).insert(follower);
  },
  deleteById: async (id: string): Promise<any> => {
    return await connection(userTableName).delete().where({ id });
  },
};
