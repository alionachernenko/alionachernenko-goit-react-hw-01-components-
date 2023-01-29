import { Profile } from "./User/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./Friends/Friends";
import { Transactions } from "./Transactions/Transactions";


export const App = () => {
  return(
    <>
    <Profile/>
    <Statistics/>
    <Friends/>
    <Transactions/>
    </>
  )
};
