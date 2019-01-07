import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTask } from '../actions/event-room'

class TaskCreate extends Component {
  state = {
    taskDetails: '',
    user: ''
  }

  componentDidMount() {
    if (this.props.users !== undefined) {
      this.setState({ user: this.props.users[0] })
    }
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
  }

  render() {
    if (this.props.users !== undefined) {
      // console.log('USERS in room:', this.props.users)
      const selection = this.props.users.map((user, index) => {
        return (
          <option key={index} id={user.id}>{user.username}</option>
        )

      })




      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div>Create New *TASK*</div>
            <select id="user" onChange={this.handleChange}>
              {selection}
            </select >
            <div>
              <label htmlFor="taskDetails">description</label>
              <input type="text" id="taskDetails" onChange={this.handleChange} />
            </div>
            {/* <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div> */}
            <button>Create</button>
          </form>
        </div>
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
