import React from 'react';
import { Div } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
const modal = document.querySelector('#modal');

export const Modal = ({ modalURL, toggleModal }) => {
  const backdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const hendlKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', hendlKeyDown);
    return () => {
      window.removeEventListener('keydown', hendlKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <Div onClick={backdropClick}>
      <div>
        <img src={modalURL} alt="pic" />
      </div>
    </Div>,
    modal
  );
};
Modal.propTypes = {
  modalURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
