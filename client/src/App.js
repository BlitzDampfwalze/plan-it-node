import React, { Component } from 'react';

// import { connect } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import EventRoom from './components/EventRoom';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'





import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root-container">
          <header className="App-header">
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
              {/* <Route exact path='/login' component={Login} /> */}
              <Route exact path='/event/:id' component={EventRoom} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

// {/* <div className="App">
// <header className="App-header">
//   <Navbar />
//   <Login />
//   <Route exact path="/users/login" />
// </header>
// <Route exact path="/users/login" component={Login} />
// </div> */}

export default App;
// {/* <Route exact path="/" component={Navbar} /> */}