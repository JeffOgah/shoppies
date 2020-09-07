import React from 'react';
import Search from './components/Search'
import './App.css';

console.log(process.env.REACT_APP_OMDB_API_KEY)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>The Shoppies</h1>
        <Search />
      </header>
    </div>
  );
}

export default App;
