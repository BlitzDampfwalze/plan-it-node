import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'

import { fetchEvents } from '../actions/dashboard';

import EventCard from './EventCard';
import EventCardCreate from './EventCardCreate';

// import List from './list';
// import AddForm from './add-form';

// import {addList, fetchBoard} from '../actions';

import "../style/dashboard.css";

export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    if (this.props.loggedIn) {

      if (this.props.events !== undefined) {
        const events = this.props.events.map((event, index) => (
          <EventCard index={index} key={index} {...event} />
        ))


        return (
            <div className="dashboard-wrapper">
              <div className="background-image-overlay"></div>
              <EventCardCreate />
              <div className="eventcards-wrapper">
                {events}
              </div>
            </div>
        );
      }
    }
    return <Redirect to="/signin" />;
  }
}

const mapStateToProps = (state) => ({

  events: state.event_room.events,
  loggedIn: state.auth.username !== null

});

export default connect(mapStateToProps)(withRouter(Dashboard));
