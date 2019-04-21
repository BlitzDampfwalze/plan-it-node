import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';

export const authRequest = () => ({
  type: 'AUTH_REQUEST'
});

export const request = () => ({
  type: 'REQUEST'
});

export const STORE_FETCHED_EVENTS = 'STORE_FETCHED_EVENTS';
export const storeFetchedEvents = data => ({
  type: STORE_FETCHED_EVENTS,
  data
});

export const addEventToState = data => ({
  type: 'ADD_EVENT',
  data
});

export const deleteEventInState = data => ({
  type: 'DELETE_EVENT',
  data
})

export const storeEventRoomInfo = (data) => ({
  type: 'SET_EVENT',
  data
});

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
});

export const createEvent = (event_id, token) => dispatch => {
  dispatch(authRequest());
  fetch(`${API_ORIGIN}/api/events`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token 
    },
    body: JSON.stringify(event_id)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log('DATA DATA', data)
      dispatch(addEventToState(data))
    })
    .catch(err => {
      window.alert(`${err}: Password, Title, Description Required!`)
    });
};

export const joinEventRoom = (event_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const user_id = getState().auth.userID;

  fetch(`${API_ORIGIN}/api/events/${event_id}/join/${user_id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(getPopulatedEvent(event_id, token))
    })
    .catch(err => {
      window.alert(err)
    });
};

export const getPopulatedEvent = (event_id, token) => (dispatch) => {

  fetch(`${API_ORIGIN}/api/events/${event_id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },

  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(storeEventRoomInfo(data))
    })
    .catch(err => {
      window.alert(err)
    });

}

export const fetchEvents = () => (dispatch, getState) => {
  const token = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/events`, {
    method: 'GET',
    headers: {
      // Provide auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(storeFetchedEvents(data)))
    .catch(err => {
      dispatch(fetchDataError(err));
    });
};

export const deleteEvent = (id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  dispatch(authRequest());
  return fetch(`${API_ORIGIN}/api/events/${id}`, {
    method: 'DELETE',
    headers: {
      // auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      console.log('delete res.json', res)
      // res.json()
    })
    .then(() => {
      console.log('delete data', id)
      dispatch(deleteEventInState(id))
    })
    .catch(err => {
      console.log('delete event err', err)
      dispatch(fetchDataError(err));
    });
};