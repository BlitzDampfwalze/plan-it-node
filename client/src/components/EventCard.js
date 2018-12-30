import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { fetchEvents } from '../actions/event';


import "../style/eventcard.css";

export class EventCard extends React.Component {

  render() {

    return (
      <div className="event-card-container card-item">
        <div className="event-card-image card-item">IMAGE HERE</div>
        <div className="event-card-description card-item">{this.props.title}</div>
        <button className="card-item">JOIN</button>
      </div>
    )
  }

}

// const mapStateToProps = (state) => {
// const { events } = state.protected_data;
// console.log(events, 'events')
// return {
//   events: state.protected_data.events,
//   protectedData: state.protected_data.data
// }

// const mapDispatchToProps = ({

// })

export default (EventCard);
// export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }