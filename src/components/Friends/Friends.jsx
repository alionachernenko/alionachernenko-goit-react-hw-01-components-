import { FriendList } from "./FriendList";
import friends from '../../data/friends.json'


export function Friends () {
    return(
        <FriendList friends={friends}/>
    )
}