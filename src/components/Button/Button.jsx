import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ updatePage }) => {
  return <StyledButton onClick={updatePage}>Show more</StyledButton>;
};
Button.propTypes = {
  updatePage: PropTypes.func.isRequired,
};
