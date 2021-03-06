import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { combineReducers } from 'redux'

import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions';

import auth from './reducers/auth'
import event_room from './reducers/event-room-data'

const store = createStore(combineReducers({
  auth,
  event_room
}),
  applyMiddleware(thunk)
)

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  // store.dispatch(refreshAuthToken());
}

export default store;