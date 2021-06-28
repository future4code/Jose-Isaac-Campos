import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export const generateHash = (
    plainText: string
): string => {
    const salt = genSaltSync(12)
    return hashSync(plainText, salt)
}

export const compareHash = (
    plainText: string,
    hash: string
): boolean => {
    return compareSync(plainText, hash)
}