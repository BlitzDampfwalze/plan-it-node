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

    case 'DELETE_EVENT':
      const newState = state.events.filter((event) => event._id !== action.data)
      return { ...state, events: newState }

    case 'FETCH_PROTECTED_DATA_SUCCESS':
      return Object.assign({}, state, {
        events: action.data,
        error: null
      });

    case 'FETCH_DATA_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

