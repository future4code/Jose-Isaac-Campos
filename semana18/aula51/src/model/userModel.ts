import connection from "../connection"

const userTableName = 'Aula51_User'

export const user = {
  create: async (email: string, password: string): Promise<any> => {
    return await connection(userTableName).insert({ email, password})
  }
}