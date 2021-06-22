import { validateCharacter } from "../src/utils/validateCharacter"

describe('Testando a validateCharacter', () => {

    test('Verificando se o nome do personagem está vario', () => {
        const result = validateCharacter({ 
            name: "",
            life: 1500,
            defense: 100,
            attack: 200
        })

        expect(result).toBe(false)
    })


    test('Verificando se o personagem está com a vida em 0', () => {
        const result = validateCharacter({ 
            name: "Tgs",
            life: 0,
            defense: 100,
            attack: 200
        })

        expect(result).toBe(false)
    })

    test('Verificando se o personagem está com o ataque em 0', () => {
        const result = validateCharacter({ 
            name: "Tgs",
            life: 1500,
            defense: 100,
            attack: 0
        })

        expect(result).toBe(false)
    })

    test('Verificando se o personagem está com a defesa em 0', () => {
        const result = validateCharacter({ 
            name: "Tgs",
            life: 1500,
            defense: 0,
            attack: 200
        })

        expect(result).toBe(false)
    })


    test('Verificando se o personagem está com algum valor negativo', () => {
        const result = validateCharacter({ 
            name: "Tgs",
            life: 1500,
            defense: -1,
            attack: 200
        })

        expect(result).toBe(false)
    })


    test('Verificando um personagem preenchido corretamente', () => {
        const result = validateCharacter({ 
            name: "Tgs",
            life: 1500,
            defense: 100,
            attack: 200
        })

        expect(result).toBe(true)
    })


})