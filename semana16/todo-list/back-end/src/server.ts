import express from 'express';
import cors from 'cors'
import Router from './routers/default.router'

const server = express()
server.use(express.json())
server.use(cors())
server.use(Router)

const app = server.listen(3003, () => {
    if (app) {
        console.log('[ server ] listing at port 3003 on http://localhost:3003');   
    } else {
        console.log('[ server ] not started!');      
    }
})