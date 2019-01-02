import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'

// import { setHeaderText } from '../actions'
import Tasks from './Tasks';
import Schedule from './Schedule';



import "../style/eventroom.css";

export class EventRoom extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.onSubmit = this.onSubmit.bind(this);
  // }

  render() {
    if (this.props.loggedIn) {
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
    return <Redirect to="/signin" />;
  }

}

const mapStateToProps = (state) => ({
  // navbar: state.navbar
  loggedIn: state.auth.username !== null
})

const mapDispatchToProps = ({
  // setHeaderText: setHeaderText
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventRoom));

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }