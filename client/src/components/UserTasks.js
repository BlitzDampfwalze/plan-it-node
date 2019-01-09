import React, { Component } from 'react'
import { connect } from "react-redux";

import { updateTask } from '../actions/event-room'

class UserTasks extends Component {
  state = {
    checkBox: null
  }

  handleCheckBox = (e) => {
    this.setState({
      [e.target.id]: !this.props.completed
    })
    // if(e.target.c)
    // if (e.target.checked === true) {
    //   this.setState({
    //     [e.target.id]: false
    //   })
    // } else {
    //   this.setState({
    //     [e.target.id]: true
    //   })
    // }
    // const completion = e.target.checked ? false : true;
    console.log('value of states checkbox', this.state.checkBox, this.props._id, this.props.taskDetails)
    // let completion = this.props.completed ? false : true;
    this.props.dispatch(updateTask(this.props._id,
      this.state.checkBox
      // completion
      , this.props.taskDetails));
  }

  render() {
    // const users = this.props.user
    // console.log('TASKS comp props', this.props)

    // let taskCheckBox;
    // if (this.props.completed) {
    //   this.setState({
    //     checkBox: true
    //   })
    //   let taskCheckBox = <input type="checkbox" id="checkBox" checked onChange={this.handleCheckBox}></input>
    // } else {
    //   this.setState({
    //     checkBox: false
    //   })
    //   let taskCheckBox = <input type="checkbox" id="checkBox" onChange={this.handleCheckBox}></input>
    // }


    const taskCheckBox = this.props.completed ? <input type="checkbox" id="checkBox" checked onChange={this.handleCheckBox}></input> : <input type="checkbox" id="checkBox" onChange={this.handleCheckBox}></input>
    // console.log('checkbox', checkbox.checked)
    // if (taskCheckBox !== undefined) {
    return (
      <div>
        {taskCheckBox}
        {this.props.taskDetails}
      </div>
    )
  }
  //   return (
  //     <div>
  //       loading...
  //   </div>
  //   )

  // }
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

// export default UserTasks;
export default connect(mapStateToProps)(UserTasks);
