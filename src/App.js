import React from 'react';

import './App.css';
import Article from './Components/Article/Article'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <input type="text"></input>
          <h1>REDDIT MINI</h1>
          <button>press me</button>
        </div>
      </header>
      <main className="main-container">
        <Article />
      </main>
    </div>
  );
}

export default App;
