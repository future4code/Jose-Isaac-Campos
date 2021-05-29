import { user as userModel } from '../models/user';
import { v4 as uuidv4, validate } from 'uuid';

import { Request, Response } from "express"

export const user = {
    create: async (req: Request, res: Response) => {
        let statusCode = 400
        try {
            let name = req.body.name
            let nickname = req.body.nickname
            let email = req.body.email

            if (!name) {
                throw new Error('name not provided')
            }

            name = name.trim()

            if (name.length === 0) {
                throw new Error('name is empty')
            }

            //TODO: validar nome pelo tamanho

            if (!nickname) {
                throw new Error('nickname not provided')
            }

            nickname = nickname.trim()

            if (nickname.length === 0) {
                throw new Error('nickname is empty')
            }

            //TODO: remover espaços no nickname

            if (!email) {
                throw new Error('email not provided')
            }

            email = email.trim()

            if (email.length === 0) {
                throw new Error('email is empty')
            }

            // TODO: verificar se o email está em um formato válido

            const id = uuidv4()
            const dbResult = await userModel.create(id, name, nickname, email)
            console.log(dbResult);

             // TODO: verifique se o nickname ou email já existe
             // TODO: validar error do db

            res.status(200).send({ message: 'Success'})
        } catch (error) {
            res.status(statusCode).send({ message: error.message})
        }
    },
    findById: async (req: Request, res: Response) => {
        let statusCode = 400
        try {
            const id = req.params.id
            
            if (!validate(id)) {
                throw new Error('is not a valid id!')
            }

            const dbResult = await userModel.findById(id)
            
            if (dbResult.length === 0) {
                statusCode = 404
                throw new Error('user not found!')
            }

            res.status(200).send({ message: 'Success', user: {id, nickname: dbResult[0].nickname}})
        } catch (error) {
            res.status(statusCode).send({ message: error.message})
        }
    },
    edit: async (req: Request, res: Response) => {
        let statusCode = 400
        try {
            const id = req.params.id
            let name = req.body.name
            let nickname = req.body.nickname            
            
            if (!validate(id)) {
                throw new Error('is not a valid id!')
            }

            if (!name) {
                throw new Error('name not provided')
            }

            name = name.trim()

            if (name.length === 0) {
                throw new Error('name is empty')
            }

            //TODO: validar nome pelo tamanho

            if (!nickname) {
                throw new Error('nickname not provided')
            }

            nickname = nickname.trim()

            if (nickname.length === 0) {
                throw new Error('nickname is empty')
            }

            //TODO: remover espaços no nickname

            const dbResult = await userModel.edit(id, name, nickname)
            
            if (dbResult === 0) {
                statusCode = 404
                throw new Error('user not found!')
            }

            res.status(200).send({ message: 'Success', user: {id, name: name, nickname}})
        } catch (error) {
            res.status(statusCode).send({ message: error.message})
        }
    }
}