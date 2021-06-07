import connection from "../connection"

const userTableName = 'Aula51_User'

export const user = {
  create: async (email: string, password: string): Promise<any> => {
    return await connection(userTableName).insert({ email, password})
  },
  findByEmail: async (email: string): Promise<any> => {
    return await connection(userTableName)
         .where({ email })
  }
}