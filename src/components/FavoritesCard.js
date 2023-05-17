import "../stylesheets/AnimeCard.css";
import Modal from "./Modal";
import '../stylesheets/AnimeCard.css'

function FavoritesCard({ image, name, anime, setModalStuff, updateState }) {
  function updateModal() {
    setModalStuff(anime);
  }

  function handleDelete() {
    fetch(`http://localhost:3001/favorites/${anime.id}`, {
      method: "DELETE",})
      .then(res => res.json())
      .then(() => {
        updateState(anime.id)
      })
    };
  

  return (
    <div className="anime-card">
      <img onClick={updateModal} src={image} alt={name}></img>
      <h5>{name}</h5>
      <button onClick={handleDelete} className="fav-button">
      🗑️ 
      </button>
    </div>
  );
}

export default FavoritesCard;
