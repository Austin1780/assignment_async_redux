import React, { Component } from "react";
import logo from "../owl.png";
import "../App.css";
//import AppContainer from "../containers/AppContainer";

class App extends Component {
  render() {
    return (
      <html>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower"
            rel="stylesheet"
          />
        </head>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Book Searcher</h1>
          </header>
          <div className="container">
            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  className="search-query form-control"
                  placeholder="Search"
                />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="submit">
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </div>
          {/* <AppContainer /> */}
        </div>
      </html>
    );
  }
}

export default App;
