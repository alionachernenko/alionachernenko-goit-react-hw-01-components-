import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { List } from "./FriendList.styled"


export function FriendList ({friends}) {
    return(
        <List>
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
            ))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}