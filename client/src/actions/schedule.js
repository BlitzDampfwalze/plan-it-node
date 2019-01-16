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
  // console.log('inputs:', completion, 'taskID:', task_id, event_id)
  fetch(`${API_ORIGIN}/api/events/${event_id}/schedule/${schedule_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify({
      'date': inputs.Date,
      'details': inputs.Details,
      'location': inputs.Location
    })


  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then((data) => dispatch(addItemToSchedule(data)))
    // .catch(err => {
    //   dispatch(fetchDataError(err));
    // });

    // .then(res => console.log(res.json(), 'create res'))

    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      // return test
      return res.json();
    })
    .then((data) => {
      console.log('Schedule PUT DATA', data)
      dispatch(updateSchedule(data))
    })

    // .then((event) => {
    //   console.log('user signin res', user)
    //   storeAuthInfo(user, dispatch)
    // })
    .catch(err => {
      console.log(err)
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
      // res.json()
    })
    .then(() => {
      // console.log('delete data', id)
      dispatch(deleteScheduleInState(id))
    })
    .catch(err => {
      console.log('delete event err', err)
      // dispatch(fetchDataError(err));
    });
};