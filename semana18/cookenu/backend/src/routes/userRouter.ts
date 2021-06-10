import express from 'express'
import { userController } from '../controllers/userController';

const RouterUser = express.Router()

RouterUser.post('/signup', userController.create)
RouterUser.post('/login', userController.login)

export default RouterUser;