import { Friend } from "./Friend"
import PropTypes from 'prop-types';
import { FriendsList } from "./Friends.styled";

export function FriendList ({friends}) {
    return (
        <FriendsList>
            {friends.map(({id, isOnline, avatar, name}) => (
                <Friend key={id} status={isOnline} avatar={avatar} name={name}/>
            ))}
        </FriendsList>
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