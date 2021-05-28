import express from 'express'
import { Controller } from '../controllers/default.controller';
const Router = express.Router()

Router.get('/ping', Controller.ping)

export default Router;