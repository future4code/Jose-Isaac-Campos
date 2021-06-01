import { taskModel } from './../models/task';
import { v4 as uuidv4, validate } from "uuid";
import { Request, Response } from "express";

// format dd/mm/yyyy
const dateReg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

export const task = {
    create: async (req: Request, res: Response) => {
        const statusCode = 400;
        try {
            let title = req.body.title;
            let description = req.body.description;
            let limitDate = req.body.limitDate
            let creatorUserId = req.body.creatorUserId;

            if (!title) {
                throw new Error("title not provided");
            }

            title = title.trim();

            if (title.length === 0) {
                throw new Error("title is empty");
            }

            if (!description) {
                throw new Error("description not provided");
            }

            description = description.trim();

            if (description.length === 0) {
                throw new Error("description is empty");
            }

            if (!limitDate) {
                throw new Error("limitDate not provided");
            }

            if (!limitDate.match(dateReg)) {
                throw new Error(
                    "the limit date is not in a valid format. Expected dd/mm/yyyy"
                );
            }

            limitDate = limitDate.replace(/\//g, "-").split("-").reverse().join("-");

            const currentDate = new Date().getTime();
            const limit = new Date(limitDate).getTime();
            const diff = limit - currentDate
            
            const days = Math.round(diff / (1000 * 60 * 60 * 24));
            console.log(days);
            //TODO resolver bug para data do mesmo dia

            if (days < 0) {
                throw new Error('the limit date is less than the current date')
            }

            if (!creatorUserId) {
                throw new Error("creatorUserId not provided");
            }

            if (!validate(creatorUserId)) {
                throw new Error("creatorUserId is not valid");
            }

            const id = uuidv4()
            const dbResult = await taskModel.create(id, title, description, limitDate, creatorUserId)
            console.log(dbResult);
            

            res.status(200).send({ message: "Success" });
        } catch (error) {
            res.status(statusCode).send({ message: error.message });
        }
    },
};
