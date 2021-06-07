import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { generateToken } from "../utils/autorizator";
import { generateId } from '../utils/generateId'

const userTableName = 'Aula51_User'

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }
   
       if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const [user] = await connection(userTableName)
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id = generateId()

      const newUser: user = { id, email, password }

      await connection(userTableName)
         .insert(newUser)

      res.status(201).send({ token: generateToken({id: user.id})})

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}