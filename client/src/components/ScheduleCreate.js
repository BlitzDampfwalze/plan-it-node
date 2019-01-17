import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSchedule } from '../actions/event-room'

import "../style/schedule.css";
import "../style/schedulecreate.css";

class ScheduleCreate extends Component {
  state = {
    date: '',
    details: '',
    location: ''
  }

  handleScheduleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }

  handleScheduleSubmit = (e) => {
    e.preventDefault();
    if (this.state.date === '' || this.state.description === '') {
      return alert('Date, Time, and Description cannot be blank')
    }
    this.props.createSchedule(this.state);
    this.setState({
      date: '',
      details: '',
      location: ''
    })
  }

  render() {
    const currentDate = new Date().toISOString().split('.')[0];
    // console.log('this is current date', currentDate)

    return (
      <div>
        <form className="schedule-create-container" onSubmit={this.handleScheduleSubmit}>
          {/* <h2>Add Item to the Schedule</h2> */}
          <ul className="schedule-create-inputs">
            <li>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" className="schedule-inputs"
                onChange={this.handleScheduleChange}
                placeholder="Location: e.g., place &amp; city"
                value={this.state.location} />
            </li>
            <li>
              <label htmlFor="date">Date</label>
              <input type="datetime-local" id="date" className="schedule-inputs"
                // defaultValue={currentDate}
                value={this.state.date}
                onChange={this.handleScheduleChange} />
            </li>
            <li>
              <label htmlFor="details">Details</label>
              <input type="text" id="details" className="schedule-inputs"
                value={this.state.details}
                onChange={this.handleScheduleChange}
                placeholder="details of activity, place, etc..." />
            </li>
          </ul>
          <button>Add Item to the Schedule</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // eventID: state.event_room.eventID
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSchedule: (inputs, token) => dispatch(createSchedule(inputs, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleCreate);
