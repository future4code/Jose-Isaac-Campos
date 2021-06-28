import { Request, Response } from 'express';
import { createBusiness } from '../../business/post/createBusiness';
import { postInputDTO } from './../../model/post';
export const create = async (req: Request, res: Response) => {
    try {
 
       const { photo, description, type }: postInputDTO = req.body
       const token: string = req.headers.authorization as string
      
       await createBusiness({ photo, description, type }, token)
 
       res.status(201).send({ message: 'Success' })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }