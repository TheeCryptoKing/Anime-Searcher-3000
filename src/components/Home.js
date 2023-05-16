import "../stylesheets/Home.css";
import CardContainer from "./CardConatiner";
import Navbar from "./Navbar";

function Home({ topAnimes, newAnimes }) {

  return (
    <div>
      <header className="nav-header">
        <Navbar />
      </header>
      <div className="home-body">
        <div className="top-animes">
          <h3 className="title">Top 10 Animes by Popularity:</h3>
          <CardContainer animeList={topAnimes}/>
        </div>
        <div className="new-animes">
          <h3 className="title">Top 10 Newest Animes:</h3>
          <CardContainer animeList={newAnimes}/>
        </div>
      </div>
    </div>
  );
}

export default Home;