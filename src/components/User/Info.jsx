import css from './User.module.css'


export function Info ({username, tag, location, avatar}) {
    return (
        <div className={css.description}>
            <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    )
}