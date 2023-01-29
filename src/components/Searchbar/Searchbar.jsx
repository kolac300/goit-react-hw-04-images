import { Field, Formik } from 'formik';
import React from 'react';
import { StyledForm } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const initialValue = {
  search: '',
};

export const Searchbar = ({ updateSearch, scrollToButton }) => {
  const onSubmit = (value, ections) => {
    const { search } = value;
    if (search.trim() === '' || search.trim().length > 50) {
      toast.error('Invalid query');
    } else {
      updateSearch(search);
      ections.resetForm();
    }
  };
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      <StyledForm>
        <Field className="SearchForm-input" type="text" name="search" />
        <button className="SearchForm-button" type="submit">
          Find
        </button>
      </StyledForm>
    </Formik>
  );
};
Searchbar.propTypes = {
  updateSearch: PropTypes.func.isRequired,
};
