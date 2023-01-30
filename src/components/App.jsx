import {Profile, Statistics, FriendList, TransactionHistory} from 'components'

import userData from '../data/user.json'
import statisticsData from '../data/data.json'
import friendsData from '../data/friends.json'
import transactionsData from '../data/transactions.json'

export const App = () => {
  return(
    <>
    <Profile 
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
    <Statistics title='Upload stats' stats={statisticsData} />
    <FriendList friends={friendsData}/>
    <TransactionHistory items={transactionsData}/>
    </>
  )
};
