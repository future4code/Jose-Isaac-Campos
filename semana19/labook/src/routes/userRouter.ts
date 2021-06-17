import express from 'express'
import { follow } from '../controller/friendRelationship/follow'
import { unFollow } from '../controller/friendRelationship/unfollow'
import { login } from '../controller/user/login'
import { signup } from '../controller/user/signup'

export const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.put('/follow/:id', follow)
userRouter.put('/unfollow/:id', unFollow)