import { Request, Response } from "express";
import { validate } from "uuid";
import { userModel } from "../model/userModel";
import { ENUM_ROLE} from "../types";
import { getData } from "../utils/autorizator";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const authorization = req.headers.authorization as string;
      const id = req.params.id

      const authorized = getData(authorization)

      if (authorized.role !== ENUM_ROLE.ADMIN) {
         res.statusCode = 403
         throw new Error('Unauthorized, Only a admin user can access this functionality')
      }

      if (!validate(id)) {
        res.statusCode = 400
        throw new Error("Invalid id")
      }

      const result = await userModel.deleteById(id)

      if (result === 0) {
        res.statusCode = 404
        throw new Error('User not found')
      }

      res.status(201).send({message: 'User deleted with success'})

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