import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteEvent, joinEventRoom } from '../actions/dashboard';

import "../style/eventcard.css";

export class EventCard extends Component {

  componentDidMount() {

  }

  onJoin = (event_id) => {
    const room = this.props.events.find(event => {
      return event._id === event_id
    });

    if (!room.password) {
      this.props.joinEventRoom(room._id)

      return this.props.history.push(`/events/${event_id}`)
    }

    let password = prompt('Please enter the password here:');
    if (password === null || password === '') {
      return alert('must enter a value')
    } else if (password === room.password) {
      this.props.joinEventRoom(room._id)

      return this.props.history.push(`/events/${event_id}`)
    } else {
      return alert('Incorrect Password!')
    }

  }

  onDelete = (event_id) => {
    console.log(event_id)
    const room = this.props.events.find(event => {
      return event._id === event_id
    });
    // if (!room.password) {
    //   this.props.deleteEvent(event_id, this.props.token)
    // }
    let password = prompt('Please enter the password here:');
    if (password === null || password === '') {
      return alert('must enter the value')
    } else if (password === room.password) {
      this.props.deleteEvent(event_id, this.props.token)
    } else {
      return alert('Incorrect Password!')
    }
  }

  render() {

    return (
      <div className="event-card-container created-cards">
        <img className="event-card-image card-item"
          alt={`not set by event creator for ${this.props.title}`}
          src={this.props.imageUrl} height="175" width="275" />
        <div className="event-card-title">{this.props.title}</div>
        <div className="event-card-description card-item">{this.props.description}</div>
        <div className="card-buttons-wrapper">
          <button data-event-id={this.props._id} onClick={e => {
            this.onJoin(e.currentTarget.getAttribute('data-event-id'))
          }}>Join</button>
          <button data-event-id={this.props._id} onClick={e => {
            this.onDelete(e.currentTarget.getAttribute('data-event-id'))
          }}>Delete</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    token: state.auth.authToken,
    events: state.event_room.events,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id, token) => dispatch(deleteEvent(id, token)),
    joinEventRoom: (event_id) => dispatch(joinEventRoom(event_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCard));