import { Request, Response } from "express";
import { addressModel } from "../model/addressModel";
import { userModel } from "../model/userModel";
import { user, ENUM_ROLE, Address } from "../types";
import { generateToken } from "../utils/autorizator";
import { generateId } from '../utils/generateId'
import { getAddress } from "../utils/getAddress";
import { generateHash } from "../utils/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password, role, cep, number, complement } = req.body

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         res.statusCode = 400
         throw new Error("Invalid email");
       }
   
       if (!req.body.password || req.body.password.length < 6) {
         res.statusCode = 400
         throw new Error("Invalid password");
      }

      if (!role || !(role in ENUM_ROLE)) {
         res.statusCode = 400
         throw new Error("Invalid role")
      }

      if (isNaN(Number(cep))) {
         res.statusCode = 400;
         throw new Error("Invalid format for cep")
      }
      
      if (isNaN(Number(number))) {
         res.statusCode = 400;
         throw new Error("Field number is not number")
      }

      if (!complement) {
         res.statusCode = 400;
         throw new Error("Complement is empty")
      }

      const [user] = await userModel.findByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const infoAddress = await getAddress(cep)
      
      const address: Address = {
         id: generateId(),
         cep,
         number,
         complement,
         patio: infoAddress.patio,
         neighborhood: infoAddress.neighborhood,
         city: infoAddress.city,
         state: infoAddress.state
      }

      await addressModel.create(address)

      const id = generateId()
      const passwordHash = generateHash(password)
      const newUser: user = { id, email, password: passwordHash, role, address_id: address.id}


      await userModel.create(newUser)

      const token = generateToken({id: newUser.id, role: newUser.role})

      res.status(201).send({token})

   } catch (error) {
      console.log(error.message);
      
      if (error.message === 'Request failed with status code 400') {
         res.status(400).send({message: "Cep inválido!"})
      }

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}