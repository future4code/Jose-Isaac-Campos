import { getByIdBusiness } from './../../business/post/getByIdBusiness';
import { Request, Response } from "express"

export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
 
        const post = await getByIdBusiness(id)
 
       res.status(200).send({ message: 'Success', post })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }