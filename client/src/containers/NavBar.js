import React from "react";
import { connect } from "react-redux";
import { setHeaderText } from '../actions'
import { Link } from "react-router-dom";


import "../style/navbar.css";

export class NavBar extends React.Component {


  render() {

    return (
      <nav className="nav">
        <div className="nav-left">Plan-it</div>      
        <div className="nav-right">      
            <ul>
              <li className="list-item">About</li>
              <li className="list-item">Login</li>
              <li className="list-item">Sign-up</li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */}