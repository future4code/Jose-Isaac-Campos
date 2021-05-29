import express from 'express'
import { Controller } from '../controllers/default.controller';
const Router = express.Router()

Router.get('/ping', Controller.ping)
Router.put('/user', Controller.user.create)
Router.get('/user/:id', Controller.user.findById)

export default Router;