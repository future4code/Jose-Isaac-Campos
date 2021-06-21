import { Request, Response } from 'express';
import { revenueModel } from '../model/revenueModel';
import { revenue } from '../types';
import { getData } from '../utils/autorizator';
import { generateId } from '../utils/generateId';

export const revenueController = {
  create: async (req: Request, res: Response) => {
    try {
      const { title, description }: revenue = req.body;

      const authorization = req.headers.authorization as string;

      const authorizationData = getData(authorization);

      if (!title) {
        res.statusCode = 400;
        throw new Error('Please provide a title for the revenue!');
      }

      if (!description) {
        res.statusCode = 400;
        throw new Error('Please provide a description for the revenue!');
      }

      const newRevenue: revenue = {
        id: generateId(),
        title,
        description,
        created_by: authorizationData.id,
      };

      await revenueModel.create(newRevenue);

      res.send({ message: 'Created!' });
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
  get: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const authorization = req.headers.authorization as string;

      getData(authorization);

      const [revenue] = await revenueModel.findById(id);

      if (!revenue) {
        res.statusCode = 404;
        throw new Error('Sorry, revenue not found!');
      }

      res.send({
        id: revenue.id,
        title: revenue.title,
        description: revenue.description,
        createdAt: new Date(revenue.creation_date).toLocaleDateString(),
      });
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
