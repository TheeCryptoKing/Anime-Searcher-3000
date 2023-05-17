import { useState } from "react";

import AnimeCard from "./AnimeCard.js";
import "../stylesheets/index.css"
import "../stylesheets/CardContainer.css";

function CardContainer({ animeList, setShow, setModalStuff }) {
  const [cardIndex, setCardIndex] = useState(0);
  const cardDisplay = animeList
    .slice(cardIndex, cardIndex + 10)
    .map((anime) => {
      return (
        <AnimeCard
          key={anime.title}
          name={anime.title}
          image={anime.images.jpg.image_url}
          anime={anime}
          setModalStuff={setModalStuff}
          setShow={setShow}
        />
      );
    });

  function handleClickMore() {
    setCardIndex((cardIndex) => 
      (cardIndex + 10 >= animeList.length ? 0 : cardIndex + 10));
  }

  function handleClickLess() {
    setCardIndex((cardIndex) => 
      (cardIndex - 10 >= 0 ? cardIndex - 10 : 15));
  }

  return (
    <div className="card-container">
      <button className="show-more" onClick={handleClickLess}>
        ⏪
      </button>
      {cardDisplay}
      <button className="show-more" onClick={handleClickMore}>
        ⏩
      </button>
    </div>
  );
}
export default CardContainer;
