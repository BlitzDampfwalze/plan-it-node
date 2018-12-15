import React from "react";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { login } from "../actions";

// import "./Forms.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   const inputs = [this.email, this.password];
  //   const user = {
  //     email: this.email.value,
  //     password: this.password.value
  //   };
  //   this.props.dispatch(login(user));
  //   inputs.map(input => (input.value = ""));
  // }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard/user" />;
    }

    return (
      <section className="form-landing">
      <div>Login</div>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.user,
  error: state.error
});

export default connect(mapStateToProps)(Login);
