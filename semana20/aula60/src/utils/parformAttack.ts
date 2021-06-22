import { Character } from "../model/Character"

const performAttack = (
    attacker: Character, 
    defender: Character, 
    validator: (character: Character) => boolean 
) => {
    
    if(!validator(attacker) || !validator(defender)) {
        throw new Error('Invalid character')
    }

    if (attacker.attack > defender.defense) {
        const damage = Math.abs(defender.defense - attacker.attack)

        defender.life -= damage
    }
}

export {performAttack}