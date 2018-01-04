import { connect } from "react-redux";
import BookList from "../components/BookList";

const mapStateToProps = state => {
  return state.books;
};

const BookListContainer = connect(mapStateToProps, null)(BookList);

export default BookListContainer;
