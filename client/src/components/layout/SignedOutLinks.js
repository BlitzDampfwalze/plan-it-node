import React from "react";
import { NavLink } from 'react-router-dom'

import "../../style/navbar.css";

const SignedOutLinks = () => {
  return (
    <ul className="nav-right">
      <li className="list-item"><NavLink to='/signin'>Login</NavLink></li>
      <li className="list-item"><NavLink to='/signup'>Sign-up</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks