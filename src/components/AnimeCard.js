import "../stylesheets/AnimeCard.css";
import Modal from './Modal';

function AnimeCard({ image, name, anime, setModalStuff, setShow }) {
  
  function updateModal() {
    setModalStuff(anime)
  }
  
  function handleClick() {
    setShow(true)
    updateModal()
  }
  
  return (

    <div className="anime-card">
      <img onClick={handleClick} src={image} alt={name}></img>
      <h5>{name}</h5>
      <button className="fav-button">❤️</button>
    </div>
  );
}

export default AnimeCard;