import express from 'express'
import { create } from '../controller/post/create'

export const postRouter = express.Router()

postRouter.post('/create', create)
postRouter.get('/:id', )