import PropTypes from 'prop-types';
import { TitleContent } from './Statistics.styled';

export function Title ({title}) {
    if(title) return (
         <TitleContent>{title}</TitleContent>
        )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}