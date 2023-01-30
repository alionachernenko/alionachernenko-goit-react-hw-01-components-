import { Title } from "./Title";
import { List } from "./List";
import stats from '../../data/data.json'

import { StatisticsSection } from "./Statistics.styled";

export function Statistics () {
    return (
        <StatisticsSection>
            <Title title='Upload stats'/>
            <List stats={stats}/>
        </StatisticsSection>
    )
}