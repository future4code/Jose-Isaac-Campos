import { Character } from "../model/Character"

const performAttack = (
    attacker: Character, 
    defender: Character, 
    validator: (character: Character) => boolean 
) => {
    
    if(!validator(attacker) || !validator(defender)) {
        throw new Error('Ivalid character')
    }

    if (attacker.attack > defender.defense) {
        defender.life -= defender.defense - attacker.attack
    }
}

export {performAttack}