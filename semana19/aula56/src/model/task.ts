export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type taskInputDTO = {
   id: any
}

export type task = taskData & { id: string }

export const toTaskDTO = (input: any):task => {
   if (!input) {
      throw new Error("Tarefa não encontrada");
   }

   const task: task = {
      id: input.id,
      title: input.title,
      description: input.description,
      deadline: input.deadline,
      authorId: input.author_id
   }

   return task
}