import "../stylesheets/AnimeCard.css";
import Modal from "./Modal";


function AnimeCard({ image, name, anime, setModalStuff, setShow }) {
  

  function updateModal() {
    setModalStuff(anime);
    setShow(true);
  }

  function handlePost() {
    fetch("http://localhost:3001/favorites", {
      method: "POST",
      body: JSON.stringify({
        anime,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    
  }


  return (
    <div className="anime-card">
      <img onClick={updateModal} src={image} alt={name}></img>
      <h5>{name}</h5>
      <button onClick={handlePost} className="fav-button">
        ❤️
      </button>
    </div>
  );
}

export default AnimeCard;
