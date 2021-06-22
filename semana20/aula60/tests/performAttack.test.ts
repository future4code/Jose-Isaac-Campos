import { Character } from "../src/model/Character";
import { performAttack } from "../src/utils/parformAttack";

describe('Testando a performAttack', () => {

    test('Testando com dados válidos', () => {
        const validatorMock = jest.fn(() => {
            return true
        });

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 300,
            attack: 900,
        };

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 700,
            attack: 800,
        };

        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toBe(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })


    test('Testando com dados inválidos', () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false
        });

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 0,
            attack: 900,
        };

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 700,
            attack: 800,
        };

        try {
            performAttack(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    })
})