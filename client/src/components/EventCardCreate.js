import React, { Component } from 'react'

class CreateEvent extends Component {
  state = {
    imageUrl: '',
    title: '',
    description: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const event = {
      title: this.state.title,
      description: this.state.description,
      password: this.state.password
    }
    
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
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateEvent
