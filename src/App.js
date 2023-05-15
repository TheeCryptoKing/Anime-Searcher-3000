import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const [topAnime, setTopAnime] = useState([])

 const getData = async() => {
  fetch(`https://api.jikan.moe/v4/top/anime/bypopularity/1/10`)
    .then(res => res.json())
    .then(data => setTopAnime(data))
 }

 useEffect(() => {
  getData()
 }, [])

console.log(topAnime)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >HI
        </a>
      </header>
    </div>
  );
}

export default App;
