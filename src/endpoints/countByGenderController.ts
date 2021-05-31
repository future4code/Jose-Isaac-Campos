import { Request, Response } from "express";
import { countActorByGender } from "../functions/countActorByGender";

export const countByGenderController = async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender

        if (!gender) {
            throw new Error('gender not provided')
        }

        if (gender !== 'female' && gender !== 'male') {
            throw new Error('expected value female or male')
        }

        const count = await countActorByGender(gender)
        
        

        res.status(200).send({gender: gender, count: count})
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}