import { UserDatabase } from "../../data/user/UserDatabase";
import { userDTO, userInputDTO } from "../../model/user";
import { generateHash } from "../../services/hashManager";
import { generateId } from "../../services/idManager";

export const signupBusiness = async (user: userInputDTO): Promise<userDTO> => {
    const { name, email, password } = user

    if (!name || !email || !password) {
        throw new Error('"name", "email" and "password" must be provided')
    }

    if (!email.includes('@')) {
        throw new Error('Email is invalid!')
    }

    const userDatabase = new UserDatabase()

    const userInDatabase = await userDatabase.findByEmail(email)
    
    if (userInDatabase && userInDatabase.length > 0) {
        throw new Error('E-mail already registered')
    }

    const newUser: userDTO = {
        id: generateId(),
        name,
        email,
        password: generateHash(password)
    }

    await userDatabase.create(newUser)

    return newUser;
}