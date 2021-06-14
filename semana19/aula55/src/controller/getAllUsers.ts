import { Request, Response } from 'express';
import { userBusiness } from '../business/userBusiness';
import { userAccessData } from '../model/user';

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const users = await userBusiness.getAll(token);

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
