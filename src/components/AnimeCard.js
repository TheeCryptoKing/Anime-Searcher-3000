import { useState } from 'react'
import "../stylesheets/index.css";
import "../stylesheets/AnimeCard.css";

function AnimeCard({ image, name, anime, setModalStuff, setShow }) {
  const [ hover, setHover ] = useState("anime-card")
  
  function updateModal() {
    setModalStuff(anime);
    setShow(true);
  }

  function handlePost() {
    console.log(anime)
    fetch("http://localhost:3001/favorites", {
      method: "POST",
      body: JSON.stringify(
        anime
      ),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

function handleMouseOver () {
  setHover('anime-card-hover')
}

function handleMouseLeave () {
  setHover('anime-card')
}

  return (
    <div 
      className={hover}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        onClick={updateModal} 
        src={image} 
        alt={name}
      ></img>
      <h5>{name}</h5>
      <button onClick={handlePost} className="fav-button">
        ❤️
      </button>
    </div>
  );
}

export default AnimeCard;
