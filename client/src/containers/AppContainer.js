import { connect } from "react-redux";
import serialize from "form-serialize";
//import { searchBooks } from "../actions";
import App from "../components/App";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      //dispatch(searchBooks(data));
      form.reset();
    }
  };
};

// Generate the puppy list container which renders
// PuppyList with all the new props
const AppContainer = connect(mapDispatchToProps)(App);

export default AppContainer;
