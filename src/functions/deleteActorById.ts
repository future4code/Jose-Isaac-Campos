import { connection } from "../connection"

export const deleteActorById = async (id: string): Promise<any> => {
    const res = await connection('Actor')
        .where({ id: id }).delete()
    return res
}