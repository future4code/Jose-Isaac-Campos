import { v4 as uuidV4, validate } from 'uuid'

export const generateId = (): string => {
    return uuidV4()
}

export const validateId = (id: string):boolean => {
    return validate(id)
}