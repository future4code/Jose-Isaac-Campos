import { PostDatabase } from './../../data/post/post';
import { postDTO, postInputDTO, toPostTypes } from "../../model/post";
import { authorizationData } from "../../model/types";
import { getTokenData } from "../../services/authorizationManager";
import { generateId } from "../../services/idManager";

export const createBusiness = async (post: postInputDTO, token: string): Promise<void> => {
    const { photo, description, type } = post

    if (!photo || !description || !type) {
        throw new Error('"photo" and "description" and "type" must be provided')
    }
    const tokenData: authorizationData = getTokenData(token)

    const newPost: postDTO = {
        id: generateId(),
        photo,
        description,
        type: toPostTypes(type),
        created_at: new Date()
            .toLocaleDateString()
            .split('/')
            .reverse()
            .join('-'),
        author_id: tokenData.id
    }    

    await new PostDatabase().create(newPost)
}