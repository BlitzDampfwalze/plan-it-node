import { updateLocale } from "moment";

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
      // console.log('Set Event DATA', action.data)
      return Object.assign({}, state, {
        event: action.data,
        eventID: action.data._id,
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
      // console.log('STATE of Tasks', state.tasks)
      return {
        ...state, tasks: [...state.tasks, action.data]
      }

    case 'UPDATE_TASKS':
      let id = action.data._id
      const updatedTasks = state.tasks.map((item) => {
        if (item._id === id) {
          item.completed = !item.completed;
        }
        return item;
      });

      return {
        ...state,
        tasks: updatedTasks
      }

    case 'UPDATE_SCHEDULE':
      const updatedSchedule = state.schedules.map((item) => {
        if (item._id === action.data._id) {
          item = action.data
        }
        return item;
      });

      return {
        ...state,
        schedules: updatedSchedule
      }

    case 'FETCH_TASKS_SUCCESS':
      return Object.assign({}, state, {
        tasks: action.data,
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