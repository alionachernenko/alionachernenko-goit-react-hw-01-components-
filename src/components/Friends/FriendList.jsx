import { Friend } from "./Friend"
import css from './Friends.module.css'

export function FriendList ({friends}) {
    return (
        <ul className={css.friendsList}> 
            {friends.map(({id, isOnline, avatar, name}) => (
                <Friend key={id} status={isOnline} avatar={avatar} name={name}/>
            ))}
        </ul>
    )
}