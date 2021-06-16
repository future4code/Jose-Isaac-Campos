import { task, toTaskDTO } from "../../model/task";
import { connection } from "../connection";

export const selectTaskById = async (
   id: string
): Promise<task> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   return toTaskDTO(result[0][0])
}