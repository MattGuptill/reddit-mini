import Moment from 'react-moment'

export function PostTime({time}) {

    return <p className="post-time">{Moment.unix(time.created).fromNow()}</p>
}