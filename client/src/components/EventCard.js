import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import "../style/eventcard.css";

export class EventCard extends React.Component {


  render() {

    return (
      <div className="event-card-container card-item">
        <div className="event-card-image card-item">IMAGE HERE</div>
        <div className="event-card-description card-item">TRIP NAME description</div>
        <button className="card-item">JOIN</button>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */}