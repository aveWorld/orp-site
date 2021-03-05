import React from 'react';

const Modal = ({ label, close, anchor }) => (
  <div className="modal">
    <div className="modal__bg" onClick={close} />
    <div className="modal__wrapper">
      <div className="modal__close" onClick={close} />
      <p>
        {label}
        {' '}
        {anchor && <a href={anchor.href}>{anchor.label}</a>}
      </p>
    </div>
  </div>
);

export default Modal;
