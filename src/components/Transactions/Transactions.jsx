import { TransactionHistory } from "./TransactionHistory";
import transactions from '../../data/transactions.json'

export function Transactions () {
    return (
        <TransactionHistory transactions={transactions}/>
    )
}