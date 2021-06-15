import express from 'express';
import { login } from '../controller/user/login';
import { signup } from '../controller/user/signup';

const useRouter = express.Router()

useRouter.post('/signup', signup)
useRouter.post('/login', login)

export default useRouter