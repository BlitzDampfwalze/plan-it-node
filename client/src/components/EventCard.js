import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";

import {
  deleteEvent,
  joinEventRoom
} from '../actions/event';


import "../style/eventcard.css";

export class EventCard extends Component {

  componentDidMount() {

  }

  onJoin = (event_id) => {
    const room = this.props.events.find(event => {
      return event._id === event_id
    });
    console.log('room', room._id)
    if (!room.password) {
      this.props.joinEventRoom(room._id)
      return this.props.history.push(`/event/${event_id}`)
    }
    let password = prompt('Please enter the password here:');
    if (password === null || password === '') {
      return alert('must enter a value')
    } else if (password === room.password) {
      this.props.joinEventRoom(room._id)
      return this.props.history.push(`/event/${event_id}`)
    } else {
      return alert('Incorrect Password!')
    }

  }

  onDelete(event_id) {
    console.log(event_id)
    this.props.deleteEvent(event_id, this.props.token)
  }

  render() {


    return (
      <div className="event-card-container card-item">
        <div className="event-card-image card-item">IMAGE HERE</div>
        <div className="event-card-title card-item">{this.props.title}</div>
        <div className="event-card-description card-item">{this.props.description}</div>
        <button className="card-item" data-event-id={this.props._id} onClick={e => {
          console.log(e.currentTarget.getAttribute('data-event-id'))
          this.onJoin(e.currentTarget.getAttribute('data-event-id'))
        }}>JOIN</button>
        <button className="card-item" data-event-id={this.props._id} onClick={e => {
          console.log(e.currentTarget.getAttribute('data-event-id'))
          this.onDelete(e.currentTarget.getAttribute('data-event-id'))
        }}>DELETE</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  // const { events } = state.protected_data;
  // console.log(events, 'events')
  return {
    token: state.auth.authToken,
    events: state.protected_data.events,
    userID: state.auth.userID
    // protectedData: state.protected_data.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id, token) => dispatch(deleteEvent(id, token)),
    joinEventRoom: (event_id) => dispatch(joinEventRoom(event_id))
  }
}

// export default (EventCard);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCard));

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }