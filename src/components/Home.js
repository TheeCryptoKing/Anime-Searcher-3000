import React, {useState} from 'react';
import "../stylesheets/Home.css";
import CardContainer from "./CardConatiner";
import Navbar from "./Navbar";
import Modal from "./Modal";

function Home({ topAnimes, newAnimes }) {

const [modalStuff, setModalStuff] = useState([])
const [show, setShow] = useState(false)


  return (
    <div>
      <header className="nav-header">
        <Navbar />
      </header>
      <div className="home-body">
        <div className="top-animes">
          <h3 className="title">Top 10 Animes by Popularity:</h3>
          <CardContainer setShow={setShow} setModalStuff={setModalStuff} animeList={topAnimes}/>
        </div>
        <div className="new-animes">
          <h3 className="title">Top 10 Newest Animes:</h3>
          <CardContainer setModalStuff={setModalStuff} animeList={newAnimes}/>
        </div>


        <Modal onClose={() => setShow(false)} show={show} modalStuff={modalStuff} />

      </div>
    </div>
  );
}

export default Home;