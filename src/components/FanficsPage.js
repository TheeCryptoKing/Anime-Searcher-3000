import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FanficsCard from "./FanficsCard";

import "../stylesheets/index.css"
import "../stylesheets/FanficsPage.css";

function FanficsPage() {
  const initialForm = {
    name: "",
    genre: "",
    image: "",
    creator: "",
    title: "",
    fanficBody: "",
  };
  const [newFanFic, setNewFanFic] = useState(initialForm);
  const [fanFics, setFanFics] = useState([]);

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
    .then(res => res.json())
    .then(res => updateStatePost(res))
    setNewFanFic(initialForm)
  }

function updateStatePost (fanFic) {
  setFanFics([...fanFics, fanFic])
}

function updateStateDelete (id) {
  const deletedArray = fanFics.filter((fanfic) => fanfic.id !== id);
    setFanFics(deletedArray);
}

  useEffect(() => {
    getFanFics();
  }, []);

  function getFanFics() {
    fetch("http://localhost:3001/fanfics")
      .then((res) => res.json())
      .then((res) => setFanFics(res));
  }

  const fanFicsArray = fanFics.map(fanFic =>{
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
    )
  })  

  return (
    <div className="FanficPage">
        <Navbar />
      <div className="FanficPage-body">
        <h1 className="page-title">Fanfictions</h1>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              className="form-input"
              name="name"
              id="name"
              value={newFanFic.name}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Genre"
              type="text"
              className="form-input"
              name="genre"
              id="genre"
              value={newFanFic.genre}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Image Url"
              type="text"
              className="form-input"
              name="image"
              id="image"
              value={newFanFic.image}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Creator"
              type="text"
              className="form-input"
              name="creator"
              id="creator"
              value={newFanFic.creator}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Title"
              type="text"
              className="form-input"
              name="title"
              id="title"
              value={newFanFic.title}
              onChange={handleChange}
            ></input>
            <textarea
              placeholder="Write Fanfiction Here"
              type="text"
              className="form-input"
              cols="2"
              rows="9"
              name="fanficBody"
              id="fanficBody"
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
          </form>
        </div>
        <div className="fanfics-container">
          {fanFicsArray}
        </div>
      </div>
    </div>
  );
}

export default FanficsPage;
