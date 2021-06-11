import { Request, Response } from "express"

export const pingController = {
    ping: async(req: Request,res: Response): Promise<void> =>{
        try {
           res.status(200).send({message: 'pong!'});
        } catch (error) {
           console.log(error)
           res.send(error.message || error.sqlMessage)
        }
     }
}