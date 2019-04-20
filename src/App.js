import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Graph from './components/graph/Graph';

class App extends Component {
  state = {
    items: [{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]
  }


  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Graph items={this.state.items} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
