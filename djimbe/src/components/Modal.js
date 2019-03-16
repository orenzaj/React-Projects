import React from "react";
import ReactModal from "react-modal";

const Modal = props => {
  const { isOpen, openModal } = props;
  return (
    <ReactModal
      contentLabel="Minimal Modal Example"
      isOpen={isOpen}
      onRequestClose={() => openModal(false)}
    >
      <button onClick={() => openModal(false)}>X</button>
    </ReactModal>
  );
};

export default Modal;
