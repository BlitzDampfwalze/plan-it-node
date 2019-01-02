import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { fetchSchedules } from '../actions/event-room';

import Tasks from './Tasks';
import Schedule from './Schedule';
import Chat from './Chat';



import "../style/eventroom.css";

export class EventRoom extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.onSubmit = this.onSubmit.bind(this);
  // }

  componentDidMount() {
    console.log('correct event iD?', this.props.event._id)
    this.props.dispatch(fetchSchedules(this.props.event._id));
  }

  render() {
    if (this.props.loggedIn) {
      console.log('props', this.props)
      // const id = this.props.match.params.id;
      // console.log('route param id', id)

      // if (this.props.events !== undefined) {
      //   const events = this.props.events.map((event, index) => (
      //     <EventCard index={index} key={index} {...event} />
      //   ))

      //   console.log('event', events)

      return (
        <div className="event-room-container">
          <h1>{this.props.event.title}</h1>
          <div className="Tasks-wrapper"><Tasks /></div>
          <div className="schedule-wrapper"><Schedule /></div>
          <div className="chat-wrapper"><Chat /></div>
        </div>
      )
    }
    return <Redirect to="/signin" />;
  }

}

const mapStateToProps = (state) => ({
  // const event = state.event_room.event
  // console.log('correct event iD?', event)
  // return {
    // events: state.protected_data.events,
    event: state.event_room.event,
    protectedData: state.protected_data.data,
    loggedIn: state.auth.username !== null
  // }
})

// const mapDispatchToProps = ({
//   // setHeaderText: setHeaderText
// })

export default connect(mapStateToProps)(withRouter(EventRoom));

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }