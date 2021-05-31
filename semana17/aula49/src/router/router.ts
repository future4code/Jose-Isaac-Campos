import { userController } from './../controllers/userController';
import express from 'express'
import { pingController } from '../controllers/ping'
const Router = express.Router()

Router.get('/ping', pingController.ping)
Router.get('/users', userController.getAllUsers)
Router.get('/users/search', userController.getUsersByName)
Router.get('/users/:type', userController.getUsersByType)

export default Router;