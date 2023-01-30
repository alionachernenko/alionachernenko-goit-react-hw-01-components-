import { User } from "./User/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./Friends/Friends";
import { Transactions } from "./Transactions/Transactions";


export const App = () => {
  return(
    <>
    <User/>
    <Statistics/>
    <Friends/>
    <Transactions/>
    </>
  )
};
