import { User } from "../src/model/exercicio02_User"
import { performPurchas } from "../src/utils/performPurchas"

describe("Testando a validação se o usuário tem saldo para comprar", () => {
    
    test("Testando usuário com saldo maior que o valor de compra", () => {
        const user: User = { nome: 'Isaac', saldo: 200}

        const result = performPurchas(user, 80)

        expect(result).toEqual({ 
            nome: 'Isaac',
            saldo: 120
        })
    })

    test("Testando usuário com saldo igual o valor de compra", () => {
        const user: User = { nome: 'Isaac', saldo: 200}

        const result = performPurchas(user, 200)

        expect(result).toEqual({ 
            nome: 'Isaac',
            saldo: 0
        })
    })

    test("Testando usuário com saldo menor que o valor de compra", () => {
        const user: User = { nome: 'Isaac', saldo: 200}

        const result = performPurchas(user, 300)

        expect(result).toBe(undefined)
    })
})