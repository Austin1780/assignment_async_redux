import React, { Component } from "react";
import logo from "../owl.png";
import "../App.css";
import SearchContainer from "../containers/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Book Searcher</h1>
        </header>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
