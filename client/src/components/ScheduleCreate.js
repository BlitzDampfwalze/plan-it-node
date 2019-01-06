import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSchedule } from '../actions/event-room'

class ScheduleCreate extends Component {
  state = {
    dateTime: '',
    description: '',
    location: ''
  }

  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.dateTime === '' || this.state.description === '') {
      return alert('Date, Time, and Description cannot be blank')
    }
    this.props.createSchedule(this.state);
  }

  render() {

    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
        >
          <div>Create New *SCHEDULE*</div>
          <div>
            <label htmlFor="dateTime">Date &amp; Time:</label>
            <input type="datetime-local" id="dateTime" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input type="text" id="location"
              onChange={this.handleChange}
            />
          </div>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // eventID: state.event_room.eventID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSchedule: (inputs, token) => dispatch(createSchedule(inputs, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleCreate)
