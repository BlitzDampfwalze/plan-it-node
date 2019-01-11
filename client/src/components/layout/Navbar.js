import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import { withRouter } from 'react-router-dom'



import "../../style/navbar.css";

export class Navbar extends React.Component {

  handleLogoClick = () => {
    console.log('handleLogoClick')
    this.props.history.push('/')
  }

  render() {

    const links = this.props.loggedIn ? <SignedInLinks /> : <SignedOutLinks />

    return (
      <nav className="nav-wrapper">
        <div className="nav-left nav-item" onClick={this.handleLogoClick}>Plan-it</div>
        <div className="nav-right">
          {links}
          {/* <li className="list-item" onClick={this.handleAboutClick}>About</li>
            <li className="list-item" onClick={this.handleLoginClick}>Login</li>
            <li className="list-item" onClick={this.handleSignupClick}>Sign-up</li> */}
        </div>
      </nav>
    )
  }

}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});


export default connect(mapStateToProps)(withRouter(Navbar));