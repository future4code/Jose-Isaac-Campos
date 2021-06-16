import { user } from './userController';
import { Request, Response } from "express";
import { task } from './taskController';

export const Controller = {
    ping: (req: Request, res: Response) => {
        res.status(200).send({ message: 'pong'})
    },
    user,
    task
}