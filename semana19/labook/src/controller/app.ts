import express, {Express} from 'express';
import cors from 'cors';
import { migrations } from '../data/migrations';

export const app: Express = express();

app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    migrations()
    console.log('[SERVER] listening on http://localhost:3003');  
})
