import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import Navbar from "./Navbar";
import FanficsCard from "./FanficsCard";

import "../stylesheets/index.css"
import "../stylesheets/FanficsPage.css";

function FanficsPage() {

  const location = useLocation();
  const fromFav = location.state
  
  const initialForm = {
    name: "",
    genre: (fromFav ? fromFav.genres[0].name : ""),
    image: (fromFav ? fromFav.images.jpg.image_url : ""),
    creator: "",
    title: (fromFav ? fromFav.title : ""),
    fanficBody: "",
  };
  console.log(fromFav);
  const [newFanFic, setNewFanFic] = useState(initialForm);
  const [fanFics, setFanFics] = useState([]);

  function handleChange(e) {
    setNewFanFic({ ...newFanFic, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://anime-searcher-3000.onrender.com/fanfics", {
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
    fetch("https://anime-searcher-3000.onrender.com/fanfics")
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
    <>
        <Navbar />
      <div className="fanfic-body">
        <h1 className="title">FαɳFιƈʂ</h1>
          <form onSubmit={handleSubmit}>
          <div className="inner-div">
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
            </div>
            <div className="innerDiv">
            <textarea
              placeholder="Write Fanfiction Here"
              type="text"
              className="text-area"
              cols="500"
              rows="10"
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
            </div>
          </form>
        </div>
        <div className="fanfics-container">
          {fanFicsArray}
        </div>
    </>
  );
}

export default FanficsPage;
