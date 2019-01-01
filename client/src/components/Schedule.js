import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'

export class Schedule extends Component {


  render() {


      return (
        <div>
          schedule div
      </div>
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
