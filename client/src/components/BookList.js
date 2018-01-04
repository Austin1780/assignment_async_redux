import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BookList = ({ books }) => {
  const bookList = books.map(book => <Book book={book} key={book.id} />);
  const noItems = <p>No books here...</p>;

  return (
    <div className="BookList container">
      <h1>Books</h1>
      <div className="card-deck">
        {items.length > 0 ? groceryList : noItems}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
