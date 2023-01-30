import { Info } from './Info'
import { Stats } from './Stats'
import data from '../../data/user.json'
import { Profile } from './User.styled'

export function User () {
   return (
    <Profile>
        <Info 
            username={data.username}
            tag={data.tag}
            location={data.location}
            avatar={data.avatar}
        />
        <Stats 
            followers={data.stats.followers}
            views={data.stats.views}
            likes={data.stats.views}
        />
    </Profile>
)
}