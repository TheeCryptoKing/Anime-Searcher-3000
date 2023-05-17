import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FavoritesCard from "./FavoritesCard";
import "../stylesheets/FavoritesPage.css";
import Modal from "./Modal";

function FavoritesPage() {
  const [favAnimes, setFavAnimes] = useState([]);
  const [modalStuff, setModalStuff] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    fetch("http://localhost:3001/favorites")
      .then((res) => res.json())
      .then((res) => {
        setFavAnimes(res);
        console.log(res);
      });
  }

function updateState (id) {
    const deletedArray = favAnimes.filter((anime) =>
       anime.id !== id)
       setFavAnimes(deletedArray)
}

  const favAnimesArray = favAnimes.map((anime) => {
    console.log(anime)
    return (
      <FavoritesCard
        key={anime.id}
        name={anime.title}
        image={anime.anime.images.jpg.image_url}
        anime={anime}
        updateState={updateState}
        setModalStuff={setModalStuff}
        setShow={setShow}
        
      />
    );
  });

  return (
    <div className="FavoritesPage">
      <header className="nav-header">
        <Navbar />
      </header>
      <div className="FavoritesPage-body">
        <h1>Favorites Page</h1>
        <div className="fav-animes">{favAnimesArray}</div>
        <Modal onClose={() => setShow(false)} show={show} modalStuff={modalStuff} />
      </div>
    </div>
  );
}

export default FavoritesPage;
