import { connection } from "../connection"

export const updateSalary = async (id: string, salary: number): Promise<any> => {
    if (isNaN(Number(salary))) return 'salary is not a number'

    return await connection('Actor')
        .update({ salary: salary })
        .where({ id: id })

    
    return 'Updated!'
}