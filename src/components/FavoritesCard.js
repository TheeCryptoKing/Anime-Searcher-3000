import { Link } from "react-router-dom";

import "../stylesheets/AnimeCard.css";
import "../stylesheets/AnimeCard.css";


function FavoritesCard({
  image,
  name,
  anime,
  setModalStuff,
  setShow,
  updateState,
  passDown
}) {

  function updateModal() {
    setModalStuff(anime);
    setShow(true);
  }

  function handleDelete() {
    fetch(`http://localhost:3001/favorites/${anime.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        updateState(anime.id);
      });
  }

  return (
    <div className="anime-card">
      <img onClick={updateModal} src={image} alt={name}></img>
      <h5>{name}</h5>
      <button onClick={handleDelete} className="fav-button">
        🗑️
      </button>

      <button className='link'>
        <Link to="/Fanfics" state={anime}>Wewowwoo</Link>
      </button>
    </div>
  );
}

export default FavoritesCard;
