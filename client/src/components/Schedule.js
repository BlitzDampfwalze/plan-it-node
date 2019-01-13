import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'

import moment from 'moment'

import "../style/schedule.css";

export class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date,
      details: props.details,
      location: props.location,
      edit: false
    }

  }

  handleScheduleChange = (e) => {

    // this.setState({
    //   [e.target.id]: e.target.value
    // })
    // console.log(this.state)
  }

  handleScheduleSubmit = (e) => {
    e.preventDefault();
    // if (this.state.date === '' || this.state.description === '') {
    //   return alert('Date, Time, and Description cannot be blank')
    // }
    // this.props.createSchedule({
    //   this.state.date,
    //   this.state.details,
    //   this.state.location
    // });
  }

  handleScheduleEdit = (e) => {

  }


  render() {
    console.log('schedule state', this.state)
    let editSchedule = this.state.edit ?
      <ul>
        <ul className="schedule-parent-date">
          <li className="schedule-item schedule-date">{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
          <li className="schedule-item schedule-location">{this.props.location}</li>
        </ul>
        <li className="schedule-item schedule-details">{this.props.details}</li>
      </ul>
      :
      null;

    return (
      <div className="schedule-wrapper">
        <ul>
          <ul className="schedule-parent-date">
            <li className="schedule-item schedule-date">{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
            <li className="schedule-item schedule-location">{this.props.location}</li>
          </ul>
          <li className="schedule-item schedule-details">{this.props.details}</li>
          <button onClick={this.handleScheduleEdit}>edit</button>
        </ul>
        <div className="edit-schedule">edit here:{editSchedule}</div>
      </div>

    )
  }

}

const mapStateToProps = (state) => ({
  // return {

  // token: state.auth.authToken,
  // events: state.protected_data.events,
  // userID: state.auth.userID
  // protectedData: state.protected_data.data
  // }
})
// const mapDispatchToProps = (dispatch) => {
//   // return {
//   //   deleteEvent: (id, token) => dispatch(deleteEvent(id, token)),
//   //   joinEventRoom: (event_id) => dispatch(joinEventRoom(event_id))
//   // }
// }

export default connect(mapStateToProps)(Schedule);
// export default Schedule;
