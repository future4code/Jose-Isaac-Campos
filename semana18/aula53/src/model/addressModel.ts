import connection from "../connection"
import { Address } from "../types"

const userTableName = 'Aula53_Address'

export const addressModel = {
  create: async (
    {
      id, 
      cep, 
      number, 
      complement, 
      patio, 
      neighborhood, 
      city, 
      state
    }: Address): Promise<any> => {
      return await connection(userTableName)
        .insert({
          id, 
          cep, 
          number, 
          complement, 
          patio, 
          neighborhood, 
          city, 
          state
        })
    }
}