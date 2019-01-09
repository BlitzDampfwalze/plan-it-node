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
      console.log('STATE of Tasks', state.tasks)
      return {
        ...state, tasks: [...state.tasks, action.data]
      }

    case 'UPDATE_TASKS':
      // const indexOftask = state.tasks.findIndex(i => i._id === action.data._id);
      // console.log('index of TASK store', indexOftask)
      // const filteredTasks = []
      // console.log('filteredTasks', filteredTasks)
      // const allTasks = filteredTasks.push('action.data')
      // console.log("all tasks", allTasks)
      console.log("action datas", action.data)
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task._id !== action.data._id)].concat(action.data)
      }
      //   ...state, tasks: [
      //     filteredTasks, 
      //     action.data
      //   ]
      // }

      // function updateObjectInArray(array, action) {
      //   return array.map((item, index) => {
      //     if (index !== action.index) {
      //       // This isn't the item we care about - keep it as-is
      //       return item
      //     }

      //     // Otherwise, this is the one we want - return an updated value
      //     return {
      //       ...item,
      //       ...action.item
      //     }
      //   })
      // }

      console.log('state & actionData', state, action.data)
      console.log('state & actionData2', { ...state, tasks: [...state.tasks, action.data] })
    // return {
    //   ...state, tasks: [...state.tasks, action.data]
    // }
    // return Object.assign({}, state.tasks, {
    //   tasks: [...state.tasks, action.data],
    //   error: null
    // });


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