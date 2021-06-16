import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";
import {selectTaskById} from "../../data/task/selectTaskById";
import { task, taskInputDTO } from "../../model/task";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id }: taskInputDTO = req.params as taskInputDTO

      const task: task = await getTaskByIdBusiness(id)

      res.status(200).send(task)

   } catch (error) {
      res.status(400).send(error.message)
   }
}