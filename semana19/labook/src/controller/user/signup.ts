import { generateToken } from './../../services/authorizationManager';
import { userDTO, userInputDTO } from '../../model/user';
import { Request, Response } from "express"
import { signupBusiness } from '../../business/user/signupBusiness';

export const signup = async (req: Request, res: Response) => {
   try {
      const { name, email, password }: userInputDTO = req.body

      const newUser: userDTO = await signupBusiness({ name, email, password })

      const token: string = generateToken({ id: newUser.id })

      res.status(201).send({ message: 'Success!', token })

   } catch (error) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
}