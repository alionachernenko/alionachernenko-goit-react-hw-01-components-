import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/makeRandomColor';

import { StatisticsSection, Title, List, Item, Label, Percentage} from "./Statistics.styled";

export function Statistics ({title, stats}) {
    return (
        <StatisticsSection>
           { title && <Title>{title}</Title>}
            <List>
                {stats.map(({id, label, percentage}) => (
                    <Item key={id} color={getRandomHexColor()}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                ))}
            </List>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
    title: PropTypes.string
}