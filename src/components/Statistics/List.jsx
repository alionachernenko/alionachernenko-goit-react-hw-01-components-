import PropTypes from 'prop-types';
import { StatisticsList, Item } from './Statistics.styled';

export function List ({stats}) {
    return (
        <StatisticsList>
            {stats.map(stat => 
                (
                    <Item key={stat.id} style={{
                        backgroundColor: getRandomHexColor(),
                      }}>
                        <span>{stat.label}</span>
                        <span>{stat.percentage}%</span>
                    </Item>
                ))}
        </StatisticsList>
    )
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


List.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}

