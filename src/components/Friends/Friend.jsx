import css from './Friends.module.css'
import PropTypes from 'prop-types';

export function Friend ({status, avatar, name}) {
    return (
        <li className={css.item}>
            <span className={status === true ? css.online : css.offline}> </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

Friend.propTypes = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}