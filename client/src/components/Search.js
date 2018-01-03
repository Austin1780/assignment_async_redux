import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  console.log(props);
  const { onSubmit, search, type } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="input-group">
          <form className="form-control" onSubmit={onSubmit}>
            <input
              type="text"
              name="search"
              className="search-query"
              placeholder="Search"
              value=""
            />
            <br />
            <fieldset>
              <legend>Search By:</legend>
              <div>
                <label htmlFor="title">Title</label>
                <input type="radio" name="type" value="title" />
                <br />
                <label htmlFor="author">Author</label>
                <input type="radio" name="type" value="author" />
              </div>
            </fieldset>
            <br />
            <span className="input-group-btn">
              <button className="btn btn-danger" type="submit">
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Search;
