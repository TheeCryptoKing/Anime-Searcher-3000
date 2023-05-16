import "../stylesheets/Home.css";
import AnimeCard from "./AnimeCard";

function Home({ topAnimes, newAnimes }) {
  const topAnimesArray = topAnimes.map((anime) => {
    return (
      <AnimeCard
        key={anime.title}
        image={anime.images.jpg.image_url}
        name={anime.title}
      />
    );
  });

  const newAnimesArray = newAnimes.map((anime) => {
    return (
      <AnimeCard
        key={anime.title}
        image={anime.images.jpg.image_url}
        name={anime.title}
      />
    );
  });

  return (
    <>
      <div className="top-animes">
        <h3 className="title">Top 10 Animes by Popularity:</h3>
        <div className="card-container">{topAnimesArray}</div>
      </div>
      <div className="new-animes">
        <h3 className="title">Top 10 Newest Animes:</h3>
        <div className="card-container">{newAnimesArray}</div>
      </div>
    </>
  );
}

export default Home;