import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/MainComponent";
//import {} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;