const initialState = {
  data: '',
  error: null,
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_EVENT':
      return {
        ...state, events: [...state.events, action.data]
      }
    // Object.assign({}, state, {
    // events: state.events.push(action.data),
    // error: null
    // });

    case 'DELETE_EVENT':
      // console.log('state ids', state.events)
      const newState = state.events.filter((event) => event._id !== action.data)
      // console.log('S T A T E', newState)
      return { ...state, events: newState }

    case 'FETCH_PROTECTED_DATA_SUCCESS':
      return Object.assign({}, state, {
        events: action.data,
        error: null
      });

    case 'FETCH_PROTECTED_DATA_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

