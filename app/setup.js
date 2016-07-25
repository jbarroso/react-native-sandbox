import App from './containers/App';
import React, { Component } from 'react';

function setup() {
  class Root extends Component {
    render() {
      return (
        <App />
      );
    }
  }
  return Root;
}

module.exports = setup;
