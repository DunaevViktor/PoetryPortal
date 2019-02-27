import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
  return (
      <div>
        <Spinner size={50} spinnerColor={"#00A2E8"} spinnerWidth={5} visible={true}/>
      </div>
    );
  }
}
