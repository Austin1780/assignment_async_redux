import { connect } from "react-redux";
import serialize from "form-serialize";
import { getBooks } from "../actions";
import Search from "../components/Search";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const formData = serialize(form, { hash: true });
      dispatch(getBooks(formData));
      form.reset();
    }
  };
};

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
