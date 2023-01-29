import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export function Title ({title}) {
    if(title) return (
         <h2 className={css.title}>{title}</h2>
        )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}