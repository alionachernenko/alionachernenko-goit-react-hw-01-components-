import css from './Statistics.module.css'

export function Title ({title}) {
    if(title) return (
         <h2 className={css.title}>{title}</h2>
        )
}