import { Casino, User, Result, ResultItem, LOCATION } from "../model/exercicio03_types";

export function verifyAge(
    casino: Casino,
    users: User[]
): Result {
    const result: Result = {
        brazilians: {
            allowed: [],
            unallowed: []
        },
        americans: {
            allowed: [],
            unallowed: []
        }
    }

    for (let user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                result.americans.allowed.push(user.name)
            } else {
                result.americans.unallowed.push(user.name)
            }
        } else {
            if (user.age >= 21) {
                result.brazilians.allowed.push(user.name)
            } else {
                result.brazilians.unallowed.push(user.name)
            }
        }
    }

    return result
}