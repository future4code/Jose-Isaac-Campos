import { Request, Response } from 'express'
import { userModel } from '../model/userModel'
import { user } from '../types'
import { generateToken } from '../utils/autorizator'
import { generateId } from '../utils/generateId'
import { generateHash } from '../utils/hashManager'
import { validateEmail } from '../utils/validateEmail'
import { validatePassword } from '../utils/validatePassword'

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      const { name, email, password }: user = req.body

      if (!name) {
        res.statusCode = 400
        throw new Error('Please, provide a username!')
      }

      if (!validateEmail(email)) {
        res.statusCode = 400
        throw new Error('Sorry, the email format is not valid!')
      }

      if (!validatePassword(password)) {
        res.statusCode = 400
        throw new Error('Sorry, the password must be at least 6 characters long and at least one numeric and one special character.')
      }

      //TODO validar se o email já existe

      const newUser = {
        id: generateId(),
        name,
        email,
        password: generateHash(password)
      }
      
      const result = await userModel.create(newUser)

      res.send({access_token: generateToken({id: newUser.id})})
    } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
    }
  }
}