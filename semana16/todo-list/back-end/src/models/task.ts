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
      limitDate,
      creatorUserId
    });
  } catch (error) {
    return error.message;
  }
};

export const task = {
  create,
};
