import React from "react";
import "./Modal.css";

function Modal({ children, toggleModal, editModal }) {
  return (
    <div className="modal-backdrop" onClick={toggleModal}>
      <div
        className={`modal ${editModal ? "edit-modal" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
