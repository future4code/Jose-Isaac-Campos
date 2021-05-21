import express, {Request, Response} from 'express'
import cors from 'cors'
import { clients } from './db-data'
import { client } from './model/client'
import { transaction } from './model/transaction'

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

app.get('/clients/account/:cpf/balance', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        const cpf = req.params.cpf

        if (!cpf) {
            throw new Error('cpf not provided')
        }

        const client = clients.find(client => client.cpf === cpf)
        
        if (!client) {
            statusCode = 404
            throw new Error('no account was found for the given cpf')
        }

        res.status(200).send({balance: client.account.balance})
    } catch (error) {
        res.status(statusCode).send({ message: error.message})
    }
})

app.put('/clients/account/:cpf/balance', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        const cpf = req.params.cpf
        const name = req.body.name
        const balance = req.body.balance

        if (!cpf) {
            throw new Error('cpf not provided')
        }

        if (!name) {
            throw new Error('name not provided')
        }

        if (!balance) {
            throw new Error('balance not provided')
        }

        if (isNaN(Number(balance))) {
            throw new Error('balance is not a number')
        }

        if (balance < 1) {
            throw new Error('the estimated amount for the balance is not positive')
        } 

        const client = clients.find(client => client.cpf === cpf)
        
        if (!client) {
            statusCode = 404
            throw new Error('no account was found for the given cpf')
        }

        if (name.toUpperCase() !== client.name.toUpperCase()) {
            throw new Error('the name provided is different from the name registered in the system')
        }

        const newTransaction: transaction = {
            value: Number(balance),
            date: new Date().getTime(),
            description: 'Depósito de dinheiro'
        }

        client.account.balance += Number(balance)
        client.account.extract.push(newTransaction)

        res.status(200).send({message: 'Success', currentBalance: client.account.balance})
    } catch (error) {
        res.status(statusCode).send({ message: error.message})
    }
})

app.post('/clients/account/:cpf/extract', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        const cpf = req.params.cpf
        const purchaseValue = req.body.purchaseValue
        let dueDate = req.body.dueDate
        const description = req.body.description

        if (!cpf) {
            throw new Error('cpf not provided')
        }

        if (!purchaseValue) {
            throw new Error('purchase value not provided')
        }

        if (isNaN(Number(purchaseValue))) {
            throw new Error('purchase value is not a number')
        }

        if (purchaseValue < 1) {
            throw new Error('the purchase value is not positive')
        } 

        if (!dueDate) {
            dueDate = new Date().getTime()
        }

        if (isNaN(Number(dueDate))) {
            throw new Error('the expiration date must be a timestamp')
        }

        if (!description) {
            throw new Error('description not provided')
        }

        const client = clients.find(client => client.cpf === cpf)
        
        if (!client) {
            statusCode = 404
            throw new Error('no account was found for the given cpf')
        }

        const newTransaction: transaction = {
            value: -Number(purchaseValue),
            date: new Date().getTime(),
            dueDate: dueDate,
            description: description
        }

        client.account.extract.push(newTransaction)

        res.status(200).send({message: 'Success', newExtracted: newTransaction})
    } catch (error) {
        res.status(statusCode).send({ message: error.message})
    }
})



const server = app.listen(3003, () => {
    if (server) {
        console.log('[\x1b[32mServer\x1b[0m] listening on port 3003 at http://localhost:3003');
    }
})