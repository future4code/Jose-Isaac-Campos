import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { user } from "../types";
import { generateToken } from "../utils/autorizator";
import { compareHash } from "../utils/hashManager";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password }: user = req.body

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }
   
       if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const [user] = await userModel.findByEmail(email)

      if (!user) {
         res.statusCode = 404
         throw new Error('Email não encontrado!')
      }
      
      const passwordIsVerified = compareHash(password, user.password)

      if (!passwordIsVerified) {
        res.statusCode = 409
        throw new Error('Senha incorreta!')
      }

      res.status(201).send({ token: generateToken({id: user.id, role: user.role})})

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}