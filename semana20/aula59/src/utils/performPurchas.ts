import { User } from "../model/exercicio02_User";

export function performPurchas(user: User, value: number): User | undefined {
    if (user.saldo >= value) {
        return { nome: user.nome, saldo: user.saldo - value }
    }
       
    return undefined
}