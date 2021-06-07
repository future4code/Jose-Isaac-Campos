import * as jwt from 'jsonwebtoken'

type authenticationData = {
  id: string
}

export const generateToken = (input: string):string => {
  return jwt.sign(
    input,
    process.env.JWT_KEY as string,
    { expiresIn: '30m'}
  )
}

