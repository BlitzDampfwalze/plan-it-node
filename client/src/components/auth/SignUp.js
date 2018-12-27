import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  }

  handleChange = (e) => {
    console.log(e)
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    console.log(this.state)
  }

  render() {

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>Sign In</div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="username" id="username" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <button>Sign-up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
