import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import FanficsCard from "./FanficsCard";

import "../stylesheets/index.css";
import "../stylesheets/FanficsPage.css";

function FanficsPage() {
  const location = useLocation();
  const fromFav = location.state;

  const initialForm = {
    name: "",
    genre: fromFav ? fromFav.genres[0].name : "",
    image: fromFav ? fromFav.images.jpg.image_url : "",
    creator: "",
    title: fromFav ? fromFav.title : "",
    fanficBody: "",
  };

  const [ newFanFic, setNewFanFic ] = useState(initialForm);
  const [ fanFics, setFanFics ] = useState([]);

  useEffect(() => {
    getFanFics();
  }, []);

  function getFanFics() {
    fetch("http://localhost:3001/fanfics")
      .then((res) => res.json())
      .then((res) => setFanFics(res));
  }

  const fanFicsArray = fanFics.map((fanFic) => {
    return (
      <FanficsCard
        key={fanFic.id}
        id={fanFic.id}
        animeName={fanFic.newFanFic.name}
        title={fanFic.newFanFic.title}
        genre={fanFic.newFanFic.genre}
        image={fanFic.newFanFic.image}
        creator={fanFic.newFanFic.creator}
        body={fanFic.newFanFic.fanficBody}
        updateStateDelete={updateStateDelete}
      />
    );
  });

  function handleChange(e) {
    setNewFanFic({ ...newFanFic, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/fanfics", {
      method: "POST",
      body: JSON.stringify({
        newFanFic,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => updateStatePost(res));
    setNewFanFic(initialForm);
  }

  function updateStatePost(fanFic) {
    setFanFics([...fanFics, fanFic]);
  }

  function updateStateDelete(id) {
    const deletedArray = fanFics.filter((fanfic) => fanfic.id !== id);
    setFanFics(deletedArray);
  }

  return (
    <>
      <Navbar />
      <div className="fanfic-body">
        <h1 className="title">FαɳFιƈʂ</h1>
        <form onSubmit={handleSubmit}>
          <div className="inner-div">
            <input
              placeholder="FanFic Title"
              type="text"
              className="form-input"
              name="name"
              value={newFanFic.name}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Creator"
              type="text"
              className="form-input"
              name="creator"
              value={newFanFic.creator}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Based On:"
              type="text"
              className="form-input"
              name="title"
              value={newFanFic.title}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Genre"
              type="text"
              className="form-input"
              name="genre"
              value={newFanFic.genre}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Image Url"
              type="text"
              className="form-input"
              name="image"
              value={newFanFic.image}
              onChange={handleChange}
            ></input>
          </div>
          <div className="innerDiv">
            <textarea
              placeholder="Write Fanfiction Here"
              type="text"
              className="text-area"
              name="fanficBody"
              value={newFanFic.fanficBody}
              onChange={handleChange}
            ></textarea>
            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="fanfics-container">{fanFicsArray}</div>
    </>
  );
}

export default FanficsPage;
