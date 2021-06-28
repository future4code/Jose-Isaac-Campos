import { Request, Response } from "express"
import { loginBusiness } from "../../business/user/loginBusiness"
import { userAccessCredentialsInputDTO, userDTO } from "../../model/user"
import { generateToken } from "../../services/authorizationManager"

export const login = async (req: Request, res: Response) => {
    try {
       const { email, password }: userAccessCredentialsInputDTO = req.body
 
       const user: userDTO = await loginBusiness({email, password})
 
       const token: string = generateToken({
          id: user.id
       })
 
       res.status(200).send({ message: 'Success', token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }