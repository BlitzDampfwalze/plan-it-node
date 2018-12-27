import React from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks';
import Schedule from './Schedule';

import { setHeaderText } from '../actions'
// import { withRouter } from 'react-router-dom'



import "../style/eventroom.css";

export class EventRoom extends React.Component {
  constructor(props) {
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    console.log('props', this.props)
    const id = this.props.match.params.id;
    console.log('route param id', id)

    return (
      <div className="event-room-container">You are now in the selected Event Room
      <div className="Tasks-wrapper"><Tasks /></div>
      <div className="schedule-wrapper"><Schedule /></div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  // navbar: state.navbar
})

const mapDispatchToProps = ({
  // setHeaderText: setHeaderText
})

export default connect(mapStateToProps, mapDispatchToProps)(EventRoom);

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }