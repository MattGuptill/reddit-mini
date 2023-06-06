import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './topSubreddits.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits } from '../../Features/subredditSlice';


export function TopSubreddits() {
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const isLoading = useSelector(state => state.subreddits.isLoading);
    const error = useSelector(state => state.subreddits.error);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

   

    return (
        isLoading || error ||
        <div className='subreddit-menu'>
            <div className='subreddit-links'>
                {subreddits.map(subreddit => {
                    return <NavLink to={`/${subreddit.display_name}`} key={subreddit.id}>
                        {subreddit.icon_img ?
                            <img className='subreddit-icon' src={subreddit.icon_img} alt='icon of the subreddit' /> :
                            <div className='subreddit-icon'></div>}
                            <span>{subreddit.display_name}</span>
                    </NavLink>
                })}
            </div>
        </div>
    )
}