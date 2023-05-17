import React from 'react';
import "../stylesheets/Modal.css";
import AnimeCard from './AnimeCard';

function Modal({ modalStuff, show, onClose }) {
    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    {modalStuff.title}
                </div>
                <div className="modal-body">
                </div>
                <button onClick={onClose} className="button">Close</button>
            </div>
        </div>

        )
}

export default Modal;