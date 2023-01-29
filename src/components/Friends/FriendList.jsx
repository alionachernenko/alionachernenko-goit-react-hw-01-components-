import { Friend } from "./Friend"
import css from './Friends.module.css'
import PropTypes from 'prop-types';

export function FriendList ({friends}) {
    return (
        <ul className={css.friendsList}> 
            {friends.map(({id, isOnline, avatar, name}) => (
                <Friend key={id} status={isOnline} avatar={avatar} name={name}/>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
}