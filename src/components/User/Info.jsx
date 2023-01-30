import PropTypes from 'prop-types';
import { Description, Avatar, Name, Tag, Location } from './User.styled';

export function Info ({username, tag, location, avatar}) {
    return (
        <Description>
            <Avatar
            src={avatar}
            alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
    )
}

Info.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar:  PropTypes.string.isRequired,
}