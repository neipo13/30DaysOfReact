import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

const a = [1, 10, 100, 1000];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {React.Children.map(a, i => <li>{i}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
