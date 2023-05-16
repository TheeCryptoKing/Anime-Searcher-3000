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
    fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=10')
      .then((res) => res.json())
      .then((res) => {
        setTopAnimes(res.data)
      })
      .catch(error => alert(error))

    fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=10')
      .then((res) => res.json())
      .then((res) => {
        setNewAnimes(res.data)
      })
      .catch(error => alert(error))
  }

  console.log(topAnimes, newAnimes);

  return (
    
      <div className="App">
        {/* <header className="App-header">
          <Navbar />
        </header> */}
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