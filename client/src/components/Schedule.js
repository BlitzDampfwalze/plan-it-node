import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'

import moment from 'moment'

export class Schedule extends Component {


  render() {

    return (
      <ul>
        <li>{this.props.location}</li>
        <li>{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
        <li>{this.props.details}</li>
      </ul>
    )
  }

}

const mapStateToProps = (state) => ({
  // return {

  // token: state.auth.authToken,
  // events: state.protected_data.events,
  // userID: state.auth.userID
  // protectedData: state.protected_data.data
  // }
})
// const mapDispatchToProps = (dispatch) => {
//   // return {
//   //   deleteEvent: (id, token) => dispatch(deleteEvent(id, token)),
//   //   joinEventRoom: (event_id) => dispatch(joinEventRoom(event_id))
//   // }
// }

export default connect(mapStateToProps)(Schedule);
// export default Schedule;
