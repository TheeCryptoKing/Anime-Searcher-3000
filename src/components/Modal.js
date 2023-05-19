import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/index.css"
import "../stylesheets/Modal.css";
function Modal({ modalStuff, show, onClose }) {
  if (!show) {
    return null;
  }

  const videoWorking = modalStuff.trailer.embed_url && modalStuff.trailer.is_responsive;

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
            <div className='row-video'>
            {videoWorking ? (
              <div className="pt-video">
                <iframe
                  allowFullScreen
                  width="100%"
                  height="100%"
                  title={modalStuff.title}
                  src={modalStuff.trailer.embed_url}
                />
              </div>
            ) : (
              <p>Video is unresponsive or not available.</p>
            )}
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
              
              <div className="pt1">
                <p>rating: {modalStuff.rating}</p>
                <p>score: {modalStuff.score}</p>
                <p>rank: {modalStuff.rank}</p>
                <img className="pt-pic"
                src={modalStuff.images.jpg.image_url}
                alt={modalStuff.title}
              ></img>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import "../stylesheets/index.css";
// import "../stylesheets/Modal.css";
// function Modal({ modalStuff, show, onClose }) {
//   if (!show) {
//     return null;
//   }
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div className="modal-header">
//           {modalStuff.title}
//           <button onClick={onClose} className="button">
//             X
//           </button>
//           <button onClick={onClose} className="button">
//             <Link to="/Fanfics" state={modalStuff}>Write a Fanfic</Link>
//           </button>
//         </div>
//         <div className="modal-body">
//           <div className="row video-row">
//             <div className="col-sm-12" id="video">
//               {modalStuff.trailer.embed_url ? (
//                 <div className="video-container">
//                   <iframe
//                     allow="fullscreen"
//                     width="100%"
//                     height="100%"
//                     className="pt1"
//                     title={modalStuff.title}
//                     src={modalStuff.trailer.embed_url}
//                   />
//                 </div>
//               ) : (
//                 "Nothing to show here..."
//               )}
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-sm-6 col-md-3" id="details">
//               <p>rating: {modalStuff.rating}</p>
//               <p>score: {modalStuff.score}</p>
//               <p>rank: {modalStuff.rank}</p>
//             </div>
//             <div className="col-sm-6 col-md-3">
//               <img
//                 className="pt1"
//                 src={modalStuff.images.jpg.image_url}
//                 alt={modalStuff.title}
//               />
//             </div>
//             <div className="offset-md-1 col-sm-6 col-md-3" id="information">
//               <p>Information:</p>
//               <p>episodes: {modalStuff.episodes}</p>
//               <p>status: {modalStuff.status}</p>
//               <p>release year: {modalStuff.year}</p>
//               <p>studios:</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default Modal;