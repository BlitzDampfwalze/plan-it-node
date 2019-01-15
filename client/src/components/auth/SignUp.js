import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signup } from '../../actions'

import "../../style/auth.css";

class SignUp extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    email: '',
    password: '',
    username: ''
  }
  // }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    // const user = {
    //   email: this.state.email,
    //   password: this.state.password,
    //   username: this.state.username
    // };
    // this.props.dispatch(signup(this.state));
    this.props.signup(this.state);
    // signup(user)
    this.setState({ email: '', password: '', username: '' });
    return <Redirect to='/signin' />;

  }

  render() {

    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <div>Sign Up heading</div>
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
            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button className="auth-item">Sign-up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
