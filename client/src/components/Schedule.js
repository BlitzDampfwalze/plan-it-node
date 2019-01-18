import React, { Component } from 'react'
import { connect } from "react-redux";
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import ScheduleInput from './ScheduleInput';
import { required, nonEmpty, email } from '../validators';
import { Redirect, withRouter } from 'react-router-dom'

import editIcon from '../style/assets/baseline-edit-24px.svg'
import cancelIcon from '../style/assets/iconfinder_cancel_326554.svg'
import deleteIcon from '../style/assets/icons8-delete-bin-24.png'
import { scheduleUpdate, scheduleDelete } from '../actions/schedule';

import moment from 'moment'

import "../style/schedule.css";
import { set } from 'mongoose';

export class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateEdit: '',
      detailsEdit: '',
      locationEdit: '',
      edit: false
    }

  }

  handleScheduleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }

  handleScheduleEdit = () => {
    this.setState({ edit: !this.state.edit })

  }

  handleScheduleUpdate = () => {
    this.props.dispatch(scheduleUpdate(this.state, this.props._id))
    this.setState({
      date: '',
      details: '',
      location: '',
      edit: false
    })
  }

  handleScheduleDelete = () => {
    this.props.dispatch(scheduleDelete(this.props._id))
  }

  render() {


    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully
              </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    // console.log('schedule state', this.state)
    //schedule item editing button displays a 'pencil' to edit if not true or an 'x' to cancel <span>&#x2718;</span> : <span>&#x270E;</span>
    let editButton = this.state.edit ? <span><img src={cancelIcon} alt="cancel" /><span className="tooltiptext">Cancel</span></span> : <span><img src={editIcon} alt="edit" /><span className="tooltiptext">Edit</span></span>

    let editSchedule = this.state.edit ?
      // <ul>
      //   <ul className="schedule-parent-date">
      //     <li className="schedule-item schedule-date">{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
      //     <li className="schedule-item schedule-location">{this.props.location}</li>
      //   </ul>
      //   <li className="schedule-item schedule-details">{this.props.details}</li>
      // </ul>
      <form onSubmit={this.handleScheduleUpdate}>
        {/* {successMessage}
        {errorMessage} */}
        {/* <Field
          name="Date"
          type="datetime-local"
          component={ScheduleInput}
          label="Date:"
          validate={[required, nonEmpty]}
        />
        <Field
          name="Location"
          type="text"
          component={ScheduleInput}
          label="Location:"
          value placholder="location..."
          validate={[required, nonEmpty]}
        />
        <Field
          name="Details"
          type="text"
          component={ScheduleInput}
          label="Details:"
          validate={[required, nonEmpty]}
        /> */}
        <ul className="schedule-edit-inputs">
          <li>
            <label htmlFor="locationEdit">Location</label>
            <input type="text" id="locationEdit" className="schedule-inputs"
              onChange={this.handleScheduleChange}
              placeholder="Location: e.g., place &amp; city"
              value={this.state.location} />
          </li>
          <li>
            <label htmlFor="dateEdit">Date</label>
            <input type="datetime-local" id="dateEdit" className="schedule-inputs"
              // defaultValue={currentDate}
              value={this.state.date}
              onChange={this.handleScheduleChange} />
          </li>
          <li>
            <label htmlFor="detailsEdit">Details</label>
            <input type="text" id="detailsEdit" className="schedule-inputs"
              value={this.state.details}
              onChange={this.handleScheduleChange}
              placeholder="details of activity, place, etc..." />
          </li>
        </ul>
        <button>Save</button>
      </form>
      :
      null;

    return (
      <div className="schedule-wrapper">

        <ul className="schedule-parent-date">
          <li className="schedule-item schedule-date">{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
          <li className="schedule-buttons-wrapper">
            <div className="edit-schedule-button" onClick={this.handleScheduleEdit}>{editButton}</div>
            <div className="delete-schedule-button" onClick={this.handleScheduleDelete}><img src={deleteIcon} alt="delete" /><span className="tooltiptext">Delete</span></div>
          </li>
        </ul>

        <ul className="schedule-parent-details">
          <li className="schedule-item schedule-location">{this.props.location}</li>
          <li className="schedule-item schedule-details">{this.props.details}</li>
        </ul>

        <div className="edit-schedule">{editSchedule}</div>

      </div>


    )
  }

}

const mapStateToProps = (state) => ({
  // return {

  // token: state.auth.authToken,
  schedules: state.event_room.schedules
  // userID: state.auth.userID
  // protectedData: state.protected_data.data
  // }
})


export default connect(mapStateToProps)(Schedule);



