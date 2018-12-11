// import * as actions from "../actions";

const initialState = {
  authToken: "",
  error: null,
  loading: false,
  toMain: false,
};

export const reducer = (state = initialState, action) => {
  // if (action.type === actions.ERROR) {
  //   return Object.assign({}, state, {
  //     error: action.err,
  //     loading: false
  //   });
  // }

  // if (action.type === actions.REQUEST) {
  //   return Object.assign({}, state, {
  //     error: null,
  //     loading: true,
  //     toMain: false
  //   });
  // }

  return state;
};