import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = 'Arvind';
  render() {
    return (
      <div>
        Hello, my first class based component, my name is {this.name}
      </div>
    )
  }
}

