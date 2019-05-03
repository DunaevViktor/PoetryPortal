import React, { Component } from "react";
import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="spin-wrapper">
        <div className="spinner" />
      </div>
    );
  }
}

export default Loading;
