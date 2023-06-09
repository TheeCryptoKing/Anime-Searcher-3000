import { useState } from "react";

import Navbar from "./Navbar";
import AnimeCard from "./AnimeCard";
import Modal from "./Modal";
import "../stylesheets/Search.css";

function Search() {
  const initialForm = {
    name: "",
    rating: "",
    type: "",
    status: "",
  };

  const [ searchedAnime, setSearchedAnime ] = useState([]);
  const [ searchForm, setSearchForm ] = useState(initialForm);
  const [ modalStuff, setModalStuff ] = useState([]);
  const [ show, setShow ] = useState(false);

  const searchedAnimeArray = searchedAnime.map((anime) => {
    return (
      <AnimeCard
        key={anime.title}
        name={anime.title}
        anime={anime}
        image={anime.images.jpg.image_url}
        setModalStuff={setModalStuff}
        setShow={setShow}
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
        if (res.data.length === 0) {
          alert("No Results! Refine search and try again");
        }
      })
      .catch((error) => alert(error));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
    setSearchForm(initialForm);
  }

  function handleChange(e) {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Navbar />
      <div className="search-body">
        <h1 className="title">Sҽαɾƈԋ</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Search for an Anime"
            type="text"
            className="text-input"
            name="name"
            onChange={handleChange}
            value={searchForm.name}
          ></input>
          <input
            className="reset"
            type="reset"
            value="X"
            onClick={() => setSearchForm(initialForm)}
            alt="Clear the search form"
          ></input>
          <div className="innerDiv">
            <select
              name="rating"
              className="search-field"
              onChange={handleChange}
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
              value={searchForm.status}
            >
              <option value="">Airing Status</option>
              <option value="airing">Airing</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="search-results">{searchedAnimeArray}</div>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          modalStuff={modalStuff}
        />
      </div>
    </>
  );
}

export default Search;
