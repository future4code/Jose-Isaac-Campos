import { Request, Response } from 'express';
import { followerModel } from '../model/followerModel';
import { follower } from '../types';
import { getData } from '../utils/autorizator';
import { validateFormatId } from '../utils/generateId';

export const followController = {
  follow: async (req: Request, res: Response) => {
    try {
      const { userToFollowId } = req.body;

      const authorization = req.headers.authorization as string;

      const authorizationData = getData(authorization);

      if (!validateFormatId(userToFollowId)) {
        res.statusCode = 400;
        throw new Error('Sorry, the ID is in an invalid format.');
      }

      const newFollower: follower = {
        fk_user_id: authorizationData.id,
        fk_following_user_id: userToFollowId,
      };

      await followerModel.follow(newFollower);

      res.send({ message: 'Followed successfully' });
    } catch (error) {
      if (error.message === 'jwt expired') {
        res.status(403).send({ message: 'Unauthorized, token expired!' });
      }

      if (
        error.message === 'jwt malformed' ||
        error.message === 'invalid signature'
      ) {
        res.status(403).send({ message: 'Unauthorized, token invalid!' });
      }
      if (res.statusCode === 200) {
        res.status(500).send({ message: 'Internal server error' });
      } else {
        res.send({ message: error.message });
      }
    }
  },
};
