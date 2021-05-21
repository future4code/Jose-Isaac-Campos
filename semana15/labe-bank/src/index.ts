import express, {Request, Response} from 'express'
import cors from 'cors'
import { clients } from './db-data'
import { client } from './model/client'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/clients', (req: Request, res: Response) => {
    res.status(200).send(clients)
})

app.post('/clients', (req: Request, res: Response) => {
    try {
        const newClient: client = req.body.client

        if (!newClient) {
            throw new Error(`the request body came empty`)
        }

        if (isNaN(Number(newClient.age)) || !newClient.age) {
            throw new Error(`age is not a number`)
        }

        newClient.age = Number(newClient.age)

        if (newClient.age < 18) {
            throw new Error(`only adults can open a new account`)
        }

        const cpfIsInUse = clients.find(client => client.cpf === newClient.cpf)

        if (cpfIsInUse) {
            throw new Error(`The supplied cpf is already in use`)
        }

        console.log(newClient);

        clients.push(newClient)
        res.status(200).send({message: 'Success', client: newClient})
    } catch (error) {
        res.status(400).send({ message: error.message})   
    }
})

const server = app.listen(3003, () => {
    if (server) {
        console.log('[\x1b[32mServer\x1b[0m] listening on port 3003 at http://localhost:3003');
    }
})