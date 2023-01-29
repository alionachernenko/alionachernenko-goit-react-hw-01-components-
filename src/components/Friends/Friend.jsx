import css from './Friends.module.css'

export function Friend ({id, status, avatar, name}) {
    return (
        <li key={id} className={css.item}>
            <span className={status === true ? css.online : css.offline}> </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}