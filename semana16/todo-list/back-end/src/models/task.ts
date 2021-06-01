import { connection } from "../connection";

const create = async (
  id: string,
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: string
) => {
  try {
    return await connection("TodoListTask").insert({
      id,
      title,
      description,
      limit_date: limitDate,
      creator_user_id: creatorUserId
    });
  } catch (error) {
    return error.message;
  }
};

export const taskModel = {
  create,
};
