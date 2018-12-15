import React, { Component } from 'react';

import { connect } from 'react-redux';

import NavBar from "./components/NavBar";
import Login from "./components/Login";


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={NavBar} />
            <Login />
            <Route exact path="/users/login" />
          </header>
          <Route exact path="/users/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
