import * as jwt from 'jsonwebtoken'
import { authorizationData } from '../model/types'

export const generateToken = (payload: authorizationData): string => {
    return jwt.sign(
        {payload},
        process.env.JWT_KEY,
        { expiresIn: '30m'}
    )
}

export const getTokenData = (token: string): authorizationData => {
    const {payload} = jwt.verify(token, process.env.JWT_KEY) as any
    
    return {id: payload.id}
}