import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { title, author } = book;

  return (
    <div className="Book card" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        <h4>{title}</h4>
        <p>{author}</p>
        <img src={image} />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
