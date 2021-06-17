import { friendRelationshipDTO } from './../../model/friendRelationship';
import connection from '../connection'

export class friendRelationshipDatabase {
    private tableName: string = 'labook_friend_relationship'

    public async create(friendRelationship: friendRelationshipDTO): Promise<void> {
        await connection(this.tableName)
            .insert(friendRelationship)
    }

    public async findById(id: string): Promise<any> {
        return await connection(this.tableName)
            .where({ id })
    }
}