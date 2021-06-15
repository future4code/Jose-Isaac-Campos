import express from 'express';
import { createTask } from '../controller/task/createTask';
import { getTaskById } from '../controller/task/getTaskById';

const taskRouter = express.Router()

taskRouter.put('/', createTask)
taskRouter.get('/:id', getTaskById)

export default taskRouter