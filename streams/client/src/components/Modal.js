import './scss/Modal.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.config.onDismiss} className="modal">
      <div onClick={e => e.stopPropagation()} className="modal__content">
        <h3 className="modal__title">{props.config.title}</h3>
        <p className="modal__text">{props.config.text}</p>
        <div className="modal__actions">{props.config.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
