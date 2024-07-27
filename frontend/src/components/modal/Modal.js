import React from 'react';
import './Modal.css'

const Modal = ({ open, continueDeletion, cancelDeletion, id, name }) => {



    return (
             <div style = {{
                 top: open ? '20%' : '-40%'
             }} className="modal-container">
            <h1>Are you sure?</h1>
            <p>{name}</p>
            <div className="botton__modal-container">
                <button onClick={cancelDeletion} className="btn-cancel">Cancel</button>
                <button className="btn-continue" onClick={() => continueDeletion(id)}>Continue</button>
            </div>
        </div>
      
    );
}

export default Modal;
