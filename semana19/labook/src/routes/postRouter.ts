import express from 'express'
import { create } from '../controller/post/create'
import { getById } from '../controller/post/getById'

export const postRouter = express.Router()

postRouter.post('/create', create)
postRouter.get('/:id', getById)