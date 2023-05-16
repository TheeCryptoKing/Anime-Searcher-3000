import "../stylesheets/Home.css";
import AnimeCard from "./AnimeCard";
import Navbar from "./Navbar";

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
    <div>
      <header className="nav-header">
        <Navbar />
      </header>
      <div className="home-body">
        <div className="top-animes">
          <h3 className="title">Top 10 Animes by Popularity:</h3>
          <div className="card-container">{topAnimesArray}</div>
        </div>
        <div className="new-animes">
          <h3 className="title">Top 10 Newest Animes:</h3>
          <div className="card-container">{newAnimesArray}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;