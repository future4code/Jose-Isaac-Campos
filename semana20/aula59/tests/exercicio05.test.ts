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
    
        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
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
    
        expect(result.brazilians.unallowed.length).toBe(0)
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

        expect(result.americans.unallowed).toContain('Isaac')
        expect(result.brazilians.unallowed).toContain('Lisle')
    })

    test("Testando para usuários brasileiros com idade igual a 19 anos e os americanos 21 anos em um caso localizado nos Estados Unidos", () => {
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

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(2)
    })

})