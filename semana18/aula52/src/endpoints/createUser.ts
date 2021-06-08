import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { user } from "../types";
import { generateToken } from "../utils/autorizator";
import { generateId } from '../utils/generateId'
import { generateHash } from "../utils/hashManager";

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

      const [user] = await userModel.findByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id = generateId()
      const passwordHash = generateHash(password)
      const newUser: user = { id, email, password: passwordHash}

      await userModel.create(newUser)

      const token = generateToken({id: newUser.id})

      res.status(201).send({token})

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}