import React, { Component } from 'react';

// import { connect } from 'react-redux';

import NavBar from "./containers/NavBar";
import Login from "./components/Login";


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <header className="App-header">
            <NavBar />
          </header>
      </Router>
    );
  }
}

// {/* <div className="App">
// <header className="App-header">
//   <NavBar />
//   <Login />
//   <Route exact path="/users/login" />
// </header>
// <Route exact path="/users/login" component={Login} />
// </div> */}

export default App;
// {/* <Route exact path="/" component={NavBar} /> */}