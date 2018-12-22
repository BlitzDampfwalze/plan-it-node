import React from "react";
import { connect } from "react-redux";
import { setHeaderText } from '../actions'
import { Link } from "react-router-dom";


import "../style/navbar.css";

export class NavBar extends React.Component {


  render() {

    return (
      <nav>
      <div>Plan-it</div>
      <Link to="/dashboard/user">{this.props.navbar.text}</Link>
      <ul className="nav-items">
        <li >About</li>
        <li>Login</li>
        <li>Sign-up</li>
      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);