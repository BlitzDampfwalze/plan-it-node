import React, { Component } from 'react';
import { connect } from 'react-redux';

// get our fontawesome imports
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { f05a } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
          <div className="card-item create-card-heading">Create New Trip</div>
          <img className="event-card-image card-item"
            alt={`not set by event creator for ${this.props.title}`}
            src='https://upload.wikimedia.org/wikipedia/commons/5/54/1_hallstatt_austria.jpg' height="175" width="275" />
          <div className="card-item create-card-item">
            <label htmlFor="title">Title:</label>
            <input type="title" id="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="description">Description:</label>
            <input type="description" id="description" value={this.state.description} onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item">
            <label htmlFor="image">Image URL:</label>
            <input type="description" id="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
          </div>

          <div className="card-item create-card-item">
            <div className="password-label">
              <label htmlFor="password" >Set Password:</label>
              <div className="password-info-icon">
                <span className="tooltiptext">Choose a password that others will use to join the room.</span>
                <FontAwesomeIcon icon="info-circle" size="s" className="info-icon" />
              </div>
            </div>

            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="card-item create-card-item create-card-button">Create</div>
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
