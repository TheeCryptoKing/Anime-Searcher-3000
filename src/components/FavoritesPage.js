import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import FavoritesCard from "./FavoritesCard";
import Modal from "./Modal";
import "../stylesheets/FavoritesPage.css";
import "../stylesheets/index.css"

function FavoritesPage() {
  const [favAnimes, setFavAnimes] = useState([]);
  const [modalStuff, setModalStuff] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    fetch("http://localhost:3001/favorites")
      .then((res) => res.json())
      .then((res) => {
        setFavAnimes(res);
        console.log(res);
      })
      .catch((error) => alert(error));
  }

  const favAnimesArray = favAnimes.map((anime) => {
    return (
      <FavoritesCard
        key={anime.id}
        name={anime.title}
        image={anime.images.jpg.image_url}
        anime={anime}
        updateState={updateState}
        setModalStuff={setModalStuff}
        setShow={setShow}
      />
    );
  });
  
  function updateState(id) {
    const deletedArray = favAnimes.filter((anime) => anime.id !== id);
    setFavAnimes(deletedArray);
  }

  return (
    <div className="FavoritesPage">
        <Navbar />
      <div className="Favorites-body">
        <h1 className="title">Favorites Page</h1>
        <div className="fav-animes">{favAnimesArray}</div>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          modalStuff={modalStuff}
          
        />
      </div>
    </div>
  );
}

export default FavoritesPage;
