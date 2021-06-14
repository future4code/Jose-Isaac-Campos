import { Request, Response } from 'express';
import { userBusiness } from '../business/userBusiness';
import { userAccessData } from '../model/user';

export const login = async (req: Request, res: Response) => {
  try {
    const input: userAccessData = {
      email: req.body.email,
      password: req.body.password,
    };

    const token = await userBusiness.login(input);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
