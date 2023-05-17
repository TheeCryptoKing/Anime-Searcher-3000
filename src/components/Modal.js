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
        <div className="modal-header">{modalStuff.title}</div>
        <div className="modal-body">
          <img
            src={modalStuff.images.jpg.image_url}
            alt={modalStuff.title}
          ></img>
          <p>Information:</p>
          <p>rating: {modalStuff.rating}</p>
          <p>score: {modalStuff.score}</p>
          <p>rank: {modalStuff.rank}</p>
          <p>episodes: {modalStuff.episodes}</p>
          <p>status: {modalStuff.status}</p>
          <p>release year: {modalStuff.year}</p>
          <p>studios: </p>
          {modalStuff.studios.map((studio) => (
            <p key={studio.name}>{studio.name}</p>
          ))}
          {modalStuff.trailer.embed_url ? (
            <iframe title={modalStuff.title} src={modalStuff.trailer.embed_url} />
          ) : null}
        </div>
        <button onClick={onClose} className="button">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
