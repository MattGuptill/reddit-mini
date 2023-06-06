import React from 'react';
import moment from 'moment';
import '../Card/card.css';
import { VscComment, VscArrowUp, VscArrowDown } from "react-icons/vsc";
import { Comments } from '../Comments/Comments';
import { Link } from 'react-router-dom';


export function Card({ post, showSubreddit }) {

    let content;
    if (post.post_hint === 'image') {
        content = <div className='post-image'>
            <img src={post.url} alt='media preview' />
        </div>
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
        <a href={post.url} target='_blank' rel='noreferrer' ><img src={post.thumbnail} alt='media preview' /></a> :
        <a className='post-link' href={post.url} target='_blank' rel='noreferrer' >{post.url}</a>
    }
    let thumbnailClass = post.post_hint !== 'image' && post.thumbnail && post.thumbnail !== 'default' ?
        'thumbnail-post' : '';

    
    return (
        <div className='reddit-card'>
            
                <div className='post-score'>
                    <span className='up'><VscArrowUp size={28} /></span>
                    <span className='score'>{post.score}</span>
                    <span className='down'><VscArrowDown size={28} /></span>
                </div>
            <div className='card-contents'>
                <div className='card-top'>
                        {showSubreddit && <Link className='subreddit-link' to={`/${post.subreddit}`}>{post.subreddit}</Link>}
                        <span className='post-time'>{moment.unix(post.created_utc).fromNow()}</span>
                </div>


                <div className={thumbnailClass}>
                        <h2 className='post-title'>{post.title}</h2>
                        {post.is_self || content}
                </div>
                <div className='post-panel'>
                
                    <div className='comments'>
                        <span className='comments-icon'><VscComment size={25}/></span>
                        <span>{post.num_comments}</span>
                    </div>
                    <div>
                        <Comments key={post.id}  />
                    </div>
                </div>
            </div>
        </div>
    );
}