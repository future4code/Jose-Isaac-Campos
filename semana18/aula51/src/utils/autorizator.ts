import * as jwt from 'jsonwebtoken'

type authenticationData = {
  id: string
}

export const generateToken = (input: authenticationData):string => {
  return jwt.sign(
    {id : input.id},
    process.env.JWT_KEY as string,
    { expiresIn: '30s'}
  )
}

