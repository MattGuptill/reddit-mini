import moment from 'moment';
import { MarkdownText } from './MarkdownText';

export function Comments(comment) {
    return (
        <div className='comments'>
            <p className='comment-author'>{comment.author}</p>
            <span>{moment.unix(comment.created).fromNow()}</span>
            <MarkdownText body={comment.body} />
        </div>
    )
}