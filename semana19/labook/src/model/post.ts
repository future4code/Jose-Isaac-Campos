export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }

 export const toPostTypes = (type: string): POST_TYPES => {
    switch (type) {
        case 'NORMAL':
            return POST_TYPES.NORMAL
        case 'EVENT':
            return POST_TYPES.EVENT
        default:
            return POST_TYPES.NORMAL
    }
 }
 
 export type postDTO = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: string,
    author_id: string
 }

 export type postResponseDTO = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: string,
    authorId: string
 }

 export type postInputDTO = {
    photo: any,
    description: any,
    type: any
 }