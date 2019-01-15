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
      date: null,
      details: '',
      location: '',
      edit: false
    }

  }

  onSubmit(values) {
    return fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers
              .get('content-type')
              .startsWith('application/json')
          ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
          }
          // It's a less informative error returned by express
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return;
      })
      .then(() => console.log('Submitted with values', values))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
        return Promise.reject(
          new SubmissionError({
            _error: 'Error submitting message'
          })
        );
      });
  }

  handleScheduleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleScheduleUpdate = (values) => {
    this.props.dispatch(scheduleUpdate(values, this.props._id))
    this.setState({
      date: null,
      details: '',
      location: '',
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
    let editButton = this.state.edit ? <img src={cancelIcon} alt="cancel" /> : <img src={editIcon} alt="edit" />

    let editSchedule = this.state.edit ?
      // <ul>
      //   <ul className="schedule-parent-date">
      //     <li className="schedule-item schedule-date">{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
      //     <li className="schedule-item schedule-location">{this.props.location}</li>
      //   </ul>
      //   <li className="schedule-item schedule-details">{this.props.details}</li>
      // </ul>
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.handleScheduleUpdate(values)
          // .then(() => {resetForm();})
        )}>
        {successMessage}
        {errorMessage}
        <Field
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
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Save
            </button>
      </form>
      :
      null;

    return (
      <div className="schedule-wrapper">

        <ul className="schedule-parent-date">
          <li className="schedule-item schedule-date">{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
          <div className="edit-schedule-button" onClick={this.handleScheduleEdit}>{editButton}</div>
          <div className="delete-schedule-button" onClick={this.handleScheduleDelete}><img src={deleteIcon} alt="delete" /></div>
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

Schedule = connect(mapStateToProps)(Schedule);

export default reduxForm({
  form: 'schedule'
})(Schedule);

