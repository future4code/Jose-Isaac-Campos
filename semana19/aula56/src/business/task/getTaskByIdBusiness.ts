import { selectTaskById } from "../../data/task/selectTaskById"
import { taskInputDTO } from "../../model/task"

export const getTaskByIdBusiness = async (
   {id}:taskInputDTO
) => {
   const task = await selectTaskById(id)

   // const taskWithUserInfo = {
   //    id: result.id,
   //    title: result.title,
   //    description: result.description,
   //    deadline: result.deadline,
   //    status: result.status,
   //    authorId: result.author_id,
   //    authorNickname: result.nickname
   // }

   return task
}