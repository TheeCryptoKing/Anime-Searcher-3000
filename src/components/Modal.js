import React from "react";
import { Link } from "react-router-dom";
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
          <h4>{modalStuff.title}</h4>
          <button onClick={onClose} className="button">
            <Link to="/Fanfics" state={modalStuff}>Write a Fanfic</Link>
          </button>
          <button onClick={onClose} className="button">
            X
          </button>
        </div>

        <div className="modal-body">
            
            <div className='row'>
            <div className="pt1" >
                {modalStuff.trailer.embed_url ? (
                  <iframe classallow="fullscreen" width="700vw" height="393vw" title={modalStuff.title} src={modalStuff.trailer.embed_url} />
                ) : "Nothing to show here..."}        
              </div>    

            </div>

            <div className='row'>
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



          </div>
        </div>
    </div>
  );
}

export default Modal;
