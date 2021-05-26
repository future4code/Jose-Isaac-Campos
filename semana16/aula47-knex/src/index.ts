import { countActorByGender } from './controller/countActorByGender';
import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { getActorByName } from "./controller/getActorByName";

const app: Express = express();
app.use(express.json());
app.use(cors());

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
}

(async () => {
    console.log(await countActorByGender("female"))
  })()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});