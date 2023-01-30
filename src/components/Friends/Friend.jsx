import PropTypes from 'prop-types';
import { FriendItem, Status, Name} from './Friends.styled';

export function Friend ({status, avatar, name}) {
    return (
        <FriendItem>
            <Status status={status}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendItem>
    )
}

Friend.propTypes = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}