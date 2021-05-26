import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

enum userTypes {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

/**
 * Exercício 01
 * a => get
 * b => /users
 */
app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users);
})

/**
 * Exercício 02
 * a => atraves de query params. por se tratar de funcionalidade de filtro
 * b => criar um enum com os tipos permitidos
 */
app.get('/users/search', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        if (Array.isArray(req.query.type)) {
            throw new Error('expected unique params')
        }
        if (!req.query.type) {
            throw new Error('This endpoint expects a query type!')
        }

        const type = req.query.type as string

        const result = users.filter((user) => {
            return user.type === type.toUpperCase()
        })

        if (!result.length) {
            statusCode = 404
            throw new Error('users type not found!')
        }

        res.status(200).send(result)
    } catch (error) {
        res.status(statusCode).send({ message: error.message })
    }
})

/**
 * Exercício 03
 * a => atraves de query params. por se tratar de funcionalidade de filtro
 */
app.get('/users/search?name', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        if (Array.isArray(req.query.name)) {
            throw new Error('expected unique params')
        }
        if (!req.query.name) {
            throw new Error('This endpoint expects a query name!')
        }

        const name = req.query.name as string

        const result = users.filter((user) => {
            return user.name === name.toUpperCase()
        })

        if (!result.length) {
            statusCode = 404
            throw new Error('user not found!')
        }

        res.status(200).send(result)
    } catch (error) {
        res.status(statusCode).send({ message: error.message })
    }
})

/**
 * Exercício 04
 * a => atraves de query params. por se tratar de funcionalidade de filtro
 */
app.post('/users', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        const name = req.body.name
        const email = req.body.email
        const type = req.body.type
        const age = Number(req.body.age)

        console.log(name);
        
        if (!name || name[0] === ' ') {
            throw new Error('Expected username')
        }

        if (!email || email[0] === ' ') {
            throw new Error('Expected email')
        }

        if (!type || type[0] === ' ') {
            throw new Error('Expected a type')
        }

        if (!age) {
            throw new Error('Expected age')
        }


        let isExpectedType = false

        for (let userType in userTypes) {
            if (type.toUpperCase() === userType) {
                isExpectedType = true
                return
            }
        }

        console.log(isExpectedType);

        res.status(200).send()
    } catch (error) {
        res.status(statusCode).send({message: error.message})
    }
})

const server = app.listen(3003, () => {
    if (server) {
        console.log('[ Server ] listing in port 3003 at http://localhost:3003');
    }
})