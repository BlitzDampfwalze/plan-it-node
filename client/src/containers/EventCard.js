import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import "../style/eventcard.css";

export class EventCard extends React.Component {


  render() {

    return (
      <div className="card-container item">
        <div className="card-image item">IMAGE HERE</div>
        <div className="card-description item">TRIP NAME description</div>
        <button className="item">JOIN</button>
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