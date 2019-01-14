import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";

import { deleteEvent, joinEventRoom, storeUserOnJoin } from '../actions/dashboard';

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
      // this.props.storeUserOnJoin(this.props.userObject)

      return this.props.history.push(`/events/${event_id}`)
    }

    let password = prompt('Please enter the password here:');
    if (password === null || password === '') {
      return alert('must enter a value')
    } else if (password === room.password) {
      this.props.joinEventRoom(room._id)
      // this.props.storeUserOnJoin(this.props.userObject)


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
    if (!room.password) {
      this.props.deleteEvent(event_id, this.props.token)
    }
    let password = prompt('Please enter the password here:');
    if (password === null || password === '') {
      return alert('must enter a value')
    } else if (password === room.password) {
      this.props.deleteEvent(event_id, this.props.token)
    } else {
      return alert('Incorrect Password!')
    }
  }

  render() {
    // if(!this.props.imageUrl) {
    //     return <div></div>
    // }
    // else {
    //   return <img className="event-card-image card-item" src={this.props.imageUrl} height="175" width="275" />
    // }

    return (
      <div className="event-card-container created-cards">
        <img className="event-card-image card-item"
          // alt={`no image set by creator for ${this.props.title}`}
          src={this.props.imageUrl} height="175" width="275" />
        <div className="event-card-title card-item">{this.props.title}</div>
        <div className="event-card-description card-item">{this.props.description}</div>
        <button className="card-item" data-event-id={this.props._id} onClick={e => {
          this.onJoin(e.currentTarget.getAttribute('data-event-id'))
        }}>JOIN</button>
        <button className="card-item" data-event-id={this.props._id} onClick={e => {
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
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    deleteEvent: (id, token) => dispatch(deleteEvent(id, token)),
    joinEventRoom: (event_id) => dispatch(joinEventRoom(event_id)),
    // storeUserOnJoin: (user) => dispatch(storeUserOnJoin(user))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCard));

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }