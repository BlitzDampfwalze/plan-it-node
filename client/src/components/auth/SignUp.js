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
    // () => {
    this.props.signup(this.state)
    // }
    // this.setState({ email: '', password: '', username: '' });
    // if (this.state.password.length > 4) {
    //   return this.props.history.push('/dashboard')
    // }
    // else {

    // }
  }

  render() {
    // if this.state.... based on data set in reducer
    // return <Redirect to='/dashboard'/>
    if (this.props.signup_success !== null) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          {/* <div>Sign Up heading</div> */}
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
            <input type="password" id="password" pattern=".{5,10}" required title="Password should be 5 to 10 characters" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button className="auth-item auth-submit-button">Sign-up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(this.props.signup_success)
  return {
    signup_success: state.auth.signup_success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
