import { friendRelationshipDTO } from './../../model/friendRelationship';
import connection from '../connection'

export class friendRelationshipDatabase {
    private tableName: string = 'labook_friend_relationship'

    public async create(friendRelationship: friendRelationshipDTO): Promise<void> {
        await connection(this.tableName)
            .insert(friendRelationship)
    }

    public async delete(friendRelationship: friendRelationshipDTO): Promise<any> {
        return await connection(this.tableName)
            .delete()
            .where({ 
                fk_follower_id: friendRelationship.fk_follower_id, 
                fk_following_id: friendRelationship.fk_following_id 
            })

    }
}