import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../../actions';
import { clearAuthToken } from '../../local-storage';

import { NavLink } from 'react-router-dom'

import "../../style/navbar.css";

export class SignedInLinks extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutLink;
    if (this.props.loggedIn) {
      logOutLink = (
        <NavLink onClick={() => this.logOut()} to='/'>Log Out</NavLink>
      )
    }

    return (
      <ul>
        <li className="nav-item"><NavLink to='/'>About</NavLink></li>
        <li className="nav-item"><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li className="nav-item">{logOutLink}</li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});

export default connect(mapStateToProps)(SignedInLinks);