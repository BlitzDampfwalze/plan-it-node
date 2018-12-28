const initialState = {
  authToken: '',
  loading: false,
  user: null,
  userID: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SET_AUTH_TOKEN':
      return Object.assign({}, state, {
        authToken: action.token,
        loading: false
      });

    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        user: action.currentUser,
        // user: action.currentUser.username,
        // userID: action.currentUser.id
      });

    // case 'SIGN_IN':
    //   return Object.assign({}, state, {
    //     error: action.err
    //   });

    // case 'SIGN_OUT':
    //   return 

    default:
      return state
  }
}