import { useState } from "react";
import AnimeCard from "./AnimeCard.js";
import "../stylesheets/CardContainer.css";

function CardContainer({ animeList }) {
  const [cardIndex, setCardIndex] = useState(0);
  const cardDisplay = animeList.slice(cardIndex, cardIndex + 10).map((anime) => {
    return (
      <AnimeCard
        key={anime.title}
        image={anime.images.jpg.image_url}
        name={anime.title}
      />
    );
  });
  function handleClickMore() {
    setCardIndex((CardIndex) => (CardIndex + 10) % animeList.length);
  }
  return (
    <div className="card-container">
      {cardDisplay}
      <button className="show-more" onClick={handleClickMore}>
      ➔
      </button>
    </div>
  );
}
export default CardContainer;