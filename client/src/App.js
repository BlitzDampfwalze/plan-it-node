import React, { Component } from 'react';

import { connect } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import EventRoom from './components/EventRoom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


// import { refreshAuthToken } from './actions';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
              <Route path='/dashboard' component={Dashboard} />
              <Route exact path='/events/:id' component={EventRoom} />
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

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.username !== null
});

export default connect(mapStateToProps)(App);