import React, {useState} from 'react';
import "../stylesheets/Home.css";
import CardContainer from "./CardContainer";
import Navbar from "./Navbar";
import Modal from "./Modal";

function Home({ topAnimes, newAnimes }) {

const [modalStuff, setModalStuff] = useState([])
const [show, setShow] = useState(false)


return (
  <div>
      <Navbar />
    <div className="home-body">
      <div className="top-animes">
        <h3 className="title" style={{ color:'cyan' }} >Tσρ 10 Aɳιɱҽ'ʂ Ⴆყ Pσρυʅαɾιƚყ:</h3>
        <CardContainer setShow={setShow} setModalStuff={setModalStuff} animeList={topAnimes}/>
      </div>
      <div className="new-animes">
        <h3 className="title" style={{ color:'cyan' }} >Tσρ 10 Nҽɯҽʂƚ Aɳιɱҽʂ:</h3>
        <CardContainer setShow={setShow} setModalStuff={setModalStuff} animeList={newAnimes}/>
      </div>


      <Modal onClose={() => setShow(false)} show={show} modalStuff={modalStuff} />

    </div>
  </div>
);
}

export default Home;