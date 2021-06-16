import { postDTO } from '../../model/post'
import connection from '../connection'

export class PostDatabase {
    private tableName: string = 'labook_posts'

    public async create(post: postDTO): Promise<void> {
        await connection(this.tableName)
            .insert(post)
    }

    public async findById(id: string): Promise<any> {
        return await connection(this.tableName)
            .where({ id })
    }
}