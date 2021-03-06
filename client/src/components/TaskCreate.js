import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTask } from '../actions/event-room'

import "../style/taskcreate.css";

class TaskCreate extends Component {
  state = {
    taskDetails: '',
    user: ''
  }

  handleChange = (e) => {
    if (this.state.user === '') {
      this.setState({
        user: this.props.users[0]._id
      })
    }
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log('state', this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.taskDetails === '') {
      return alert('Description cannot be blank')
    }
    this.props.createTask(this.state);
    this.setState({
      taskDetails: ''
    })
  }

  render() {
    if (this.props.users !== undefined) {
      const selection = this.props.users.map((user, index) => {
        return (
          <option key={index} id={user} value={user._id}>{user.username}</option>
        )
      })

      return (
        <form className="task-form" onSubmit={this.handleSubmit}>

          <div>Assign task to user:</div>
          <div className="select-user">
            <select id="user" onChange={this.handleChange}>
              {selection}
            </select >
          </div>

          <div>
            <label htmlFor="taskDetails"></label>
            <textarea className="desc-input" value={this.state.taskDetails} placeholder="e.g., research accomodations, restaurants, sites, museums, etc..." type="text" id="taskDetails" rows="5" onChange={this.handleChange}></textarea>
          </div>

          <button>Create New Task</button>

        </form>
      )

    }
    return (<div>Loading...</div>)
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.event_room.event.users,
    token: state.auth.authToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (inputs, token) => dispatch(createTask(inputs, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate)
