import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { fetchSchedules, fetchTasks } from '../actions/event-room';

import Tasks from './Tasks';
import Schedule from './Schedule';
import Chat from './Chat';
import UserTasks from './UserTasks';
import ScheduleCreate from './ScheduleCreate';
import TaskCreate from './TaskCreate';



import "../style/eventroom.css";

export class EventRoom extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.onSubmit = this.onSubmit.bind(this);
  // }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(fetchSchedules(id));
    this.props.dispatch(fetchTasks(id));
  }

  render() {
    if (this.props.loggedIn) {
      // console.log('props', this.props)
      // const id = this.props.match.params.id;
      // console.log('route param id', id)

      /////////Working when returning only array of tasks from the fetch, but need to place divs around Users//////////
      // const Users = [...new Set(this.props.tasks.map(task => task.user))]
      // console.log('USERS', Users)
      // const sortedTasks = Users.map(user => {
      //   return this.props.tasks.filter(task => task.user === user)
      // }).map(userTasks => {
      //   return userTasks.map((task, index) => (
      //     <Tasks index={index} key={index} {...task} />
      //   ))
      // })
      /////////////////////////////////////////////

      // if (this.props.events !== undefined) {
      const schedules = this.props.schedules.map((schedule, index) => (
        <Schedule index={index} key={index} {...schedule} />
      ))

      // console.log('this.props.tasks:', this.props.tasks)
      const userTasks = this.props.tasks.map((items, index) => (
        <UserTasks index={index} key={index} tasks={items} />
      ))

      // console.log('USER Tasks Mapped:', userTasks)

      return (
        <div className="event-room-container">
          <h1>{this.props.event.title}</h1>

          <div className="tasks-wrapper">
            <div className="Tasks-wrapper">{userTasks}</div>
            {/* <div className="Tasks-wrapper">{sortedTasks}</div> */}
            {/* <div className="Tasks-wrapper">{tasksByUser}</div> */}
            <TaskCreate />
          </div>

          <div className="schedule-wrapper">
            <ul>
              <li>Location:</li>
              <li>Date:</li>
              <li>Details:</li>
            </ul>
            {schedules}
            <ScheduleCreate />
          </div>

          <div className="chat-wrapper"><Chat /></div>

        </div>
      )
    }
    return <Redirect to="/signin" />;
  }

}

const mapStateToProps = (state) => ({
  // const event = state.event_room.event
  // console.log('correct event iD?', event)
  // return {
  // events: state.protected_data.events,
  loading: state.event_room.loading,
  eventID: state.event_room.eventID,
  event: state.event_room.event,
  schedules: state.event_room.schedules,
  tasks: state.event_room.tasks,
  protectedData: state.protected_data.data,
  loggedIn: state.auth.username !== null
  // }
})

// const mapDispatchToProps = ({
//   // setHeaderText: setHeaderText
// })

export default connect(mapStateToProps)(withRouter(EventRoom));

{/* <Link to="/dashboard/user">{this.props.navbar.text}</Link> */ }