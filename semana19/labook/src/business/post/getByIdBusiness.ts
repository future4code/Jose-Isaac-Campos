import { postDTO, postResponseDTO } from "../../model/post";
import {PostDatabase} from '../../data/post/post'

export const getByIdBusiness = async (id: string): Promise<postResponseDTO> => {
    const queryResult: any = await new PostDatabase().findById(id)
 
       if (!queryResult[0]) {
          throw new Error("Post not found")
       }
 
       const post: postResponseDTO = {
          id: queryResult[0].id,
          photo: queryResult[0].photo,
          description: queryResult[0].description,
          type: queryResult[0].type,
          createdAt: queryResult[0].created_at,
          authorId: queryResult[0].author_id,
       }

       return post
}