import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';

export const updateSchedule = data => ({
  type: 'UPDATE_SCHEDULE',
  data
})

export const deleteScheduleInState = data => ({
  type: 'DELETE_SCHEDULE',
  data
})

export const scheduleUpdate = (inputs, schedule_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  console.log('inputs:', inputs, 'taskID:', inputs.dateEdit, inputs.detailsEdit, inputs.locationEdit)
  fetch(`${API_ORIGIN}/api/events/${event_id}/schedule/${schedule_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify({
      'date': inputs.dateEdit,
      'details': inputs.detailsEdit,
      'location': inputs.locationEdit
    })


  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((updatedSchedule) => {
      console.log('Schedule PUT DATA', updatedSchedule)
      dispatch(updateSchedule(updatedSchedule))
    })
    .catch(err => {
      window.alert(err)
      // dispatch(fetchErr(err));
    });
};

export const scheduleDelete = (id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  // dispatch(authRequest());
  return fetch(`${API_ORIGIN}/api/events/${event_id}/schedule/${id}`, {
    method: 'DELETE',
    headers: {
      // auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      console.log('delete res.json', res)
    })
    .then(() => {
      dispatch(deleteScheduleInState(id))
    })
    .catch(err => {
      console.log('delete event err', err)
      // dispatch(fetchDataError(err));
    });
};