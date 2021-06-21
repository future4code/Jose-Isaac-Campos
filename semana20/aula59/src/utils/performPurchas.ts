import { User } from "../model/user";

export function performPurchas(user: User, value: number): User | undefined {
    if (user.saldo >= value) {
        return { nome: user.nome, saldo: user.saldo - value }
    }
       
    return undefined
}