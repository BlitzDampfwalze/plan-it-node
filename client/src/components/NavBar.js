import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import "./NavBar.css";

export class NavBar extends React.Component {

  render() {
    return (
      <nav className="main-nav">
        <ul className="nav-items">
          <li>
            <Link to="/dashboard/user">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NavBar);