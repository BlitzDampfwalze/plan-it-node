import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { signup } from '../../actions'

import "../../style/auth.css";

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    username: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signup(this.state))
  }

  render() {

    if (this.props.signup_success !== null) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <div className="auth-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="auth-item">
            <label htmlFor="username">Username</label>
            <input type="username" id="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="auth-item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" pattern=".{6,10}" required title="Password should be 6 to 10 characters" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="auth-button-wrapper"><button className="auth-item auth-submit-button">Sign-up</button></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    signup_success: state.auth.signup_success
  }
}


export default connect(mapStateToProps)(SignUp)
