import React, { Component } from 'react';

import { connect } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
// import Login from './components/auth/Login';
import EventRoom from './components/EventRoom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import { refreshAuthToken } from './actions';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

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
              {/* <Route exact path='/event/:id' component={EventRoom} /> */}
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/events' component={EventRoom} />
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