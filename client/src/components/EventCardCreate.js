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
    this.props.createEvent(this.state, this.props.token)
    this.setState({
      imageUrl: '',
      title: '',
      description: '',
      password: ''
    })
  }

  render() {

    return (
      <div className="event-create-container event-card-container">
        <form onSubmit={this.handleSubmit}>
          <div className="card-item create-card-heading">Create New Event</div>
          <img className="event-card-image card-item"
            // alt={`no image set by creator for ${this.props.title}`}
            src={this.props.imageUrl} height="175" width="275" />
          <div className="card-item create-card-item">
            <label htmlFor="title">Title:</label>
            <input type="title" id="title" onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="description">Description:</label>
            <input type="description" id="description" onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="image">Image URL:</label>
            <input type="description" id="imageUrl" onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <button className="card-item create-card-item">Create</button>
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
