import { connection } from "../connection";

const create = async (id: string, name: string, nickname: string, email: string) => {
    try {
        return await connection('TodoListUser')
            .insert({ id, name, nickname, email })
    } catch (error) {
        return error.message
    }
}

const findById = async (id: string) => {
    try {
        return await connection('TodoListUser').select('*').where({id})
    } catch (error) {
        return error.message
    }
}

export const user = {
    create,
    findById,
}