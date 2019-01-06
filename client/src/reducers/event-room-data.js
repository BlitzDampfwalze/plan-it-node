// import { fetchSchedules, fetchTasks } from "../actions/event-room";

const initialState = {
  loading: false,
  eventID: '',
  event: {},
  error: null,
  schedules: [],
  tasks: [],
  // eventUsers: [],

};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'REQUEST':
      return Object.assign({}, state, {
        loading: true
      });

    case 'SET_EVENT':
      return Object.assign({}, state, {
        event: action.data,
        eventID: action.eventID,
        loading: false,
      });

    // case 'STORE_USER_TO_EVENT':
    //   return Object.assign({}, state, {
    //     eventUsers: action.user
    //   });

    case 'FETCH_SCHEDULES_SUCCESS':
      return Object.assign({}, state, {
        schedules: action.data,
        error: null
      });

    case 'ADD_TO_SCHEDULE':
      return {
        ...state, schedules: [...state.schedules, action.data]
      }

    case 'ADD_TO_TASKS':
      return {
        ...state, tasks: [...state.tasks, action.data]
      }

    case 'UPDATE_TASKS':
      return {
        ...state, tasks: [...state.tasks, action.data]
      }


    case 'FETCH_TASKS_SUCCESS':
      return Object.assign({}, state, {
        tasks: action.tasksByUser,
        error: null
      });


    case 'FETCH_DATA_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state
  }
}