import connection from "../connection"
import { user } from "../types"

const userTableName = 'Cookenu_User'

export const userModel = {
  create: async (user: user): Promise<any> => {
    return await connection(userTableName).insert(user)
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