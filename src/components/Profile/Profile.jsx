import PropTypes from 'prop-types';
import { Description, User, Avatar, Name, Tag, Location, StatsList, Stat, StatName, Quantity} from './Profile.styled'

export function Profile ({username, tag, location, avatar, stats: { followers, views, likes}}) {
   return (
    <User>
        <Description>
            <Avatar
            src={avatar}
            alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <StatsList>
            <Stat>
                <StatName>Followers</StatName>
                <Quantity>{followers}</Quantity>
            </Stat>
            <Stat>
                <StatName>Views</StatName>
                <Quantity>{views}</Quantity>
            </Stat>
            <Stat>
                <StatName>Likes</StatName>
                <Quantity>{likes}</Quantity>
            </Stat>
        </StatsList>
    </User>
)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
}