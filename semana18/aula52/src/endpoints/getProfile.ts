import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { ENUM_ROLE, user } from "../types";
import { generateToken, getData } from "../utils/autorizator";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const authorization = req.headers.authorization as string;

      const authorized = getData(authorization)

      if (authorized.role !== ENUM_ROLE.NORMAL) {
         res.statusCode = 403;
         throw new Error('Unauthorized')
      }

      const [user] = await userModel.findById(authorized.id)

      if (!user) {
        res.statusCode = 404
        throw new Error('User not found')
      }

      res.status(201).send({id: user.id, email: user.email})

   } catch (error) {
      if (error.message === 'jwt expired') {
        res.status(403).send({message: 'Unauthorized, token expired!'})
      }
      if (error.message === 'jwt malformed' || error.message === 'invalid signature') {
        res.status(403).send({message: 'Unauthorized, token inválido!'})
      }
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}