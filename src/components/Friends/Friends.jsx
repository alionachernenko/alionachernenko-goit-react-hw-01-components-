import { FriendList } from "./FriendList";
import friends from '../../data/friends.json'
import css from './Friends.module.css'

export function Friends () {
    return(
        <FriendList friends={friends}/>
    )
}