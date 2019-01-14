import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSchedule } from '../actions/event-room'

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
  }

  render() {
    const currentDate = new Date().toISOString().split('.')[0];
    // console.log('this is current date', currentDate)

    return (
      <div className="container">
        <form onSubmit={this.handleScheduleSubmit}>
          <div>Create New *SCHEDULE*</div>
          <ul>
            <li>
              <label htmlFor="location"></label>
              <input type="text" id="location"
                onChange={this.handleScheduleChange}
                placeholder="Location: e.g., place &amp; city" />
            </li>
            <li>
              <label htmlFor="date"></label>
              <input type="datetime-local" id="date"
                // defaultValue={currentDate}
                onChange={this.handleScheduleChange} />
            </li>
            <li>
              <label htmlFor="details"></label>
              <input type="text" id="details"
                onChange={this.handleScheduleChange}
                placeholder="details of activity, place, etc..." />
            </li>
          </ul>
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSchedule: (inputs, token) => dispatch(createSchedule(inputs, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleCreate);
