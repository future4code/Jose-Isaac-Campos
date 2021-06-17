import { friendRelationshipDatabase } from '../../data/friendRelationship/friendRelationship';
import { getTokenData } from '../../services/authorizationManager';
import { friendRelationshipDTO, friendRelationshipInputDTO } from './../../model/friendRelationship';

export const followBusiness = async (friendRelationship: friendRelationshipInputDTO): Promise<void> => {
    const {fk_following_id, token} = friendRelationship

    if (!fk_following_id || !token) {
        throw new Error('user to follow id and token must be provided')
    }

    const tokenData = getTokenData(token)

    const relationship: friendRelationshipDTO = {
        fk_follower_id: tokenData.id,
        fk_following_id
    }

    await new friendRelationshipDatabase().create(relationship)
}