import React from 'react';
import { connect } from 'react-redux';
import serialize from 'form-serialize';
import { getBooks } from '../actions';
import Search from '../components/Search';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const formData = serialize(form, { hash: true });
      console.log(formData);

      dispatch(getBooks(formData));
      form.reset();
    }
  };
};

// Generate the puppy list container which renders
// PuppyList with all the new props

const SearchContainer = connect(mapDispatchToProps)(Search);

export default SearchContainer;
