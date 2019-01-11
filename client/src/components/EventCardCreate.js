import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createEvent } from '../actions/dashboard'

import "../style/eventcard.css";

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
    console.log('event create props', this.props.token)
    this.props.createEvent(this.state, this.props.token);
  }

  render() {

    return (
      <div className="event-create-container event-card-container">
        <form onSubmit={this.handleSubmit}>
          <div className="card-item">Create New Event</div>
          <div className="card-item create-card-item">
            <label htmlFor="title">title</label>
            <input type="title" id="title" onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="description">description</label>
            <input type="description" id="description" onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <button className="card-item">Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.authToken
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (inputs, token) => dispatch(createEvent(inputs, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
