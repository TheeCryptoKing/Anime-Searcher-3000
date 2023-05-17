import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FavoritesCard from "./FavoritesCard";
import "../stylesheets/FavoritesPage.css";

function FavoritesPage() {
  const [favAnimes, setFavAnimes] = useState([]);

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
    return (
      <FavoritesCard
        key={anime.id}
        name={anime.anime.title}
        image={anime.anime.images.jpg.image_url}
        anime={anime}
        updateState={updateState}
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
      </div>
    </div>
  );
}

export default FavoritesPage;
