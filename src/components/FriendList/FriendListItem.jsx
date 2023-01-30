import PropTypes from 'prop-types';

import { Item, Status, Name, Avatar} from './FriendList.styled';

export function FriendListItem ({avatar, name, isOnline}) {
    return (
        <Item>
            <Status status={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}