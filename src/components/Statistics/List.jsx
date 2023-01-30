import css from './Statistics.module.css'
import PropTypes from 'prop-types';


export function List ({stats}) {
    return (
        <ul className={css.statList}>
            {stats.map(stat => 
                (
                    <li key={stat.id} className={css.item} style={{
                        backgroundColor: getRandomHexColor(),
                      }}>
                        <span  className={css.lable}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
        </ul>
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

