import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import SearchResults from './Components/SearchResults/SearchResults';
import { Routes, Route } from 'react-router-dom';
import { Subreddit } from './Components/Subreddit/Subreddit';
import { TopSubreddits } from './Components/TopSubreddits/TopSubreddits';

function App() {
  return (
   <div>
    <Header />
    <main>
      <Routes>        
        <Route path='/' element={<Subreddit />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/:subreddit' element={<Subreddit />} />
      </Routes>
      <div className='side-menu'>
        <TopSubreddits />
      </div>
    </main>
   </div>
  );
}

export default App;
