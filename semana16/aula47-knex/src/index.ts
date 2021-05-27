import { countActorByGender } from './functions/countActorByGender';
import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { getActorByName } from "./functions/getActorByName";
import { updateSalary } from './functions/updateSalary';
import { avgSalary } from './functions/avgSalary';
import { getActorByIdController } from './endpoints/getActorByID';
import { countByGenderController } from './endpoints/countByGenderController';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get('/actor/:id', getActorByIdController)
app.get('/actor', countByGenderController)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});