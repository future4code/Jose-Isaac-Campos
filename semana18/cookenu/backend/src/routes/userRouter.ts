import express from 'express';
import { followController } from '../controllers/followController';
import { userController } from '../controllers/userController';

const RouterUser = express.Router();

RouterUser.get('/user/profile', userController.profile);
RouterUser.get('/user/:id', userController.profile);
RouterUser.post('/user/follow', followController.follow);
RouterUser.post('/signup', userController.create);
RouterUser.post('/login', userController.login);

export default RouterUser;
