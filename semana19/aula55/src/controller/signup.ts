import { Request, Response } from 'express';
import { userBusiness } from '../business/userBusiness';
import { userData } from '../model/user';

export const signup = async (req: Request, res: Response) => {
  try {
    const input: userData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
    };

    const token = await userBusiness.createUser(input);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
