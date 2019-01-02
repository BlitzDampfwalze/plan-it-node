import { fetchSchedules } from "../actions/event-room";

const initialState = {
  loading: false,
  event: {},
  error: null,
  schedules: []

};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SET_EVENT_INFO':
      return Object.assign({}, state, {
        event: action.data
      });

    case 'FETCH_SCHEDULES_SUCCESS':
      return Object.assign({}, state, {
        schedules: action.data,
        error: null
      });

    case 'FETCH_PROTECTED_DATA_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state
  }
}