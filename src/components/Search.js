import { useState } from "react";
import Navbar from "./Navbar";
import AnimeCard from "./AnimeCard";
import "../stylesheets/Search.css";

function Search() {
  const initialForm = {
    name: '',
    rating: '',
    type: '',
    status: ''
  };

  const [searchedAnime, setSearchedAnime] = useState([]);
  const [searchForm, setSearchForm] = useState(initialForm);

  const searchedAnimeArray = searchedAnime.map((anime) => {
    return (
      <AnimeCard
        key={anime.title}
        image={anime.images.jpg.image_url}
        name={anime.title}
      />
    );
  });

  function handleSearch() {
    fetch(
      `https://api.jikan.moe/v4/anime?q=${searchForm.name}&rating=${searchForm.rating}&type=${searchForm.type}&status=${searchForm.status}`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchedAnime(res.data);
        console.log(res.data);
        if (res.data.length === 0) {
          alert("No Results! Refine search and try again");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleChange(e) {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
    setSearchForm(initialForm);
  }

  return (
    <>
      <header className="nav-header">
        <Navbar />
      </header>
      <div className="search-body">
        <h1 className="page-title">Anime Search</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Search for an Anime"
            type="text"
            className="search-field"
            name="name"
            id="name"
            onChange={handleChange}
            value={searchForm.name}
          ></input>
          <select
            name="rating"
            className="search-field"
            onChange={handleChange}
            id="rating"
            value={searchForm.rating}
          >
            <option value="">Rating</option>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg13">PG-13</option>
            <option value="r17">R17</option>
            <option value="r">R</option>
            <option value="rx">RX</option>
          </select>
          <select
            name="type"
            className="search-field"
            onChange={handleChange}
            id="type"
            value={searchForm.type}
          >
            <option value="">Type</option>
            <option value="tv">TV</option>
            <option value="movie">Movie</option>
            <option value="special">Special</option>
          </select>
          <select
            name="status"
            className="search-field"
            onChange={handleChange}
            id="status"
            value={searchForm.status}
          >
            <option value="">Airing Status</option>
            <option value="airing">Airing</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="search-results">{searchedAnimeArray}</div>
      </div>
    </>
  );
}

export default Search;