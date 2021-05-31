import { connection } from '../connection';

export const userModel = {
    selectAllUsers: async (): Promise<any> => {
        const result = await connection.raw(`
           SELECT id, name, email, type
           FROM aula48_exercicio;
        `)
     
        return result[0]
     },
     selectUsersByName: async (name: string): Promise<any> => {
      const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         WHERE name LIKE '%${name}%';
      `)
   
      return result[0]
   },
   selectUsersByType: async (type: string): Promise<any> => {
      const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         WHERE type LIKE '%${type}%';
      `)
   
      return result[0]
   },
   selectAllUsersOrderBy: async (order: string, orderBy: string): Promise<any> => {
      const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         ORDER BY ${orderBy} ${order};
      `)
   
      return result[0]
   },
}