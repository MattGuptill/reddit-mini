import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';


import fetchResults from '../../Features/searchSlice';

export default function SearchResults() {
    let results = useSelector(state => state.search.results);
    let isLoading = useSelector(state => state.search.isLoading);
    let error = useSelector(state => state.search.hasError);
    let [searchParams] = useSearchParams();
    let term = searchparams.get('q');
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResults(term))
    }, [dispatch, error, term]);

    return (
        error ? <p className='error'>Cannot load the posts. Try to check your internet connection or change the url and reload the page.</p> :
        <div className='subreddit-posts'>
                {isLoading ? <span className='loading'>Loading...</span> :
                results.map(post => {
                        return <Card key={post.id} post={post}/>
                    })}
        </div>
    )

}