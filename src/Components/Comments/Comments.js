import React from 'react';
import Moment from 'react-moment';
import { MarkdownText } from './MarkdownText';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../Features/commentsSlice';
import { useEffect } from 'react';
import './comments.css';


export function Comments() {
    

    const comments = useSelector(state => state.comments.comments);
    const isLoading = useSelector(state => state.comments.isLoading);    
    const hasError = useSelector(state => state.comments.hasError);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch]);

    return (
        isLoading || hasError ||
        <div data-testid='comments' className='comments-container'>
            {comments.map(comment => {
                return <div>
                    <p className='comment-author'>{comment.author}</p>
                    <span>{Moment.unix(comment.created).fromNow()}</span>
                    <MarkdownText body={comment.body} /> 
            </div>
            })}
        </div>
        
        
            
       
    )
}