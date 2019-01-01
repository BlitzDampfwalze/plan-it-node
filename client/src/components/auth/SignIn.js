import React, { Component } from 'react'
import { connect } from 'react-redux';

import { signin } from '../../actions'

import {Redirect} from 'react-router-dom';

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
    // console.log(this.state)
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    // this.props.dispatch(signin(user));
    this.props.signin(this.state);
    // signin(user)
    this.setState({ email: '', password: '' });
  }

  render() {
    // console.log('props:', this.props)
    console.log('props.loggedIn', this.props.loggedIn)
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
  }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>Sign In</div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <button>Login</button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
