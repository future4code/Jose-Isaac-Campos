import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/countries/all', (req: Request, res: Response) => {
    res.status(200).send(countries)
})

app.get('/countries/search', (req: Request, res: Response) => {
    const {name, capital, continent} = req.query
    let statusCode: number = 400
    let result: country[] = countries
        
    try {
        if (!(name || capital || continent)) {
            throw new Error('a valid query filter is expected! {name, capital, continent}')
        }

        if (name) {
            result = result.filter(country => country.name.includes(name as string))
        }

        if (capital) {
            result = result.filter(country => country.capital.includes(capital as string))
        }

        if (continent) {
            result = result.filter(country => country.continent.includes(continent as string))
        }

        if (result.length === 0) {
            statusCode = 404
            throw new Error('Not found!')
        }

        res.status(200).send(result)
        
    } catch (error) {
        res.status(statusCode).send({message: error.message})
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    let statusCode = 401
    try {
        if (isNaN(parseInt(req.params.id))) {
            throw new Error('a numeric id is expected!')
        }

        const countrie = countries.find(countrie => countrie.id === parseInt(req.params.id))

        if (!countrie) {
            statusCode = 404
            throw new Error('Country not found for given id')
        }
        
        res.status(200).send(countrie)
    } catch (error) {
        res.status(statusCode).send({message: error.message})
    }
})

app.put('/countries/edit/:id', (req: Request, res: Response) => {
    let statusCode = 400
    try {
        if (isNaN(parseInt(req.params.id))) {
            throw new Error('a numeric id is expected!')
        }

        if (!req.body.name || req.body.name[0] === ' ') {
            throw new Error('The name of the country is expected in the body of the request')
        }

        if (!req.body.capital || req.body.capital[0] === ' ') {
            throw new Error('The capital of the country is expected in the body of the request')
        }

        let countrie = countries.find(countrie => countrie.id === parseInt(req.params.id))
        
        if (!countrie) {
            statusCode = 404
            throw new Error('Country Not found!')
        }

        countrie.name = req.body.name,
        countrie.capital = req.body.capital

        res.status(200).send(countrie)
    } catch (error) {
        res.status(statusCode).send({message: error.message})
    }
})

const server = app.listen(3003, () => {
    if (server) {
        console.log('[SERVER] is running in http://localhost:3003');
    } else {
        console.error(`Failure upon starting server.`);
    }
})