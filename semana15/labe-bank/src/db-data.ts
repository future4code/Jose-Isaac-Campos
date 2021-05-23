import { client } from './model/client'

export const clients: client[] = [
    {
        name: 'Isaac',
        cpf: 11100011100,
        birthDate: 909802800000,
        account: {
            balance: 200,
            extract: [
                {
                    value: -33,
                    date: new Date().getTime(),
                    dueDate: new Date().getTime(),
                    description: 'Netflix'
                },
                {
                    value: -9.90,
                    date: new Date().getTime(),
                    dueDate: new Date().getTime(),
                    description: 'Netflix'
                }
            ]
        }
    }
]