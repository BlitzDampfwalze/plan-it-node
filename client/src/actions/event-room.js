import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';


export const FETCH_SCHEDULES_SUCCESS = 'FETCH_SCHEDULES_SUCCESS';
export const fetchScheduelsSuccess = data => ({
  type: FETCH_SCHEDULES_SUCCESS,
  data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});



export const fetchSchedules = (event_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/events/${event_id}/schedule`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(fetchScheduelsSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};