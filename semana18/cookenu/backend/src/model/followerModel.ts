import connection from '../connection';
import { follower, revenue } from '../types';

const userTableName = 'Follower_User';

export const followerModel = {
  create: async (follower: follower): Promise<any> => {
    return await connection(userTableName).insert(follower);
  },
  deleteById: async (follower: follower): Promise<any> => {
    return await connection(userTableName)
      .delete()
      .where({
        fk_user_id: follower.fk_user_id,
        fk_following_user_id: follower.fk_following_user_id,
      });
  },
};
