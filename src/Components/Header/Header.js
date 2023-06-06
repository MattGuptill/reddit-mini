import React from 'react';
import './header.css';
import { Link, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm, clearTerm } from '../../Features/searchSlice';
import { FaReddit } from 'react-icons/fa';
import { TopSubreddits } from '../TopSubreddits/TopSubreddits';
import { VscListSelection} from 'react-icons/vsc';



export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    let term = useSelector(state => state.search.term);
    let dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();
    let handleTermChange = e => dispatch(setTerm(e.target.value));
    let goToResults = (e) => {
        e.preventDefault();
        navigate({
            pathname: 'search',
            search: `?${createSearchParams({
                q: term
            })}`
        });
    }


    useEffect(() => {
        if (location.pathname !== '/search') {
            dispatch(clearTerm());
        }
        
    }, [location, dispatch]);

   

    console.log(useState())
   
    
    return (
        <header>
        <div className='nav'>
            <Link style={{textDectoration: 'none'}} to='/'>
                <span className='reddit-logo'><FaReddit size={40} /></span>
            </Link>
            <form className='search-bar' onSubmit={goToResults}>
                <label className='search-label' htmlFor='search-input' />
                <input id='search-input' value={term} type='search' placeholder='Search Reddit' onChange={handleTermChange} />
            </form>  

            <button className='hamburger' onClick={() => {setIsNavOpen(!isNavOpen)}}>
                <VscListSelection size={28} />
 
            </button>

            <div className={isNavOpen ? 'nav-menu expanded' : 'nav-menu'} >
                    <TopSubreddits />
            </div>
        </div>
    </header>
    )
}