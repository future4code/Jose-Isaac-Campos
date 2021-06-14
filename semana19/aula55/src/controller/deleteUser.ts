import { Request, Response } from 'express';
import { userBusiness } from '../business/userBusiness';

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const input = {
      id: req.params.id,
      token: req.headers.authorization as string,
    };

    await userBusiness.deleteById(input);

    res.status(200).send({ message: 'Usuário apagado com sucesso' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
