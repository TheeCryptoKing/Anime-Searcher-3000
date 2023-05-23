import { useState } from "react";

import CardContainer from "./CardContainer";
import Navbar from "./Navbar";
import Modal from "./Modal";
import "../stylesheets/Home.css";
import "../stylesheets/index.css"

function Home({ topAnimes, newAnimes }) {
  const [ modalStuff, setModalStuff ] = useState([]);
  const [ show, setShow ] = useState(false);

  return (
    <>
      <Navbar />
      <div className="home-body">
        <div className="top-animes">
          <h3 className="div-title">
            Tσρ Aɳιɱҽ'ʂ Ⴆყ Pσρυʅαɾιƚყ:
          </h3>
          <CardContainer
            setShow={setShow}
            setModalStuff={setModalStuff}
            animeList={topAnimes}
          />
        </div>
        <div className="new-animes">
          <h3 className="div-title">
            Tσρ Nҽɯҽʂƚ Aɳιɱҽʂ:
          </h3>
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
  );
}

export default Home;
