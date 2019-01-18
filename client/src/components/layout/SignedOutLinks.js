import React from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import "../../style/navbar.css";


const SignedOutLinks = () => {
  
  return (
    <ul>
      <li className="nav-item"><NavLink to='/'>About</NavLink></li>
      <li className="nav-item"><NavLink to='/signin'>Login</NavLink></li>
      <li className="nav-item"><NavLink to='/signup'>Sign-up</NavLink></li>
    </ul>
  )

}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});

export default connect(mapStateToProps)(SignedOutLinks);