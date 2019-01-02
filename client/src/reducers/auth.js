const initialState = {
  authToken: null,
  loading: false,
  userObject: null,
  username: null,
  userID: '',
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'CLEAR_AUTH':
      return Object.assign({}, state, {
        authToken: null,
        userObject: null,
        username: null,
        userID: '',
      });

    case 'SET_AUTH_TOKEN':
      return Object.assign({}, state, {
        authToken: action.authToken,
        loading: false
      });

    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        userObject: action.currentUser,
        username: action.currentUser.username,
        userID: action.currentUser.id
      });

    case 'AUTH_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      });

    case 'AUTH_ERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });


    default:
      return state
  }
}