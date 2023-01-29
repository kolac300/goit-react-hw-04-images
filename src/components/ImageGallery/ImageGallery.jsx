import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const ImageGallery = ({ images, showModal }) => {
  return (
    <Ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          showModal={showModal}
          smallViewURL={image.webformatURL}
          bigViewURL={image.largeImageURL}
        />
      ))}
    </Ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  showModal: PropTypes.func.isRequired,
};
