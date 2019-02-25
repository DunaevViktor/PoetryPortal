import React, { Component } from "react";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <main className="app-content" />
        <Footer className="app-footer" />
      </div>
    );
  }
}

export default App;
