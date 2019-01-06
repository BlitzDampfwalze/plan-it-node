import React, { Component } from 'react'
import { connect } from "react-redux";

import { updateTask } from '../actions/event-room'

class UserTasks extends Component {
  state = {
    checkBox: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.checked
    })
    console.log('value of states checkbox', this.state.checkBox, this.props._id, this.props.taskDetails)
    this.props.dispatch(updateTask(this.props._id, this.state.checkBox, this.props.taskDetails));
  }

  render() {
    // const users = this.props.user
    // console.log('TASKS comp props', this.props)


    return (
      <div>
        <input type="checkbox" id="checkBox" onChange={this.handleChange}></input>
        {this.props.taskDetails}

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

export default connect(mapStateToProps)(UserTasks);
