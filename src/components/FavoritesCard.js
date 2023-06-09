import { Link } from "react-router-dom";
import { useState } from "react";

import "../stylesheets/AnimeCard.css";
import "../stylesheets/index.css";

function FavoritesCard({
  image,
  name,
  anime,
  setModalStuff,
  setShow,
  updateState,
}) {
  const [ hover, setHover ] = useState("anime-card");

  function updateModal() {
    setModalStuff(anime);
    setShow(true);
  }

  function handleDelete() {
    fetch(`https://anime-searcher-3000.onrender.com/favorites/${anime.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        updateState(anime.id);
      });
  }

  function handleMouseOver() {
    setHover("anime-card-hover");
  }

  function handleMouseLeave() {
    setHover("anime-card");
  }

  return (
    <div
      className={hover}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img onClick={updateModal} src={image} alt={name}></img>
      <h5>{name}</h5>
      <button onClick={handleDelete} className="fav-button">
        🗑️
      </button>
      <button className="link">
        <Link to="/Fanfics" state={anime} className="">
          Write a Fanfic
        </Link>
      </button>
    </div>
  );
}

export default FavoritesCard;
