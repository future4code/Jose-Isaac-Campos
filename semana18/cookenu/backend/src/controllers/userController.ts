import { Request, Response } from 'express';
import { userModel } from '../model/userModel';
import { user } from '../types';
import { generateToken, getData } from '../utils/autorizator';
import { generateId } from '../utils/generateId';
import { compareHash, generateHash } from '../utils/hashManager';
import { validateEmail } from '../utils/validateEmail';
import { validatePassword } from '../utils/validatePassword';

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      const { name, email, password }: user = req.body;

      if (!name) {
        res.statusCode = 400;
        throw new Error('Please, provide a username!');
      }

      if (!validateEmail(email)) {
        res.statusCode = 400;
        throw new Error('Sorry, the email format is not valid!');
      }

      if (!validatePassword(password)) {
        res.statusCode = 400;
        throw new Error(
          'Sorry, the password must be at least 6 characters long and at least one numeric and one special character.'
        );
      }

      const [user] = await userModel.findByEmail(email);

      if (user) {
        res.statusCode = 400;
        throw new Error('Email already registered!');
      }

      const newUser = {
        id: generateId(),
        name,
        email,
        password: generateHash(password),
      };

      await userModel.create(newUser);

      res.send({ access_token: generateToken({ id: newUser.id }) });
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: 'Internal server error' });
      } else {
        res.send({ message: error.message });
      }
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { email, password }: user = req.body;

      if (!validateEmail(email)) {
        res.statusCode = 400;
        throw new Error('Sorry, the email format is not valid!');
      }

      if (!validatePassword(password)) {
        res.statusCode = 400;
        throw new Error(
          'Sorry, the password must be at least 6 characters long and at least one numeric and one special character.'
        );
      }

      const [user] = await userModel.findByEmail(email);

      if (!user) {
        res.statusCode = 404;
        throw new Error(
          'User not found! make sure you typed the email correctly.'
        );
      }

      const isValidPassword = compareHash(password, user.password);

      if (!isValidPassword) {
        res.statusCode = 401;
        throw new Error('Invalid password, please try again!');
      }

      res.send({ access_token: generateToken({ id: user.id }) });
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: 'Internal server error' });
      } else {
        res.send({ message: error.message });
      }
    }
  },
  profile: async (req: Request, res: Response) => {
    try {
      const authorization = req.headers.authorization as string;
      const { id } = req.params;

      const authorizationData = getData(authorization);

      const userId = id ? id : authorizationData.id;

      const [user] = await userModel.findById(userId);

      if (!user) {
        res.statusCode = 404;
        throw new Error('User not found!');
      }

      res.send({ id: user.id, name: user.name, email: user.email });
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
