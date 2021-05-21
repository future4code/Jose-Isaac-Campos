import { transaction } from "./transaction";

export type account = {
    balance: number,
    extract: transaction[]
}