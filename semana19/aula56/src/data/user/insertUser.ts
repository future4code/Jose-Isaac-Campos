import { connection } from "../connection";
import { signupBusinessDTO } from "../../model/user";

export const insertUser = async(
   user: signupBusinessDTO
) => {
   await connection.insert(user).into('to_do_list_users')
}