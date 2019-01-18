import React, { Component } from 'react'
import { connect } from "react-redux";

import { updateTask } from '../actions/event-room'

import "../style/tasks.css";

class UserTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkBox: props.completed
    }

  }


  handleCheckBox = (e) => {
    console.log('checkbox', this.state.checkBox)
    this.setState({ [e.target.id]: !this.props.completed }, () => {
      this.props.updateTask(this.props._id, this.state.checkBox, this.props.taskDetails);
    })

    // setTimeout(() => console.log(this.state), 2000)
    // this.props.updateTask(this.props._id, this.state.checkBox, this.props.taskDetails);
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


    const taskCheckBox = <input type="checkbox" id="checkBox" checked={this.state.checkBox} onChange={this.handleCheckBox}></input>
    // console.log('checkbox', checkbox.checked)
    // if (taskCheckBox !== undefined) {
    return (
      <div className="individual-task-wrapper">
        {taskCheckBox}
        <div className="task-text">{this.props.taskDetails}</div>
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (id, checked, details) => dispatch(updateTask(id, checked, details))
  }
}

// export default UserTasks;
export default connect(mapStateToProps, mapDispatchToProps)(UserTasks);
