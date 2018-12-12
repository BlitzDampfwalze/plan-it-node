import React, { Component } from 'react';

import {connect} from 'react-redux';

import Login from "./components/Login";

import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
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
          </header>
          <Route exact path="/users/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
