import "../stylesheets/AnimeCard.css";

function AnimeCard({ image, name }) {
  return (
    <div className="anime-card">
      <img src={image} alt={name}></img>
      <h5>{name}</h5>
      <button className="fav-button">❤️</button>
    </div>
  );
}

export default AnimeCard;