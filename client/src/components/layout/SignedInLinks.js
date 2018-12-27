import React from "react";
import { NavLink } from 'react-router-dom'

import "../../style/navbar.css";

const SignedInLinks = () => {
  return (
    <ul className="nav-right">
      <li className="list-item"><NavLink to='/'>something</NavLink></li>
      <li className="list-item"><NavLink to='/'>something else</NavLink></li>
      <li className="list-item"><NavLink to='/'>Log Out</NavLink></li>
    </ul>
  )
}

export default SignedInLinks