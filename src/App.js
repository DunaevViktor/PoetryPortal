import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import RouteHeader from "./RouteHeader";

class App extends Component {
  render() {
    return (
      <div>
        <RouteHeader />
        <Main />
      </div>
    );
  }
}

export default App;
