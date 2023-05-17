import React, { useState, useEffect } from "react";

import "../stylesheets/index.css"
import "../stylesheets/Home.css";

import CardContainer from "./CardContainer";
import Navbar from "./Navbar";
import Modal from "./Modal";

function Home() {
  const [ topAnimes, setTopAnimes ] = useState([]);
  const [ newAnimes, setNewAnimes ] = useState([]);
  const [ modalStuff, setModalStuff ] = useState([]);
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    homePageFetch();
  }, []);

  function homePageFetch() {
    fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity")
      .then((res) => res.json())
      .then((res) => {
        setTopAnimes(res.data);
      })
      .catch((error) => alert(error));

    fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming")
      .then((res) => res.json())
      .then((res) => {
        setNewAnimes(res.data);
      })
      .catch((error) => alert(error));
  }

  return (
    <>
      <header className="nav-header">
        <Navbar />
      </header>
      <div className="home-body">
        <div className="top-animes">
          <h3 className="title">Top 10 Animes by Popularity:</h3>
          <CardContainer
            setShow={setShow}
            setModalStuff={setModalStuff}
            animeList={topAnimes}
          />
        </div>
        <div className="new-animes">
          <h3 className="title">Top 10 Newest Animes:</h3>
          <CardContainer
            setShow={setShow}
            setModalStuff={setModalStuff}
            animeList={newAnimes}
          />
        </div>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          modalStuff={modalStuff}
        />
      </div>
    </>
  )
}

export default Home;
