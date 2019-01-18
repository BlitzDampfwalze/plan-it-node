import React, { Component } from 'react'
import { connect } from "react-redux";

import UserTasks from './UserTasks';

import { deleteTask } from '../actions/event-room';

import "../style/eventroom.css";
import "../style/tasks.css";

class Tasks extends Component {

  handleClear = () => {
    console.log(this.props)
    let deleteIDs = [];
    const ids = this.props.tasks.map(task => {
      if (task.completed === true) {
        deleteIDs.push(task._id)
        this.props.dispatch(deleteTask(task._id))
      }
    })
  }

  render() {

    const tasks = this.props.tasks.map((task, index) => (
      <UserTasks index={index} key={index} {...task} />
    ))

    return (
      <div className="user-tasks">
        <div className="tasks-username">{this.props.tasks[0].user.username}</div>
        {tasks}
        <button className="clear-completed-button" onClick={this.handleClear}>Clear completed</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Tasks);
