import { Request, Response } from "express";
import { followBusiness } from "../../business/friendRelationship/followBusines";
import { friendRelationshipInputDTO } from "../../model/friendRelationship";

export const follow = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const token = req.headers.authorization

        const friendRelationship: friendRelationshipInputDTO = { 
            fk_following_id: id,
            token
        }

        await followBusiness(friendRelationship)

        res.send({ message: 'Success!'})
    } catch (error) {
        if (error.sqlMessage && error.sqlMessage.includes('a foreign key constraint fails')) {
            res.status(404).send({message: 'friend to follow not found'})
        }

        if (res.statusCode === 200) {
            res.send({ message: error.message || error.sqlMessage})
        }
    }
}