import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signin } from '../../actions'
import { Redirect } from 'react-router-dom';

import "../../style/auth.css";

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
      const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signin(user);
    this.setState({ email: '', password: '' });
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <div className="auth-item">
            <label htmlFor="email">Email (demo@demo.com)</label>
            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="auth-item">
            <label htmlFor="password">Password (Password: testing)</label>
            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <div className="auth-button-wrapper"><button className="auth-item auth-submit-button">Login</button></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});

const mapDispatchToProps = (dispatch) => ({
  signin: (user) => dispatch(signin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
