import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createEvent } from '../actions/event'

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
    console.log(this.props.token, 'eventcard props')
    this.props.createEvent(this.state, this.props.token);
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.authToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (inputs, token) => dispatch(createEvent(inputs, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)
