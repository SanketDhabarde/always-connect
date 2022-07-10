import React from "react";
import "./Modal.css";

function Modal({ children, toggleModal }) {
  return (
    <div className="modal-backdrop" onClick={toggleModal}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
