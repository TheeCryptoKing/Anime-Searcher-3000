import React from "react";

import "../stylesheets/index.css"
import "../stylesheets/Modal.css";

function Modal({ modalStuff, show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          {modalStuff.title}
          <button onClick={onClose} className="button">
          X
        </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <img className="pt1"
              src={modalStuff.images.jpg.image_url}
              alt={modalStuff.title}
            ></img>
            <div className="pt1">
              <p>rating: {modalStuff.rating}</p>
              <p>score: {modalStuff.score}</p>
              <p>rank: {modalStuff.rank}</p>
            </div>
          </div>
            <div className="pt1">
              <p>Information:</p>
              <p>episodes: {modalStuff.episodes}</p>
              <p>status: {modalStuff.status}</p>
              <p>release year: {modalStuff.year}</p>
              <p>studios: </p>
              {modalStuff.studios.map((studio) => (
                <p key={studio.name}>{studio.name}</p>
              ))}
            </div>
            {modalStuff.trailer.embed_url ? (
              <iframe width="60%" height="200px" className="pt1" title={modalStuff.title} src={modalStuff.trailer.embed_url} />
            ) : "Nothing to show here..."}
        </div>
      </div>
    </div>
  );
}

export default Modal;
