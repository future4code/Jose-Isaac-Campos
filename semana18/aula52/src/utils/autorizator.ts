import * as jwt from 'jsonwebtoken'

type AuthenticationData = {
  id: string,
  role: string
}

export const generateToken = (input: AuthenticationData):string => {
  return jwt.sign(
    {id : input.id},
    process.env.JWT_KEY as string,
    { expiresIn: '30m'}
  )
}

export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  return {
    id: payload.id,
    role: payload.role
  }
}

