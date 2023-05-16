import React, { useState, useEffect } from "react";
import "../stylesheets/App.css";

import Navbar from "./Navbar";
import Home from "./Home";


function App() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [newAnimes, setNewAnimes] = useState([]);

  useEffect(() => {
    homePageFetch();
  }, []);

  function homePageFetch() {
    fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity')
      .then((res) => res.json())
      .then((res) => {
        setTopAnimes(res.data)
      })
      .catch(error => alert(error))

    fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming')
      .then((res) => res.json())
      .then((res) => {
        setNewAnimes(res.data)
      })
      .catch(error => alert(error))
  }

  console.log(topAnimes, newAnimes);

  return (
    
      <div className="App">
        <div className="App-body">
          <Home 
            topAnimes={topAnimes} 
            newAnimes={newAnimes}
          />
        </div>
      </div>
  );
}

export default App;