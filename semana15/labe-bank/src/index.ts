import express, {Request, Response} from 'express'
import cors from 'cors'
import { clients } from './db-data'
import { client } from './model/client'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/clients', (req: Request, res: Response) => {
    try {
        const newClient: client = req.body.client

        console.log(newClient);

        res.status(200).send()
    } catch (error) {
        res.status(400).send({ message: error.message})   
    }
})

const server = app.listen(3003, () => {
    if (server) {
        console.log('[\x1b[32mServer\x1b[0m] listening on port 3003 at http://localhost:3003');
    }
})