import React, { Component } from 'react';

import { connect } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import EventRoom from './components/EventRoom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


import { refreshAuthToken } from './actions';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


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