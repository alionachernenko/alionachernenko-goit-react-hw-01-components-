import PropTypes from 'prop-types';
import { StatsList, Stat, StatName, Quantity } from './User.styled';

export function Stats ({followers, views, likes}) {
    return (
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
    )
}

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}