import connection from "../connection"
import { user } from "../types"

const userTableName = 'Aula51_User'

export const userModel = {
  create: async ({id, email, password, role}: user): Promise<any> => {
    return await connection(userTableName).insert({id, email, password, role})
  },
  findByEmail: async (email: string): Promise<any> => {
    return await connection(userTableName)
         .where({ email })
  },
  findById: async (id: string): Promise<any> => {
    return await connection(userTableName)
         .where({ id })
  },
  deleteById: async (id: string): Promise<any> => {
    return await connection(userTableName).delete().where({ id })
  }
}