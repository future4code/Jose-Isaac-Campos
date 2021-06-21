import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types'

export const generateToken = (payload: authenticationData):string => {
  return jwt.sign(
    {payload},
    process.env.JWT_KEY as string,
    { expiresIn: '30m'}
  )
}

export const getData = (token: string): authenticationData => {
  const {payload} = jwt.verify(token, process.env.JWT_KEY as string) as any
  return {
    id: payload.id
  }
}

