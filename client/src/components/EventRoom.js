import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { fetchSchedules, fetchTasks } from '../actions/event-room';

import Tasks from './Tasks';
import Schedule from './Schedule';
import ScheduleCreate from './ScheduleCreate';
import TaskCreate from './TaskCreate';



import "../style/eventroom.css";
import "../style/schedule.css";
import "../style/tasks.css";
import "../style/taskcreate.css";

export class EventRoom extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(fetchSchedules(id));
    this.props.dispatch(fetchTasks(id));
  }

  render() {
    if (this.props.loggedIn && this.props.tasks !== undefined) {

      const schedules = this.props.schedules.map((schedule, index) => (
        <Schedule index={index} key={index} {...schedule} />
      ))

      //Create an array of unique users
      const Users = [...new Set(this.props.tasks.map(task => task.user.username))]
      //Return an array of tasks for each unique user
      const tasksByUser = Users.map(user => {
        return this.props.tasks.filter(task => task.user.username === user)
      })

      const allTasks = tasksByUser.map((items, index) => (
        <Tasks index={index} key={index} tasks={items} />
      ))

      return (
        <div className="event-room-container">
          <h1 className="event-title">{this.props.event.title}</h1>

          <div className="event-room-wrapper">

            <div className="tasks-container">
              <div className="tasks-wrapper">{allTasks}</div>
              <div className="task-create-wrapper">
                <TaskCreate />
              </div>

            </div>

            <div className="schedule-container">
              {schedules}
              <ScheduleCreate />
            </div>

            {/* <div className="chat-wrapper"><Chat /></div> //under development */}

          </div>

        </div>
      )
    }
    return <Redirect to="/signin" />;
  }

}

const mapStateToProps = (state) => ({
  loading: state.event_room.loading,
  eventID: state.event_room.eventID,
  event: state.event_room.event,
  schedules: state.event_room.schedules,
  tasks: state.event_room.tasks,
  protectedData: state.protected_data.data,
  loggedIn: state.auth.username !== null
})

export default connect(mapStateToProps)(withRouter(EventRoom));