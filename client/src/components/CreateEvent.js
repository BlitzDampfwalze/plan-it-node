import React, { Component } from 'react'

class CreateEvent extends Component {
  state = {
    imageUrl: '',
    title: '',
    description: '',
    password: ''
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
          <div>Create New Event</div>
          <div>
            <label htmlFor="title">title</label>
            <input type="title" id="title" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="description">description</label>
            <input type="description" id="description" onChange={this.handleChange} />
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

export default CreateEvent
