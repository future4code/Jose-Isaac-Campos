import { Character } from "../model/Character";

export const validateCharacter = (character: Character) => {
    const { name, life, defense, attack }: Character = character

    if (!name || !life || !defense || !attack) {
        return false
    }

    if (name.length === 0) {
        return false
    }

    if (life < 1500 || typeof life !== "number") {
        return false
    }

    if (defense <= 0 || typeof defense !== "number") {
        return false
    }

    if (attack <= 0 || typeof attack !== "number") {
        return false
    }

    return true
}