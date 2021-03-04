import React from 'react';

const Modal = ({ label, close }) => (
  <div className="modal">
    <div className="modal__bg" onClick={close} />
    <div className="modal__wrapper">
      <div className="modal__close" onClick={close}>x</div>
      <p>{label}</p>
    </div>
  </div>
);

export default Modal;
