import React, { Component } from 'react'
import { connect } from "react-redux";

import UserTasks from './UserTasks';

class Tasks extends Component {
  render() {
    // const users = this.props.user
    // console.log('TASKS comp props', this.props)
    const tasks = this.props.tasks.map((task, index) => (
      <UserTasks index={index} key={index} {...task} />
    ))
    // console.log("User's Tasks:", this.props.tasks)
    return (
      <div>
        <div>USERNAME: {this.props.tasks[0].user.username}</div>
        {tasks}
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
