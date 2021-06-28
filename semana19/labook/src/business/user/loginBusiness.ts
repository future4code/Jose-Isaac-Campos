import { UserDatabase } from "../../data/user/UserDatabase";
import { userAccessCredentialsInputDTO, userDTO } from "../../model/user";
import { compareHash } from "../../services/hashManager";

export const loginBusiness = async (access: userAccessCredentialsInputDTO): Promise<userDTO> => {
    const { email, password } = access;
    if (!email || !password) {
        throw new Error('"email" and "password" must be provided')
    }

    const queryResult: any = await new UserDatabase().findByEmail(email)

    if (!queryResult[0]) {
        throw new Error("Invalid credentials")
    }

    const user: userDTO = {
        id: queryResult[0].id,
        name: queryResult[0].name,
        email: queryResult[0].email,
        password: queryResult[0].password
    }

    const passwordIsCorrect: boolean = compareHash(password, user.password)

    if (!passwordIsCorrect) {
        throw new Error("Invalid credentials")
    }

    return user;
}