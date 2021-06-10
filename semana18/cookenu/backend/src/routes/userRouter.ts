import express from 'express'
import { userController } from '../controllers/userController';

const RouterUser = express.Router()

RouterUser.post('/signup', userController.create)

export default RouterUser;