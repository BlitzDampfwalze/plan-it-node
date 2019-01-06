import React, { Component } from 'react'
import { connect } from "react-redux";

class Tasks extends Component {
  render() {
    // const users = this.props.user
    // console.log('TASKS comp props', this.props)


    return (
      <div>
        {/* <div>{this.props.taskDetails}</div> */}
        Task: {this.props.taskDetails}
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

export default connect(mapStateToProps)(Tasks);
