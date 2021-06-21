import { Casino, LOCATION, NATIONALITY, Result, User } from "../src/model/exercicio03_types"
import { verifyAge } from "../src/utils/verifyAge"

describe("Testando a validação se o usuário tem idade para entrar em um casino com base na localidade", () => {

    test("Testando para um usuário brasileiro maior de idade em um caso localizado no brasil", () => {
        const user: User = { 
            name: 'Isaac',
            age: 22,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = { 
            name: 'Campos royal',
            location: LOCATION.BRAZIL
        }

        const result: Result = verifyAge(casino, [user])

        expect(result.brazilians.allowed[0]).toBe("Isaac")
    })

    test("Testando para um usuário americano maior de idade em um caso localizado no brasil", () => {
        const user: User = { 
            name: 'Isaac',
            age: 22,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = { 
            name: 'Campos royal',
            location: LOCATION.BRAZIL
        }

        const result: Result = verifyAge(casino, [user])

        expect(result.americans.allowed[0]).toBe("Isaac")
    })


    test("Testando para usuários americanos e brasileiros com idade igual a 19 anos em um caso localizado nos Estados Unidos", () => {
        const usersBrazilian: User[] = [
            { 
                name: 'Isaac',
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            },
            { 
                name: "Lisle",
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            }
        ]

        const usersAmerican: User[] = [
            { 
                name: 'Isaac',
                age: 19,
                nationality: NATIONALITY.AMERICAN
            },
            { 
                name: "Lisle",
                age: 19,
                nationality: NATIONALITY.AMERICAN
            }
        ]

        const casino: Casino = { 
            name: 'Campos royal',
            location: LOCATION.EUA
        }

        const result: Result = verifyAge(casino, [...usersBrazilian, ...usersAmerican])

        expect(result.americans.unallowed).toEqual(['Isaac', 'Lisle'])
        expect(result.brazilians.unallowed).toEqual(['Isaac', 'Lisle'])
    })


    test("Testando para usuários brasileiros com idade igual a 19 anos e americanos com idade igual a 21 anos em um caso localizado nos Estados Unidos", () => {
        const usersBrazilian: User[] = [
            { 
                name: 'Isaac',
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            },
            { 
                name: "Lisle",
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            }
        ]

        const usersAmerican: User[] = [
            { 
                name: 'Isaac',
                age: 21,
                nationality: NATIONALITY.AMERICAN
            },
            { 
                name: "Lisle",
                age: 21,
                nationality: NATIONALITY.AMERICAN
            }
        ]

        const casino: Casino = { 
            name: 'Campos royal',
            location: LOCATION.EUA
        }

        const result: Result = verifyAge(casino, [...usersBrazilian, ...usersAmerican])

        expect(result.americans.allowed).toEqual(['Isaac', 'Lisle'])
        expect(result.brazilians.unallowed).toEqual(['Isaac', 'Lisle'])
    })
})