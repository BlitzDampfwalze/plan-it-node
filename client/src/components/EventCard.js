import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteEvent } from '../actions/event';


import "../style/eventcard.css";

export class EventCard extends React.Component {

  componentDidMount() {

  }

  onDelete(id, token) {
    console.log(id)
    this.props.deleteEvent(id, this.props.token)
  }

  render() {

    return (
      <div className="event-card-container card-item">
        <div className="event-card-image card-item">IMAGE HERE</div>
        <div className="event-card-title card-item">{this.props.title}</div>
        <div className="event-card-description card-item">{this.props.description}</div>
        <button className="card-item">JOIN</button>
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
    // protectedData: state.protected_data.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id, token) => dispatch(deleteEvent(id, token))
  }
}

// export default (EventCard);
export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }