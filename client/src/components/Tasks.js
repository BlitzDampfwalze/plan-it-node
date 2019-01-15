import React, { Component } from 'react'
import { connect } from "react-redux";

import UserTasks from './UserTasks';

import "../style/eventroom.css";
import "../style/tasks.css";

class Tasks extends Component {

  // onDelete(event_id) {
  //   console.log(event_id)
  //   this.props.deleteEvent(event_id, this.props.token)
  // }

  render() {
    // const users = this.props.user
    // console.log('TASKS props', this.props)

    // const Users = [...new Set(data.map(task => task.user.username))]
    // // console.log('USERS:::', Users)
    // const tasksByUser = Users.map(user => {
    //   return data.filter(task => task.user.username === user)
    // })


    //////////
    const tasks = this.props.tasks.map((task, index) => (
      <UserTasks index={index} key={index} {...task} />
    ))
    //////////
    // console.log("User's Tasks props:", this.props.tasks)
    return (
      <div className="user-tasks">
        <div className="tasks-username">{this.props.tasks[0].user.username}</div>
        {tasks}
        {/* <button className="card-item" data-event-id={this.props._id} onClick={e => {
          console.log(e.currentTarget.getAttribute('data-event-id'))
          this.onDelete(e.currentTarget.getAttribute('data-event-id'))
        }}>Delete Completed</button> */}
        <button>Clear completed</button>
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
