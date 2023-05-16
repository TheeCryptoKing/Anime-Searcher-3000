import "../stylesheets/AnimeCard.css";
import Modal from './Modal';

function AnimeCard({ image, name, anime, setModalStuff }) {
  
  function updateModal() {
    setModalStuff(anime)
  }
  
  
  return (

    <div className="anime-card">
      <img onClick={updateModal} src={image} alt={name}></img>
      <h5>{name}</h5>
      <button className="fav-button">❤️</button>
    </div>
  );
}

export default AnimeCard;