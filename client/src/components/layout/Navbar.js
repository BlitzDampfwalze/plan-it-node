import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import { setHeaderText } from '../../actions'
import { withRouter } from 'react-router-dom'



import "../../style/navbar.css";

export class Navbar extends React.Component {

  handleLogoClick = () => {
    console.log('handleLogoClick')
    this.props.history.push('/')
  }

  handleAboutClick = () => {

  }

  handleLoginClick = () => {

  }

  handleSignupClick = () => {

  }


  render() {
    //alternatively place variable: false in state and include the following:
    //if(this.state.variable === true) <Redirect to='/nameofplace' />   also import {Redirect} from 'react-router-dom'
    console.log('this.props.history', this.props.history)

    return (
      <nav className="nav-wrapper">
        <div className="nav-left" onClick={this.handleLogoClick}>Plan-it</div>
        <div className="nav-right">
          <ul>
            <li className="list-item" onClick={this.handleAboutClick}>About</li>
            <li className="list-item" onClick={this.handleLoginClick}>Login</li>
            <li className="list-item" onClick={this.handleSignupClick}>Sign-up</li>
          </ul>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    )
  }

}

const mapStateToProps = (state) => ({
  navbar: state.navbar
})

const mapDispatchToProps = ({
  setHeaderText: setHeaderText
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }