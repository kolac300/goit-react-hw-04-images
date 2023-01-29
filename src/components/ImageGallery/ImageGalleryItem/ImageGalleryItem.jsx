import React from 'react';
import { Li } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ showModal, bigViewURL, smallViewURL }) => {
  return (
    <Li onClick={() => showModal(bigViewURL)}>
      <img src={smallViewURL} alt="pictures" />
    </Li>
  );
};
ImageGalleryItem.propTypes = {
  smallViewURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  bigViewURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
