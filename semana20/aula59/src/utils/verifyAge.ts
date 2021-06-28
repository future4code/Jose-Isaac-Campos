import { Casino, User, Result, ResultItem, LOCATION, NATIONALITY } from "../model/exercicio03_types";

export function verifyAge(
    casino: Casino,
    users: User[]
): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (let user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowed.push(user)
            } else {
                unallowed.push(user)
            }
        } else if (casino.location === LOCATION.BRAZIL){            
            if (user.age >= 18) {
                allowed.push(user)
            } else {
                unallowed.push(user)
            }
        }
    }

    return {
        brazilians: {
            allowed: allowed
                .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
                .map((user) => user.name),
            unallowed: unallowed
                .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
                .map((user) => user.name)
        },
        americans: {
            allowed: allowed
                .filter((user) => user.nationality === NATIONALITY.AMERICAN)
                .map((user) => user.name),
            unallowed: unallowed
                .filter((user) => user.nationality === NATIONALITY.AMERICAN)
                .map((user) => user.name)
        }
    }
}