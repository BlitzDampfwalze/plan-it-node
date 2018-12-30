import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';

export const authRequest = () => ({
  type: 'AUTH_REQUEST'
});

export const createEvent = (event, token) => dispatch => {
  dispatch(authRequest());
  fetch(`${API_ORIGIN}/api/events`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify(event)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      // let test = res.json();
      // console.log(test, "test")
      // return test
      return res.json();
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

///////
// export const fetchEvents = () => dispatch => {
//   dispatch(request());
//   fetch(`${API_ORIGIN}/videos/search/${term}`, {
//     mode: "cors",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(res => {
//       dispatch(appendResults(res.response.body));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
///////



export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});

export const fetchEvents = () => (dispatch, getState) => {
  const token = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/events`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};