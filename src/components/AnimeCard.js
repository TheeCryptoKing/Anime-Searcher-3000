import "../stylesheets/AnimeCard.css";

function AnimeCard({ image, name }) {
  return (
    <div>
      <img src={image} alt={name}></img>
      <h5>{name}</h5>
    </div>
  );
}

export default AnimeCard;