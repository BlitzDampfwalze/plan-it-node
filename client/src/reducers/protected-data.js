const initialState = {
  data: '',
  error: null,
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'UPDATE_EVENTS':
      console.log(action, 'action')
      return {
        ...state, events: [...state.events, action.data]
      }
    // Object.assign({}, state, {
    // events: state.events.push(action.data),
    // error: null
    // });

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

