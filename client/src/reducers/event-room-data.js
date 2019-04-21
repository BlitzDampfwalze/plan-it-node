const initialState = {
  loading: false,
  eventID: '',
  event: {},
  events: [],
  error: null,
  schedules: [],
  tasks: [],
  data: ''
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
        eventID: action.data._id,
        loading: false,
      });

    case 'ADD_EVENT':
      return {
        ...state, events: [...state.events, action.data]
      }

    case 'DELETE_EVENT':
      const newStateEvents = state.events.filter((event) => event._id !== action.data)
      return { ...state, events: newStateEvents }

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

    case 'DELETE_TASK':
      const newStateTasks = state.tasks.filter((task) => task._id !== action.data)
      return { ...state, tasks: newStateTasks }

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

    case 'DELETE_SCHEDULE':
      const newStateSchedule = state.schedules.filter((schedule) => schedule._id !== action.data)
      return { ...state, schedules: newStateSchedule }

    case 'FETCH_TASKS_SUCCESS':
      return Object.assign({}, state, {
        tasks: action.data,
        error: null
      });


    case 'FETCH_DATA_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });

    case 'STORE_FETCHED_EVENTS':
      return Object.assign({}, state, {
        events: action.data,
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