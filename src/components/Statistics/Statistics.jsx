import { Title } from "./Title";
import { List } from "./List";
import stats from '../../data/data.json'
import css from './Statistics.module.css'

export function Statistics () {
    return (
        <section className={css.statistics}>
            <Title title='Upload stats'/>
            <List stats={stats}/>
        </section>
    )
}