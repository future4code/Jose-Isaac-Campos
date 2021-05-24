import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

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

app.get('/users/search', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        if (!req.query.type) {
            throw new Error('This endpoint expects a query type!')
        }

        const type = req.query.type as string
        
        const result = users.filter((user) => {
            return user.type === type.toUpperCase()
        })

        if (!result.length) {
            throw new Error('users type not found!')
        }

        res.status(200).send(result)
    } catch (error) {
        res.status(statusCode).send({ message: error.message})
    }
})

const server = app.listen(3003, () => {
    if (server) {
        console.log('[ Server ] listing in port 3003 at http://localhost:3003');   
    }
})