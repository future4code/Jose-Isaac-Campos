import { connection } from "../connection"

export const avgSalary = async (gender: string): Promise<any> => {
    return await connection('Actor')
        .avg('salary as average')
        .where({ gender })
}