import { userDTO } from "../../model/user";
import connection from '../connection'

export class UserDatabase {
    private tableName: string = 'labook_users'

    public async create(user: userDTO): Promise<void> {
        await connection(this.tableName)
            .insert(user)
    }

    public async findByEmail(email: string): Promise<any> {
        return await connection(this.tableName)
            .where({ email })
    }

    public async findById(id: string): Promise<any> {
        return await connection(this.tableName)
            .where({ id })
    }
}