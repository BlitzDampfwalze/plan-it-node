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
  // constructor(props) {
  //   super(props);

  // }

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  // addList(title) {
  //     this.props.dispatch(addList(title));
  // }

  render() {
    if (this.props.loggedIn) {

      // const lists = this.props.lists.map((list, index) => (
      //     <li className="list-wrapper" key={index}>
      //         <List index={index} {...list} />
      //     </li>
      // ));

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

      // (
      // <div className="board">
      //     <h2>{this.props.title}</h2>
      //     <ul className="lists">
      //         {lists}
      //         <li className="add-list-wrapper">
      //             <AddForm
      //                 type="list"
      //                 onAdd={title => this.addList(title)}
      //             />
      //         </li>
      //     </ul>
      // </div>
      // );
    }
    return <Redirect to="/signin" />;
  }

}

const mapStateToProps = (state) => ({

  events: state.protected_data.events,
  protectedData: state.protected_data.data,
  loggedIn: state.auth.username !== null

});


export default connect(mapStateToProps)(withRouter(Dashboard));
